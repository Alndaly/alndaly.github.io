import {
    debug,
    formSerializer,
    isPlainObject,
    joinUrl,
    objectToQs,
    stringify,
} from '../common';
import { statusCodeMsg, toJson } from './handlers';

export type Params = Record<string, any>;

const defaultOptions = {
    mode: 'cors' as RequestMode,
    // credentials: 'include' as RequestCredentials,
};

// 获取请求url
export const getUrl = (url: string, method: string, params: Params): string => {
    const TIMESTAMP = '_ksTS';
    let searchParams: any = {};
    if (method === 'GET') {
        searchParams[TIMESTAMP] = new Date().valueOf();
        if (isPlainObject(params)) searchParams = { ...searchParams, ...params };
    }
    return joinUrl(url, objectToQs(searchParams, false, { encodeValuesOnly: false }));
};

/**
 * 请求主体
 * @param {string} url
 * @param {Params} params
 * @param {RequestOption} options
 * */
export const request = async (url: string, params: Params = {}, options: RequestInit = {}) => {
    const { method = 'GET' } = options;
    const realUrl: string = getUrl(url, method, params);
    const realOptions: RequestInit = { ...defaultOptions, ...options };

    debug.req(`${method}: ${realUrl} options: %o`, realOptions);
    return fetch(realUrl, realOptions).then((response: Response) => {
        const statuCode = response.status;
        if (statuCode >= 200 && statuCode < 300) {
            return toJson(response).then((result: any) => {
                debug.res(`${method}: ${realUrl}  result: %o`, result);
                return result;
            });
        }
        // @ts-ignore
        const error = new Error(statusCodeMsg[statuCode] || response.statusText);
        // @ts-ignore
        error.__response = response;
        return Promise.reject(error);
    });
};

/**
 * 标准get请求
 * @param {string} url
 * @param {Param} params
 * @param {RequestOption} options
 * */
export function get(url: string, params?: Params, options?: RequestInit) {
    return request(url, params, { method: 'GET', ...options });
}

/**
 * 标准post请求
 * @param {string} url
 * @param {Params} params
 * @param {RequestOption} options
 * */
export function post(url: string, params?: Params, options?: RequestInit) {
    const { headers, body } = options || {};
    return request(
        url,
        {},
        {
            ...options,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                ...headers,
            },
            body: body || formSerializer(stringify(params || {})),
        },
    );
}