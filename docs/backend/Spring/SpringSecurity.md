---
sidebar_position: 7
---

:::caution
像下述这样继承`WebSecurityConfigurerAdapter`的方法如今已经不被Spring Security官方建议（5.7版本之后）。
```java
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    ...
}
```
:::

## 配置 HttpSecurity

注册一个`SecurityFilterChain`类型的`bean`。

```java
@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests((authz) -> authz
                .anyRequest().authenticated()
            )
            .httpBasic(withDefaults());
        return http.build();
    }

}
```

## 配置 WebSecurity

忽视指定路由的权限认证。

```java
@Configuration
public class SecurityConfiguration {

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().antMatchers("/ignore1", "/ignore2");
    }

}
```

## LDAP 授权

使用LDAP的类。

```java
@Configuration
public class SecurityConfiguration {
    @Bean
    public EmbeddedLdapServerContextSourceFactoryBean contextSourceFactoryBean() {
        EmbeddedLdapServerContextSourceFactoryBean contextSourceFactoryBean = EmbeddedLdapServerContextSourceFactoryBean.fromEmbeddedLdapServer();
        contextSourceFactoryBean.setPort(0);
        return contextSourceFactoryBean;
    }

    @Bean
    AuthenticationManager ldapAuthenticationManager(BaseLdapPathContextSource contextSource) {
        LdapBindAuthenticationManagerFactory factory = new LdapBindAuthenticationManagerFactory(contextSource);
        factory.setUserDnPatterns("uid={0},ou=people");
        factory.setUserDetailsContextMapper(new PersonContextMapper());
        return factory.createAuthenticationManager();
    }
}
```

## JDBC 授权

```java
@Configuration
public class SecurityConfiguration {
    @Bean
    public DataSource dataSource() {
        return new EmbeddedDatabaseBuilder()
            .setType(EmbeddedDatabaseType.H2)
            .addScript(JdbcDaoImpl.DEFAULT_USER_SCHEMA_DDL_LOCATION)
            .build();
    }

    @Bean
    public UserDetailsManager users(DataSource dataSource) {
        UserDetails user = User.withDefaultPasswordEncoder()
            .username("user")
            .password("password")
            .roles("USER")
            .build();
        JdbcUserDetailsManager users = new JdbcUserDetailsManager(dataSource);
        users.createUser(user);
        return users;
    }
}
```

:::note
注意，这里只是为了简单而写了`withDefaultPasswordEncoder`，而在生产环境中最好不要这样，应该给密码额外进行hash加密。
:::

## 内存授权

```java
@Configuration
public class SecurityConfiguration {
    @Bean
    public InMemoryUserDetailsManager userDetailsService() {
        UserDetails user = User.withDefaultPasswordEncoder()
            .username("user")
            .password("password")
            .roles("USER")
            .build();
        return new InMemoryUserDetailsManager(user);
    }
}
```

## 全局授权管理器

你可以简单的创建一个`AuthenticationManager`Bean来管理整个服务。

## 本地授权管理器

针对特殊的安全过滤链，在Spring Security5.6中存在了一种`authenticationManager`方法来重写默认的`AuthenticationManager`。

```java
@Configuration
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests((authz) -> authz
                .anyRequest().authenticated()
            )
            .httpBasic(withDefaults())
            .authenticationManager(new CustomAuthenticationManager());
        return http.build();
    }

}
```

## 访问本地的授权管理器

本地的授权管理器能够通过自定义的DSL被访问，实际上，Spring Security内部也是通过这个方法来实现像`HttpSecurity.authorizeRequests()`等的方法的。

```java
public class MyCustomDsl extends AbstractHttpConfigurer<MyCustomDsl, HttpSecurity> {
    @Override
    public void configure(HttpSecurity http) throws Exception {
        AuthenticationManager authenticationManager = http.getSharedObject(AuthenticationManager.class);
        http.addFilter(new CustomFilter(authenticationManager));
    }

    public static MyCustomDsl customDsl() {
        return new MyCustomDsl();
    }
}
```

然后自定义的DSL就能被应用在`SecurityFilterChain`中了。

```java
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    // ...
    http.apply(customDsl());
    return http.build();
}
```