"use strict";(self.webpackChunkalndaly_github_io=self.webpackChunkalndaly_github_io||[]).push([[9628],{3881:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(8101);const c={},o=s.createContext(c);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(o.Provider,{value:n},e.children)}},4629:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"frontend/React/hooks","title":"\u4e00\u4e9bhooks","description":"\u53ea\u8981\u9875\u9762state\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u90a3\u5c31\u4f1a\u89e6\u53d1\u91cd\u65b0\u6e32\u67d3\u3002","source":"@site/docs/frontend/React/hooks.md","sourceDirName":"frontend/React","slug":"/frontend/React/hooks","permalink":"/en/docs/frontend/React/hooks","draft":false,"unlisted":false,"editUrl":"https://github.com/Alndaly/alndaly.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/frontend/React/hooks.md","tags":[],"version":"current","lastUpdatedAt":1742396220000,"frontMatter":{"title":"\u4e00\u4e9bhooks"},"sidebar":"frontEndSidebar","previous":{"title":"\u4ecb\u7ecd","permalink":"/en/docs/frontend"},"next":{"title":"\u591a\u4e2aclassName\u7684\u60c5\u51b5","permalink":"/en/docs/frontend/React/multiClass"}}');var c=t(5105),o=t(3881);const i={title:"\u4e00\u4e9bhooks"},r=void 0,a={},d=[{value:"useEffect",id:"useeffect",level:2},{value:"useLayoutEffect",id:"uselayouteffect",level:2},{value:"useMemo",id:"usememo",level:2},{value:"useCallBack",id:"usecallback",level:2},{value:"useImperativeHandle",id:"useimperativehandle",level:2},{value:"useRef",id:"useref",level:2},{value:"useState",id:"usestate",level:2},{value:"useReducer",id:"usereducer",level:2}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.p,{children:["\u53ea\u8981\u9875\u9762",(0,c.jsx)(n.code,{children:"state"}),"\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u90a3\u5c31\u4f1a\u89e6\u53d1\u91cd\u65b0\u6e32\u67d3\u3002"]})}),"\n",(0,c.jsx)(n.h2,{id:"useeffect",children:"useEffect"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u9875\u9762\u91cd\u65b0\u6e32\u67d3\u4e4b\u540e\u6267\u884c\uff0c\u5f02\u6b65\u6267\u884c\uff0c\u4e0d\u4f1a\u963b\u585e\u9875\u9762\u3002"}),"\n",(0,c.jsxs)(n.admonition,{type:"note",children:[(0,c.jsxs)(n.p,{children:["\u901a\u5e38\uff0c\u7ec4\u4ef6\u5378\u8f7d\u65f6\u9700\u8981\u6e05\u9664",(0,c.jsx)(n.code,{children:"effect"}),"\u521b\u5efa\u7684\u8bf8\u5982\u8ba2\u9605\u6216\u8ba1\u65f6\u5668ID\u7b49\u8d44\u6e90\u3002\u8981\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0c",(0,c.jsx)(n.code,{children:"useEffect"}),"\u51fd\u6570\u9700\u8fd4\u56de\u4e00\u4e2a\u6e05\u9664\u51fd\u6570\u3002\u4ee5\u4e0b\u5c31\u662f\u4e00\u4e2a\u521b\u5efa\u8ba2\u9605\u7684\u4f8b\u5b50\uff1a"]}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"useEffect(() => {\n  const subscription = props.source.subscribe();\n  return () => {\n    // \u6e05\u9664\u8ba2\u9605\n    subscription.unsubscribe();\n  };\n});\n"})}),(0,c.jsxs)(n.p,{children:["\u4e3a\u9632\u6b62\u5185\u5b58\u6cc4\u6f0f\uff0c\u6e05\u9664\u51fd\u6570\u4f1a\u5728\u7ec4\u4ef6\u5378\u8f7d\u524d\u6267\u884c\u3002\u53e6\u5916\uff0c\u5982\u679c\u7ec4\u4ef6\u591a\u6b21\u6e32\u67d3\uff08\u901a\u5e38\u5982\u6b64\uff09\uff0c\u5219\u5728\u6267\u884c\u4e0b\u4e00\u4e2a",(0,c.jsx)(n.code,{children:"effect"}),"\u4e4b\u524d\uff0c\u4e0a\u4e00\u4e2a",(0,c.jsx)(n.code,{children:"effect"}),"\u5c31\u5df2\u88ab\u6e05\u9664\u3002"]})]}),"\n",(0,c.jsx)(n.h2,{id:"uselayouteffect",children:"useLayoutEffect"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u9875\u9762\u91cd\u65b0\u6e32\u67d3\u671f\u95f4\u6267\u884c\u3002\u6ce8\u610f\u8fd9\u662f\u540c\u6b65\u7684\uff0c\u6240\u4ee5\u4f1a\u963b\u585e\u9875\u9762\u52a0\u8f7d\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"usememo",children:"useMemo"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd4\u56de\u4e00\u4e2a",(0,c.jsx)(n.code,{children:"memoized"}),"\u503c\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u9875\u9762\u91cd\u65b0\u6e32\u67d3\u671f\u95f4\u6267\u884c\uff0c\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u5982\u679c\u5728",(0,c.jsx)(n.code,{children:"dom"}),"\u4e2d\u8981\u589e\u52a0\u8fd9\u4e2a\u51fd\u6570\uff0c\u90a3\u4e48\u76f4\u63a5\u5199\u660e\u5bf9\u8c61\u672c\u8eab\u5373\u53ef\uff0c\u4e0d\u9700\u8981\u5199\u6210",(0,c.jsx)(n.code,{children:"memoizedValue()"}),"\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"usecallback",children:"useCallBack"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const memoizedCallback = useCallback(\n  () => {\n    doSomething(a, b);\n  },\n  [a, b],\n);\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u628a\u5185\u8054\u56de\u8c03\u51fd\u6570\u53ca\u4f9d\u8d56\u9879\u6570\u7ec4\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165",(0,c.jsx)(n.code,{children:"useCallback"}),"\uff0c\u5b83\u5c06\u8fd4\u56de\u8be5\u56de\u8c03\u51fd\u6570\u7684",(0,c.jsx)(n.code,{children:"memoized"}),"\u7248\u672c\uff0c\u8be5\u56de\u8c03\u51fd\u6570\u4ec5\u5728\u67d0\u4e2a\u4f9d\u8d56\u9879\u6539\u53d8\u65f6\u624d\u4f1a\u66f4\u65b0\u3002"]}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"useCallback(fn, deps) \u76f8\u5f53\u4e8e useMemo(() => fn, deps)\u3002\n"})})}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u9875\u9762\u91cd\u65b0\u6e32\u67d3\u671f\u95f4\u6267\u884c\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"useimperativehandle",children:"useImperativeHandle"}),"\n",(0,c.jsx)(n.p,{children:"\u611f\u89c9\u66f4\u591a\u662f\u7528\u6765\u5f39\u51fa\u5b50\u7ec4\u4ef6\u65b9\u6cd5\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"useImperativeHandle(ref, createHandle, [deps])\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"function FancyInput(props, ref) {\n  const inputRef = useRef();\n  useImperativeHandle(ref, () => ({\n    focus: () => {\n      inputRef.current.focus();\n    }\n  }));\n  return <input ref={inputRef} ... />;\n}\nFancyInput = forwardRef(FancyInput);\n"})}),"\n",(0,c.jsx)(n.h2,{id:"useref",children:"useRef"}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsx)(n.p,{children:"\u66f4\u591a\u7684\u662f\u7528\u6765\u83b7\u53d6DOM\u5b9e\u4f8b\u3002"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const refContainer = useRef(initialValue);\n"})}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:'function TextInputWithFocusButton() {\n  const inputEl = useRef(null);\n  const onButtonClick = () => {\n    // `current` \u6307\u5411\u5df2\u6302\u8f7d\u5230 DOM \u4e0a\u7684\u6587\u672c\u8f93\u5165\u5143\u7d20\n    inputEl.current.focus();\n  };\n  return (\n    <>\n      <input ref={inputEl} type="text" />\n      <button onClick={onButtonClick}>Focus the input</button>\n    </>\n  );\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"usestate",children:"useState"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const [state, setState] = useState(initialState);\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd4\u56de\u4e00\u4e2a",(0,c.jsx)(n.code,{children:"state"}),"\uff0c\u4ee5\u53ca\u66f4\u65b0",(0,c.jsx)(n.code,{children:"state"}),"\u7684\u51fd\u6570\uff0c\u7528\u6765\u53cc\u5411\u7ed1\u5b9a\u6570\u636e\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u4e2aset\u51fd\u6570\u662f\u5f02\u6b65\u7684\uff0c\u6240\u4ee5\u8c03\u7528\u4e4b\u540e\u7acb\u9a6c\u53bb\u83b7\u53d6state\u4e0d\u4e00\u5b9a\u662f\u65b0\u7684\uff0c\u5982\u679c\u65b0\u7684",(0,c.jsx)(n.code,{children:"state"}),"\u9700\u8981\u901a\u8fc7\u4f7f\u7528\u5148\u524d\u7684",(0,c.jsx)(n.code,{children:"state"}),"\u8ba1\u7b97\u5f97\u51fa\uff0c\u90a3\u4e48\u53ef\u4ee5\u5c06\u51fd\u6570\u4f20\u9012\u7ed9",(0,c.jsx)(n.code,{children:"setState"}),"\u3002\u8be5\u51fd\u6570\u5c06\u63a5\u6536\u5148\u524d\u7684",(0,c.jsx)(n.code,{children:"state"}),"\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u66f4\u65b0\u540e\u7684\u503c\u3002\u4e0b\u9762\u7684\u8ba1\u6570\u5668\u7ec4\u4ef6\u793a\u4f8b\u5c55\u793a\u4e86",(0,c.jsx)(n.code,{children:"setState"}),"\u7684\u4e24\u79cd\u7528\u6cd5\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"function Counter({initialCount}) {\n  const [count, setCount] = useState(initialCount);\n  return (\n    <>\n      Count: {count}\n      <button onClick={() => setCount(initialCount)}>Reset</button>\n      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>\n      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>\n    </>\n  );\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"usereducer",children:"useReducer"}),"\n",(0,c.jsxs)(n.p,{children:["\u7528\u5904\u548c",(0,c.jsx)(n.code,{children:"useState"}),"\u63a5\u8fd1\uff0c\u4f46\u662f\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c",(0,c.jsx)(n.code,{children:"useReducer"}),"\u4f1a\u6bd4",(0,c.jsx)(n.code,{children:"useState"}),"\u66f4\u9002\u7528\uff0c\u4f8b\u5982",(0,c.jsx)(n.code,{children:"state"}),"\u903b\u8f91\u8f83\u590d\u6742\u4e14\u5305\u542b\u591a\u4e2a\u5b50\u503c\uff0c\u6216\u8005\u4e0b\u4e00\u4e2a",(0,c.jsx)(n.code,{children:"state"}),"\u4f9d\u8d56\u4e8e\u4e4b\u524d\u7684",(0,c.jsx)(n.code,{children:"state"}),"\u7b49\u3002\u5e76\u4e14\uff0c\u4f7f\u7528",(0,c.jsx)(n.code,{children:"useReducer"}),"\u8fd8\u80fd\u7ed9\u90a3\u4e9b\u4f1a\u89e6\u53d1\u6df1\u66f4\u65b0\u7684\u7ec4\u4ef6\u505a\u6027\u80fd\u4f18\u5316"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"const initialState = {count: 0};\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return {count: state.count + 1};\n    case 'decrement':\n      return {count: state.count - 1};\n    default:\n      throw new Error();\n  }\n}\n\nfunction Counter() {\n  const [state, dispatch] = useReducer(reducer, initialState);\n  return (\n    <>\n      Count: {state.count}\n      <button onClick={() => dispatch({type: 'decrement'})}>-</button>\n      <button onClick={() => dispatch({type: 'increment'})}>+</button>\n    </>\n  );\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}}}]);