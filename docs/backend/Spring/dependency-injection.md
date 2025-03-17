---
title: 依赖注入
---

## `@Authwired`注解

```java
@Autowired
UserDetailsServiceImpl userDetailsServiceImpl;
```

## setter

```java
private InventoryMapper inventoryMapper;

public void setInventoryMapper(InventoryMapper inventoryMapper) {
    this.inventoryMapper = inventoryMapper;
}
```

## 构造器

```java
private final InventoryMapper inventoryMapper;

public InventoryController(InventoryMapper inventoryMapper) {
    this.inventoryMapper = inventoryMapper;
}
```