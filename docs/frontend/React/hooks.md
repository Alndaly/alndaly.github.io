---
title: 一些hooks
---

:::note
只要页面`state`发生了变化，那就会触发重新渲染。
:::

## useEffect

在页面重新渲染之后执行，异步执行，不会阻塞页面。

:::note
通常，组件卸载时需要清除`effect`创建的诸如订阅或计时器ID等资源。要实现这一点，`useEffect`函数需返回一个清除函数。以下就是一个创建订阅的例子：
```js
useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    // 清除订阅
    subscription.unsubscribe();
  };
});
```
为防止内存泄漏，清除函数会在组件卸载前执行。另外，如果组件多次渲染（通常如此），则在执行下一个`effect`之前，上一个`effect`就已被清除。
:::

## useLayoutEffect

在页面重新渲染期间执行。注意这是同步的，所以会阻塞页面加载。

## useMemo

```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

返回一个`memoized`值。

在页面重新渲染期间执行，返回一个对象。

如果在`dom`中要增加这个函数，那么直接写明对象本身即可，不需要写成`memoizedValue()`。

## useCallBack

```js
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

把内联回调函数及依赖项数组作为参数传入`useCallback`，它将返回该回调函数的`memoized`版本，该回调函数仅在某个依赖项改变时才会更新。

:::note
```js
useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
```
:::

在页面重新渲染期间执行。

## useImperativeHandle

感觉更多是用来弹出子组件方法。

```js
useImperativeHandle(ref, createHandle, [deps])
```

```js
function FancyInput(props, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);
```

## useRef

:::note
更多的是用来获取DOM实例。
:::

```js
const refContainer = useRef(initialValue);
```

```js
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

## useState

```js
const [state, setState] = useState(initialState);
```

返回一个`state`，以及更新`state`的函数，用来双向绑定数据。

这个set函数是异步的，所以调用之后立马去获取state不一定是新的，如果新的`state`需要通过使用先前的`state`计算得出，那么可以将函数传递给`setState`。该函数将接收先前的`state`，并返回一个更新后的值。下面的计数器组件示例展示了`setState`的两种用法。

```js
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
```

## useReducer

用处和`useState`接近，但是在某些场景下，`useReducer`会比`useState`更适用，例如`state`逻辑较复杂且包含多个子值，或者下一个`state`依赖于之前的`state`等。并且，使用`useReducer`还能给那些会触发深更新的组件做性能优化

```js
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```