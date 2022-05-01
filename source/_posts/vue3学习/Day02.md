---
title: 自定义组件双向绑定
date: 2022-05-02 00:50:27
tags:
  - [vue]
  - [组件]
  - [双向绑定]
categories:
  - [技术]
description: 自定义组件双向绑定
---

# 自定义组件双向绑定

## 原生`input`组件

>  自带双向绑定

```vue
<input v-model="searchText" />
```

## 自定义组件

>  需要作如下处理

### 子组件

```vue
<!-- CustomInput.vue -->
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
```

### 父组件

```vue
<CustomInput v-model="searchText" />
```

> 默认的传参方式需要有一个`modelValue`的`props`，以及一个`update:modelValue`的事件传参

**当然也可以自定义传参，方式如下，多个数据双向绑定便可利用这种方式**

### 子组件

```vue
<!-- MyComponent.vue -->
<script setup>
defineProps(['title'])
defineEmits(['update:title'])
</script>

<template>
  <input
    type="text"
    :value="title"
    @input="$emit('update:title', $event.target.value)"
  />
</template>
```

### 父组件

```vue
<MyComponent v-model:title="bookTitle" />
```

## `v-model`修饰符

### 处理 `v-model` 修饰符

当我们在学习输入绑定时，我们知道了 `v-model` 有一些内置的修饰符，例如 `.trim`，`.number` 和 `.lazy`。然而在某些场景下，你可能想要添加自定义的修饰符。

我们一起来创建一个自定义的修饰符 `capitalize`，它会自动将 `v-model` 绑定输入的字符串值第一个字母转为大写：

```vue
<MyComponent v-model.capitalize="myText" />
```

要给组件的 `v-model` 添加修饰符，都可以通过 `modelModifiers` prop 在组件内访问到。在下面的例子中，我们会创建一个包含 `modelModifiers` prop 的组件，它的默认值是一个空对象：

```vue
<script setup>
const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) }
})

defineEmits(['update:modelValue'])

console.log(props.modelModifiers) // { capitalize: true }
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
```

注意这里组件的 `modelModifiers` prop 包含了 `capitalize` 且其值为 `true`，因为它在模板中的 `v-model` 绑定上被使用了。

此时和 prop 相关的已经准备完毕，我们可以开始检索 `modelModifiers` 对象的 key 并写一个处理函数来改变抛出事件附带的值。在下面的代码里我们就是在每次 `<input/>` 元素抛出 `input` 事件时执行大写首字母：

```vue
<script setup>
const props = defineProps({
  modelValue: String,
  modelModifiers: { default: () => ({}) }
})

const emit = defineEmits(['update:modelValue'])

function emitValue(e) {
  let value = e.target.value
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
}
</script>

<template>
  <input type="text" :value="modelValue" @input="emitValue" />
</template>
```

对于又有参数又有修饰符的 `v-model` 绑定，生成的 prop 名将是 `arg + "Modifiers"`。举个例子：

```vue
<MyComponent v-model:title.capitalize="myText">
```

则相应的声明应该是：

```vue
const props = defineProps(['title', 'titleModifiers'])
defineEmits(['update:title'])

console.log(props.titleModifiers) // { capitalize: true }
```