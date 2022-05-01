---
title: 父子组件交互
date: 2022-05-02 00:50:27
tags:
  - [vue]
  - [组件]
categories:
  - [技术]
description: 父子组件交互
---

# 父子组件交互

## 多数情况下应该首先使用标准的 props 和 emit 接口来实现父子组件交互

### props

```vue
<script setup>
defineProps(['title'])
</script>

<template>
  <h4>{{ title }}</h4>
</template>
```

`defineProps()`其中可以包含所有要传递给组件的参数，并且会返回一个对象，便于获取组件参数

```js
const props = defineProps(['title'])
console.log(props.title)
```

所有的 prop 都遵循着**单向绑定**原则，prop 因父组件的更新而变化，自然地将新的状态向下流往子组件，而不会逆向传递。这避免了子组件意外修改了父组件的状态，不然应用的数据流就会变得难以理解了。

另外，每次父组件更新后，所有的子组件中的 props 都会被更新到最新值，这意味着你**不应该**在子组件中去更改一个 prop。若你这么做了，Vue 会在控制台上向你抛出警告：

```js
const props = defineProps(['foo'])

// ❌ 警告！prop 是只读的！
props.foo = 'bar'
```

想要更改 prop 通常都符合以下两种场景：

1. **prop 被用于传入初始值；而子组件想在之后将其作为一个局部数据属性。** 在这种情况下，最好是新定义一个局部数据属性，从 prop 上获取初始值即可：

   ```js
   const props = defineProps(['initialCounter'])
   
   // 计数器只是将 props.initialCounter 作为初始值
   // 像下面这样做就使 prop 和后续更新无关了
   const counter = ref(props.initialCounter)
   ```

2. **prop 以原始的形式传入，但还需作转换。** 在这种情况中，最好是基于该 prop 值定义一个计算属性：

   ```js
   const props = defineProps(['size'])
   
   // 该 prop 变更时计算属性也会自动更新
   const normalizedSize = computed(() => props.size.trim().toLowerCase())
   ```

props的类型检验

```js
defineProps({
  // 基础类型检查
  // （给出 `null` 和 `undefined` 值则会跳过任何类型检查）
  propA: Number,
  // 多种可能的类型
  propB: [String, Number],
  // 必传，且为 String 类型
  propC: {
    type: String,
    required: true
  },
  // Number 类型的默认值
  propD: {
    type: Number,
    default: 100
  },
  // 对象类型的默认值
  propE: {
    type: Object,
    // 一个返回默认对象/数组值
    // 的工厂函数
    default() {
      return { message: 'hello' }
    }
  },
  // 自定义类型校验函数
  propF: {
    validator(value) {
      // The value must match one of these strings
      return ['success', 'warning', 'danger'].includes(value)
    }
  },
  // 函数类型的默认值
  propG: {
    type: Function,
    // 不像对象或数组的默认，这不是一个工厂函数。这会是一个用来作为默认值的函数
    default() {
      return 'Default function'
    }
  }
})
```

### emit

子组件事件

```vue
<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>
```

父组件`v-on`或者`@`接收事件

```vue
<BlogPost
  ...
  @enlarge-text="postFontSize += 0.1"
 />
```

我们可以通过 `defineEmits` 宏来选择性地声明需要抛出的事件：

```vue
<script setup>
  defineProps(['title'])
  defineEmits(['enlarge-text'])
</script>
```

这记录了一个组件发出的所有事件，并可选择对其进行[验证](https://staging-cn.vuejs.org/guide/components/events.html#validate-emitted-events)。这还使得 Vue 避免了将它们作为原生事件监听器隐式地应用于子组件的根元素。

和 `defineProps` 类似，`defineEmits` 仅可用于 `<script setup>` 之中，并且不需要导入，返回的 `emit` 函数可以被用于在 JavaScript 代码中抛出事件：

```js
const emit = defineEmits(['enlarge-text'])

emit('enlarge-text')
```

## 在确实需要直接操作元素实例的情况下

此时便需要`ref`

```vue
<script setup>
import { ref, onMounted } from 'vue'

// 声明一个 ref 来存放该元素的引用
// 必须和模板 ref 同名
const input = ref(null)

onMounted(() => {
  input.value.focus()
})
</script>

<template>
  <input ref="input" />
</template>
```

对应元素的`ref`值必须和`script`中声明的值完全一致

使用了 `<script setup>` 的组件是**默认私有**的：一个父组件无法访问到一个使用了 `<script setup>` 的子组件中的任何东西，除非子组件在其中通过 `defineExpose` 宏显式暴露：

```vue
<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})
</script>
```

当父组件通过模板 `ref` 获取到了该组件的实例时，得到的实例类型为 `{ a: number, b: number }` (`ref `都会自动解包，和一般的实例一样)。