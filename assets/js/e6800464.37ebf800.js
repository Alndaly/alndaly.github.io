"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4106],{64505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));n(16758);const i={sidebar_position:7},u=void 0,o={unversionedId:"backend/Spring/SpringBoot/SpringSecurity",id:"backend/Spring/SpringBoot/SpringSecurity",title:"SpringSecurity",description:"\u50cf\u4e0b\u8ff0\u8fd9\u6837\u7ee7\u627fWebSecurityConfigurerAdapter\u7684\u65b9\u6cd5\u5982\u4eca\u5df2\u7ecf\u4e0d\u88abSpring Security\u5b98\u65b9\u5efa\u8bae\uff085.7\u7248\u672c\u4e4b\u540e\uff09\u3002",source:"@site/docs/backend/Spring/SpringBoot/SpringSecurity.md",sourceDirName:"backend/Spring/SpringBoot",slug:"/backend/Spring/SpringBoot/SpringSecurity",permalink:"/docs/backend/Spring/SpringBoot/SpringSecurity",draft:!1,editUrl:"https://github.com/alndaly/alndaly.github.io/edit/docusaurus/docs/backend/Spring/SpringBoot/SpringSecurity.md",tags:[],version:"current",lastUpdatedAt:1671095402,formattedLastUpdatedAt:"2022\u5e7412\u670815\u65e5",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"backEndSidebar",previous:{title:"\u8fc7\u6ee4\u5668\u548c\u62e6\u622a\u5668",permalink:"/docs/backend/Spring/SpringBoot/\u8fc7\u6ee4\u5668\u548c\u62e6\u622a\u5668"},next:{title:"\u7b80\u5355\u4f7f\u7528",permalink:"/docs/backend/Spring/SpringBoot/JPA/\u7b80\u5355\u4f7f\u7528"}},c={},p=[{value:"\u914d\u7f6e HttpSecurity",id:"\u914d\u7f6e-httpsecurity",level:2},{value:"\u914d\u7f6e WebSecurity",id:"\u914d\u7f6e-websecurity",level:2},{value:"LDAP \u6388\u6743",id:"ldap-\u6388\u6743",level:2},{value:"JDBC \u6388\u6743",id:"jdbc-\u6388\u6743",level:2},{value:"\u5185\u5b58\u6388\u6743",id:"\u5185\u5b58\u6388\u6743",level:2},{value:"\u5168\u5c40\u6388\u6743\u7ba1\u7406\u5668",id:"\u5168\u5c40\u6388\u6743\u7ba1\u7406\u5668",level:2},{value:"\u672c\u5730\u6388\u6743\u7ba1\u7406\u5668",id:"\u672c\u5730\u6388\u6743\u7ba1\u7406\u5668",level:2},{value:"\u8bbf\u95ee\u672c\u5730\u7684\u6388\u6743\u7ba1\u7406\u5668",id:"\u8bbf\u95ee\u672c\u5730\u7684\u6388\u6743\u7ba1\u7406\u5668",level:2}],s={toc:p};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u50cf\u4e0b\u8ff0\u8fd9\u6837\u7ee7\u627f",(0,r.kt)("inlineCode",{parentName:"p"},"WebSecurityConfigurerAdapter"),"\u7684\u65b9\u6cd5\u5982\u4eca\u5df2\u7ecf\u4e0d\u88abSpring Security\u5b98\u65b9\u5efa\u8bae\uff085.7\u7248\u672c\u4e4b\u540e\uff09\u3002"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\npublic class SecurityConfiguration extends WebSecurityConfigurerAdapter {\n    ...\n}\n"))),(0,r.kt)("h2",{id:"\u914d\u7f6e-httpsecurity"},"\u914d\u7f6e HttpSecurity"),(0,r.kt)("p",null,"\u6ce8\u518c\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"SecurityFilterChain"),"\u7c7b\u578b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"bean"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\npublic class SecurityConfiguration {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests((authz) -> authz\n                .anyRequest().authenticated()\n            )\n            .httpBasic(withDefaults());\n        return http.build();\n    }\n\n}\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e-websecurity"},"\u914d\u7f6e WebSecurity"),(0,r.kt)("p",null,"\u5ffd\u89c6\u6307\u5b9a\u8def\u7531\u7684\u6743\u9650\u8ba4\u8bc1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class SecurityConfiguration {\n\n    @Bean\n    public WebSecurityCustomizer webSecurityCustomizer() {\n        return (web) -> web.ignoring().antMatchers("/ignore1", "/ignore2");\n    }\n\n}\n')),(0,r.kt)("h2",{id:"ldap-\u6388\u6743"},"LDAP \u6388\u6743"),(0,r.kt)("p",null,"\u4f7f\u7528LDAP\u7684\u7c7b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class SecurityConfiguration {\n    @Bean\n    public EmbeddedLdapServerContextSourceFactoryBean contextSourceFactoryBean() {\n        EmbeddedLdapServerContextSourceFactoryBean contextSourceFactoryBean = EmbeddedLdapServerContextSourceFactoryBean.fromEmbeddedLdapServer();\n        contextSourceFactoryBean.setPort(0);\n        return contextSourceFactoryBean;\n    }\n\n    @Bean\n    AuthenticationManager ldapAuthenticationManager(BaseLdapPathContextSource contextSource) {\n        LdapBindAuthenticationManagerFactory factory = new LdapBindAuthenticationManagerFactory(contextSource);\n        factory.setUserDnPatterns("uid={0},ou=people");\n        factory.setUserDetailsContextMapper(new PersonContextMapper());\n        return factory.createAuthenticationManager();\n    }\n}\n')),(0,r.kt)("h2",{id:"jdbc-\u6388\u6743"},"JDBC \u6388\u6743"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class SecurityConfiguration {\n    @Bean\n    public DataSource dataSource() {\n        return new EmbeddedDatabaseBuilder()\n            .setType(EmbeddedDatabaseType.H2)\n            .addScript(JdbcDaoImpl.DEFAULT_USER_SCHEMA_DDL_LOCATION)\n            .build();\n    }\n\n    @Bean\n    public UserDetailsManager users(DataSource dataSource) {\n        UserDetails user = User.withDefaultPasswordEncoder()\n            .username("user")\n            .password("password")\n            .roles("USER")\n            .build();\n        JdbcUserDetailsManager users = new JdbcUserDetailsManager(dataSource);\n        users.createUser(user);\n        return users;\n    }\n}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0c\u8fd9\u91cc\u53ea\u662f\u4e3a\u4e86\u7b80\u5355\u800c\u5199\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"withDefaultPasswordEncoder"),"\uff0c\u800c\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6700\u597d\u4e0d\u8981\u8fd9\u6837\uff0c\u5e94\u8be5\u7ed9\u5bc6\u7801\u989d\u5916\u8fdb\u884chash\u52a0\u5bc6\u3002")),(0,r.kt)("h2",{id:"\u5185\u5b58\u6388\u6743"},"\u5185\u5b58\u6388\u6743"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\npublic class SecurityConfiguration {\n    @Bean\n    public InMemoryUserDetailsManager userDetailsService() {\n        UserDetails user = User.withDefaultPasswordEncoder()\n            .username("user")\n            .password("password")\n            .roles("USER")\n            .build();\n        return new InMemoryUserDetailsManager(user);\n    }\n}\n')),(0,r.kt)("h2",{id:"\u5168\u5c40\u6388\u6743\u7ba1\u7406\u5668"},"\u5168\u5c40\u6388\u6743\u7ba1\u7406\u5668"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u7b80\u5355\u7684\u521b\u5efa\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"AuthenticationManager"),"Bean\u6765\u7ba1\u7406\u6574\u4e2a\u670d\u52a1\u3002"),(0,r.kt)("h2",{id:"\u672c\u5730\u6388\u6743\u7ba1\u7406\u5668"},"\u672c\u5730\u6388\u6743\u7ba1\u7406\u5668"),(0,r.kt)("p",null,"\u9488\u5bf9\u7279\u6b8a\u7684\u5b89\u5168\u8fc7\u6ee4\u94fe\uff0c\u5728Spring Security5.6\u4e2d\u5b58\u5728\u4e86\u4e00\u79cd",(0,r.kt)("inlineCode",{parentName:"p"},"authenticationManager"),"\u65b9\u6cd5\u6765\u91cd\u5199\u9ed8\u8ba4\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"AuthenticationManager"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\npublic class SecurityConfiguration {\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests((authz) -> authz\n                .anyRequest().authenticated()\n            )\n            .httpBasic(withDefaults())\n            .authenticationManager(new CustomAuthenticationManager());\n        return http.build();\n    }\n\n}\n")),(0,r.kt)("h2",{id:"\u8bbf\u95ee\u672c\u5730\u7684\u6388\u6743\u7ba1\u7406\u5668"},"\u8bbf\u95ee\u672c\u5730\u7684\u6388\u6743\u7ba1\u7406\u5668"),(0,r.kt)("p",null,"\u672c\u5730\u7684\u6388\u6743\u7ba1\u7406\u5668\u80fd\u591f\u901a\u8fc7\u81ea\u5b9a\u4e49\u7684DSL\u88ab\u8bbf\u95ee\uff0c\u5b9e\u9645\u4e0a\uff0cSpring Security\u5185\u90e8\u4e5f\u662f\u901a\u8fc7\u8fd9\u4e2a\u65b9\u6cd5\u6765\u5b9e\u73b0\u50cf",(0,r.kt)("inlineCode",{parentName:"p"},"HttpSecurity.authorizeRequests()"),"\u7b49\u7684\u65b9\u6cd5\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class MyCustomDsl extends AbstractHttpConfigurer<MyCustomDsl, HttpSecurity> {\n    @Override\n    public void configure(HttpSecurity http) throws Exception {\n        AuthenticationManager authenticationManager = http.getSharedObject(AuthenticationManager.class);\n        http.addFilter(new CustomFilter(authenticationManager));\n    }\n\n    public static MyCustomDsl customDsl() {\n        return new MyCustomDsl();\n    }\n}\n")),(0,r.kt)("p",null,"\u7136\u540e\u81ea\u5b9a\u4e49\u7684DSL\u5c31\u80fd\u88ab\u5e94\u7528\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"SecurityFilterChain"),"\u4e2d\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n    // ...\n    http.apply(customDsl());\n    return http.build();\n}\n")))}l.isMDXComponent=!0}}]);