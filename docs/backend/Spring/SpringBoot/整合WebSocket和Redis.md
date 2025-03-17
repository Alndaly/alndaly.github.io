## 背景

`SpringBoot`项目中，在`WebSocket`中想使用`Redis`。把自己编写的`RedisUtils`使用`@Autowired`自动注入到当前类。

在运行时，出现异常：`java.lang.NullPointException`，找不到`RedisUtils`

## 原因

- 自己编写的`RedisUtils`没有放到`spring`容器中（导致没有实例化）。经过测试，排除此原因。（简单的通过一个`Controller`中操作`redis`判断即可，或者直接取出所有的bean看下是否存在。）
- `WebSocket`是多对象的，使用的`spring`却是单例模式。这两者刚好冲突。`@Autowired`注解注入对象是在启动的时候就把对象注入，而不是在使用`A`对象时才把`A`需要的`B`对象注入到`A`中。而`WebSocket`在刚刚有说到，有连接时才实例化对象，而且有多个连接就有多个对象。由此得知，`RedisUtils`根本就没有注入到`WebSocket`当中。

## 解决方法

### 方法一

让`RedisUtils`属于`WebSocketServer`这个类。

```java
private static RedisUtils redisUtils;

@Autowired
public void setRedisUtils(RedisUtils redisUtils) {
    WebSocketServer.redisUtils = redisUtils;
}
```

### 方法二

#### 编写从容器中取对象的工具类

```java         
@Component
public class SpringUtil implements ApplicationContextAware {
    private static ApplicationContext applicationContext;
 
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        SpringUtil.applicationContext = applicationContext;
    }
 
    public ApplicationContext getApplicationContext(){
        return applicationContext;
    }
 
    public static Object getBean(String beanName){
        return applicationContext.getBean(beanName);
    }
 
    public static <T> T getBean(Class<T> clazz){
        return (T)applicationContext.getBean(clazz);
    }
}
```

#### 然后再在`WebSocket`中

```java
RedisUtil redisUtil = SpringUtil.getBean(RedisUtil.class);
```

:::note
需要在方法里面的局部变量调用`RedisUtil redisUtil = SpringUtil.getBean(RedisUtil.class);`才可以，不能放在全局变量，因为在全局变量的话，在`applicationContext`还没`set`的时候被调用`getBean`方法，这时的`applicationContext`是`null`，会报空指针异常。
:::
