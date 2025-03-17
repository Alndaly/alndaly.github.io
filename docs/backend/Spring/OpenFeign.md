## 服务调用者

```java title=UserController.java
package com.zuowu.serviceuser.controller;

import com.zuowu.serviceuser.service.UgcService;
import com.zuowu.serviceuser.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    @RequestMapping("/one")
    public String testOne(){
        String res = userService.getUserByUgc(1);
        return res;
    }
}

```

下面这一文件便是远程服务调用的文件。

```java title=UgcService.java
package com.zuowu.serviceuser.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient("ugc-server")
public interface UgcService {
    @GetMapping("/ugc/test")
    String getUgc();
}
```

```java title=UserService.java
package com.zuowu.serviceuser.service;

import org.springframework.stereotype.Service;

public interface UserService {
    String getUserByUgc(Integer ugcId);
}
```

```java title=UserServiceImpl.java
package com.zuowu.serviceuser.service.impl;

import com.zuowu.serviceuser.service.UgcService;
import com.zuowu.serviceuser.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UgcService ugcService;
    @Override
    public String getUserByUgc(Integer ugcId) {
        return ugcService.getUgc();
    }
}
```

```yml application.yml

```yml application.yml
server:
  port: 8764
spring:
  application:
    # colony name
    name: user-server
eureka:
  instance:
    hostname: user-server
    # register with ip and port
    prefer-ip-address: true
    # the unique id of this instance
    instance-id: ${spring.cloud.client.ip-address}:${server.port}
    # the name of the instance
    app-name: user-server
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/,http://localhost:8762/eureka/ # separated by comma if there is more than two eureka server instances
```

## 服务提供者

```java title=UgcController.java
package com.zuowu.serviceugc.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("ugc")
public class UgcController {
    @RequestMapping("test")
    public String testOne(){
        return "111";
    }
}
```

```yml application.yml
server:
  port: 8763
spring:
  application:
    # colony name
    name: ugc-server
eureka:
  instance:
    hostname: ugc-server
    # register with ip and port
    prefer-ip-address: true
    # the unique id of this instance
    instance-id: ${spring.cloud.client.ip-address}:${server.port}
    # the name of the instance
    app-name: ugc-server
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/,http://localhost:8762/eureka/ # separated by comma if there is more than two eureka server instances
```