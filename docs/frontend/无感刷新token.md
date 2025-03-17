```ts title=request.ts
import { v4 as uuidv4 } from 'uuid';
import cache from '@/utils/cache/index';
import { userStore } from 'stores/user';
import message from '../message';

interface ApiData {
  code: number,
  message: string,
  data: any,
}

// 默认刷新状态，确保一旦遇到token过期的状况就能更新
let isTokenRefreshing = true;
// 防止多次请求token获取接口（限制三次，三次以后直接显示账号信息错误）
let refreshTokenTimes = 0;
// 防止access_token错误情况下而refresh_token的无限请求边际情况
// let wrongAuth = 0;
// 被拦截的请求数组
let subscribers: any[] = [];

// 处理被缓存的请求
function onAccessTokenFetched() {
  subscribers.forEach((callback) => {
    callback();
  });
  // 处理完后清空缓存请求数组
  subscribers = [];
}

async function refreshToken() {
  if (refreshTokenTimes >= 3) {
    message.error('登陆信息已过期，即将跳转到登陆页面');
    cache.clear()
    setTimeout(() => {
      window.location.reload()
    }, 1000)
    return;
  }
  isTokenRefreshing = true;
  refreshTokenTimes++;
  const user = userStore();
  const res = await user.onUpdateToken();
  isTokenRefreshing = false;
  if (res && res.code === 20000) {
    onAccessTokenFetched();
  } else {
    refreshToken()
  }
}

// 将请求缓存到请求数组中
function addSubscriber(callback: any) {
  subscribers.push(callback)
}


const checkTokenRefreshStatus = (url: string, data: any, method: any) => {
  // 刷新token的函数,这需要添加一个开关，防止重复请求
  if (isTokenRefreshing) {
    refreshToken();
  }
  isTokenRefreshing = false;
  // 将当前的请求保存在观察者数组中
  const retryOriginalRequest = new Promise((resolve) => {
    addSubscriber(() => {
      resolve(request(url, data, method));
    });
  });
  return retryOriginalRequest;
};

export const request = (url: string, data: any, method: 'POST' | 'GET') => {
  // 防止access_token错误情况下而refresh_token的无限请求边际情况，此时提醒用户重新登陆
  // if (wrongAuth >= 5) {
  //   message.error('多个请求授权失败，重新登陆下？')
  //   return
  // }
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  if (cache.get('access_token')) {
    headers.append('Authorization', 'Bearer ' + cache.get('access_token'));
  }
  return new Promise(async (resolve, reject) => {
    const response = await fetch(url, {
      method: method, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: headers,
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ ...data, traceId: uuidv4() }) // body data type must match "Content-Type" header
    });
    // 请求出错
    if (response && response.status !== 200) {
      // 权限问题
      if (response.status === 401) {
        // const backData: ApiData = await response.json()
        // 注意此处如果过期了那么会直接被后端拦截，不会有code等信息，所以接口类不适用
        // @ts-ignore
        // if (backData?.detail === '身份认证信息未提供。') {
        resolve(checkTokenRefreshStatus(url, data, method))
        // }
      }
    }
    // 请求正常
    const backData: ApiData = await response.json()
    if (backData && backData.code !== 20000) {
      reject(backData)
      return
    } else {
      resolve(backData)
    }
  })
}
```

```ts title=index.ts
import { request } from './request';

/**
 * @param {string} url
 * @param {object} query
 * @returns {Promise<any>}
 * @description 发送get请求
**/
export async function get(url = '', data = {}) {
  const res = request(url, data, 'GET');
  return res
}

/**
 * @param {string} url
 * @param {object} query
 * @returns {Promise<any>}
 * @description 发送post请求
**/
export async function post(url = '', data = {}) {
  const res = request(url, data, 'POST');
  return res
}

/**
 * 将promise对象返回函数转为数组
 * @param promise
 * @returns []
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function to(promise: Promise<any>): Promise<any[]> {
  return new Promise((resolve) => {
    promise.then(
      (res) => {
        return resolve([res, null])
      },
      (err) => {
        return resolve([null, err])
      }
    );
  }
  );
}
```

```ts cache.ts
export default {
  // 此处expire是分钟数
  set(key: string, val: any, expire?: number) {
    try {
      let data;
      let dataObj: any;
      const curTime = data ? dataObj.saveTime : new Date().getTime();
      expire = expire ? (data ? dataObj.expire : (1000 * expire)) : null;
      localStorage.setItem(key, JSON.stringify({
        data: val,
        saveTime: curTime,
        expire
      }));
    } catch (e) {
      console.log(e);
    }
  },

  // 判断是否过期
  expired(key: string) {
    try {
      const data = localStorage.getItem(key);
      if (data) {
        const dataObj = JSON.parse(data);
        if (dataObj.expire && new Date().getTime() - dataObj.saveTime > dataObj.expire) {
          return true
        } else {
          return false
        }
      }
    } catch (e) {
      console.error(e);
    }
  },

  get(key: string) {
    try {
      const data = localStorage.getItem(key);
      if (data) {
        const dataObj = JSON.parse(data);
        if (dataObj.expire && new Date().getTime() - dataObj.saveTime > dataObj.expire) {
          // TODO: 此处token删除逻辑放到业务层去
          // this.remove(key)
          // return null
          return dataObj.data
        } else {
          return dataObj.data
        }
      }
      return null
    } catch (e) {
      console.error(e);
    }
  },

  remove(key: string) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      // error
      console.error(e);
    }
  },

  clear() {
    try {
      localStorage.clear();
    } catch (e) {
      // error
      console.error(e);
    }
  }
}
```