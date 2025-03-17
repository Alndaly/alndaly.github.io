# async和await:让异步编程更简单

## [async/await 基础](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#asyncawait_%E5%9F%BA%E7%A1%80 "Permalink to async/await 基础")

在代码中使用 async / await 有两个部分。

### [async 关键字](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#async_%E5%85%B3%E9%94%AE%E5%AD%97 "Permalink to async 关键字")

首先，我们使用 `async` 关键字，把它放在函数声明之前，使其成为 [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)。异步函数是一个知道怎样使用 `await` 关键字调用异步代码的函数。

尝试在浏览器的JS控制台中键入以下行：

```js
function hello() { return "Hello" };
hello();
```

该函数返回“Hello” —— 没什么特别的，对吧？

如果我们将其变成异步函数呢？请尝试以下方法：

```js
async function hello() { return "Hello" };
hello();
```

哈。现在调用该函数会返回一个 promise。这是异步函数的特征之一 —— 它保证函数的返回值为 promise。

你也可以创建一个异步函数表达式（参见 [async function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function) ），如下所示:

```js
let hello = async function() { return "Hello" };
hello();
```

你可以使用箭头函数：

```js
let hello = async () => { return "Hello" };
```

这些都基本上是一样的。

要实际使用promise完成时返回的值，我们可以使用`.then()`块，因为它返回的是 promise：

```js
hello().then((value) => console.log(value))
```

甚至只是简写如

```js
hello().then(console.log)
```

这就像我们在上一篇文章中看到的那样。

将 `async` 关键字加到函数申明中，可以告诉它们返回的是 promise，而不是直接返回值。此外，它避免了同步函数为支持使用 await 带来的任何潜在开销。在函数声明为 `async` 时，JavaScript引擎会添加必要的处理，以优化你的程序。爽！

### [await关键字](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#await%E5%85%B3%E9%94%AE%E5%AD%97 "Permalink to await关键字")

当 [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) 关键字与异步函数一起使用时，它的真正优势就变得明显了 —— 事实上， **await 只在异步函数里面才起作用**。它可以放在任何异步的，基于 promise 的函数之前。它会暂停代码在该行上，直到 promise 完成，然后返回结果值。在暂停的同时，其他正在等待执行的代码就有机会执行了。

您可以在调用任何返回Promise的函数时使用 **await**，包括Web API函数。

这是一个简单的示例：

```js
async function hello() {
  return greeting = await Promise.resolve("Hello");
};

hello().then(alert);
```

当然，上面的示例不是很有用，但它确实展示了语法。让我们继续，看一个真实示例。

##  [使用 async/await 重写 promise 代码](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#%E4%BD%BF%E7%94%A8_asyncawait_%E9%87%8D%E5%86%99_promise_%E4%BB%A3%E7%A0%81 "Permalink to  使用 async/await 重写 promise 代码")

让我们回顾一下我们在上一篇文章中简单的 fetch 示例：

```js
fetch('coffee.jpg')
.then(response => response.blob())
.then(myBlob => {
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});
```

到现在为止，你应该对 promises 及其工作方式有一个较好的理解。让我们将其转换为使用async / await看看它使事情变得简单了多少：

```js
async function myFetch() {
  let response = await fetch('coffee.jpg');
  let myBlob = await response.blob();

  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}

myFetch()
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});
```

它使代码简单多了，更容易理解 —— 去除了到处都是 `.then()` 代码块！

由于 `async` 关键字将函数转换为 promise，您可以重构以上代码 —— 使用 promise 和 await 的混合方式，将函数的后半部分抽取到新代码块中。这样做可以更灵活：

```js
async function myFetch() {
  let response = await fetch('coffee.jpg');
  return await response.blob();
}

myFetch().then((blob) => {
  let objectURL = URL.createObjectURL(blob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
});
```

您可以尝试自己输入示例，或运行我们的 [live example](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/simple-fetch-async-await.html) （另请参阅[source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/simple-fetch-async-await.html)）。

### [它到底是如何工作的？](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#%E5%AE%83%E5%88%B0%E5%BA%95%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84%EF%BC%9F "Permalink to 它到底是如何工作的？")

您会注意到我们已经将代码封装在函数中，并且我们在 `function` 关键字之前包含了 `async` 关键字。这是必要的 –– 您必须创建一个异步函数来定义一个代码块，在其中运行异步代码; await 只能在异步函数内部工作。

在`myFetch()`函数定义中，您可以看到代码与先前的 promise 版本非常相似，但存在一些差异。不需要附加 `.then()` 代码块到每个promise-based方法的结尾，你只需要在方法调用前添加 await 关键字，然后把结果赋给变量。await 关键字使JavaScript运行时暂停于此行，允许其他代码在此期间执行，直到异步函数调用返回其结果。一旦完成，您的代码将继续从下一行开始执行。例如：

```js
let response = await fetch('coffee.jpg');
```

解析器会在此行上暂停，直到当服务器返回的响应变得可用时。此时 `fetch()` 返回的 promise 将会完成（fullfilled），返回的 response 会被赋值给 `response` 变量。一旦服务器返回的响应可用，解析器就会移动到下一行，从而创建一个`[Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)`。Blob这行也调用基于异步promise的方法，因此我们也在此处使用`await`。当操作结果返回时，我们将它从`myFetch()`函数中返回。

这意味着当我们调用`myFetch()`函数时，它会返回一个promise，因此我们可以将`.then()`链接到它的末尾，在其中我们处理显示在屏幕上的`blob`。

你可能已经觉得“这真的很酷！”，你是对的 —— 用更少的.`then()`块来封装代码，同时它看起来很像同步代码，所以它非常直观。

### [添加错误处理](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#%E6%B7%BB%E5%8A%A0%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86 "Permalink to 添加错误处理")

如果你想添加错误处理，你有几个选择。

您可以将同步的 `[try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)` 结构和 `async/await` 一起使用 。此示例扩展了我们上面展示的第一个版本代码：

```js
async function myFetch() {
  try {
    let response = await fetch('coffee.jpg');
    let myBlob = await response.blob();

    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  } catch(e) {
    console.log(e);
  }
}

myFetch();
```

`catch() {}` 代码块会接收一个错误对象 `e` ; 我们现在可以将其记录到控制台，它将向我们提供详细的错误消息，显示错误被抛出的代码中的位置。

如果你想使用我们上面展示的第二个（重构）代码版本，你最好继续混合方式并将 `.catch()` 块链接到 `.then()` 调用的末尾，就像这样：

```js
async function myFetch() {
  let response = await fetch('coffee.jpg');
  return await response.blob();
}

myFetch().then((blob) => {
  let objectURL = URL.createObjectURL(blob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch((e) =>
  console.log(e)
);
```

这是因为 `.catch()` 块将捕获来自异步函数调用和promise链中的错误。如果您在此处使用了`try/catch` 代码块，则在调用 `myFetch()` 函数时，您仍可能会收到未处理的错误。

您可以在GitHub上找到这两个示例：

-   [simple-fetch-async-await-try-catch.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/simple-fetch-async-await-try-catch.html) (参见 [源码](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/simple-fetch-async-await-try-catch.html))
-   [simple-fetch-async-await-promise-catch.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/simple-fetch-async-await-promise-catch.html) (参见 [源码](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/simple-fetch-async-await-promise-catch.html))

## [等待Promise.all()](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#%E7%AD%89%E5%BE%85promise.all "Permalink to 等待Promise.all()")

`async / await` 建立在 [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 之上，因此它与promises提供的所有功能兼容。这包括`[Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)` –– 你完全可以通过调用 `await` `Promise.all()` 将所有结果返回到变量中，就像同步代码一样。让我们再次回到[上一篇中看到的例子](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/promise-all.html)。在单独的选项卡中打开它，以便您可以与下面显示的新版本进行比较和对比。

将其转换为 async / await（请参阅 [样例](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/promise-all-async-await.html) 和 [源码](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/promise-all-async-await.html)），现在看起来像这样：

```js
async function fetchAndDecode(url, type) {
  let response = await fetch(url);

  let content;

  if(type === 'blob') {
    content = await response.blob();
  } else if(type === 'text') {
    content = await response.text();
  }

  return content;
}

async function displayContent() {
  let coffee = fetchAndDecode('coffee.jpg', 'blob');
  let tea = fetchAndDecode('tea.jpg', 'blob');
  let description = fetchAndDecode('description.txt', 'text');

  let values = await Promise.all([coffee, tea, description]);

  let objectURL1 = URL.createObjectURL(values[0]);
  let objectURL2 = URL.createObjectURL(values[1]);
  let descText = values[2];

  let image1 = document.createElement('img');
  let image2 = document.createElement('img');
  image1.src = objectURL1;
  image2.src = objectURL2;
  document.body.appendChild(image1);
  document.body.appendChild(image2);

  let para = document.createElement('p');
  para.textContent = descText;
  document.body.appendChild(para);
}

displayContent()
.catch((e) =>
  console.log(e)
);
```

可以看到 `fetchAndDecode()` 函数只进行了一丁点的修改就转换成了异步函数。请看`Promise.all()` 行：

```js
let values = await Promise.all([coffee, tea, description]);
```

在这里，通过使用`await`，我们能够在三个promise的结果都可用的时候，放入`values`数组中。这看起来非常像同步代码。我们需要将所有代码封装在一个新的异步函数`displayContent()` 中，尽管没有减少很多代码，但能够将大部分代码从 `.then()` 代码块移出，使代码得到了简化，更易读。

为了错误处理，我们在 `displayContent()` 调用中包含了一个 `.catch()` 代码块;这将处理两个函数中出现的错误。

**注意**: 也可以在异步函数中使用同步 `[finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_clause)` 代码块代替 `[.finally()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)` 异步代码块，以显示操作如何进行的最终报告——您可以在我们的 [live example](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/promise-finally-async-await.html) （查看[源代码](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/promise-finally-async-await.html)）中看到这一点。

## [async/await的缺陷](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#asyncawait%E7%9A%84%E7%BC%BA%E9%99%B7 "Permalink to async/await的缺陷")

了解`Async/await`是非常有用的，但还有一些缺点需要考虑。

`Async/await` 让你的代码看起来是同步的，在某种程度上，也使得它的行为更加地同步。 `await` 关键字会阻塞其后的代码，直到promise完成，就像执行同步操作一样。它确实可以允许其他任务在此期间继续运行，但您自己的代码被阻塞。

这意味着您的代码可能会因为大量`await`的promises相继发生而变慢。每个`await`都会等待前一个完成，而你实际想要的是所有的这些promises同时开始处理（就像我们没有使用`async/await`时那样）。

有一种模式可以缓解这个问题——通过将 `Promise` 对象存储在变量中来同时开始它们，然后等待它们全部执行完毕。让我们看一些证明这个概念的例子。

我们有两个可用的例子 —— [slow-async-await.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/slow-async-await.html)（参见[source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/slow-async-await.html)）和[fast-async-await.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/fast-async-await.html)（参见[source code](https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/async-await/fast-async-await.html)）。它们都以自定义promise函数开始，该函数使用`setTimeout()` 调用伪造异步进程：

```js
function timeoutPromise(interval) {
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve("done");
    }, interval);
  });
};
```

然后每个包含一个 `timeTest()` 异步函数，等待三个 `timeoutPromise()` 调用：

```js
async function timeTest() {
  ...
}
```

每一个都以记录开始时间结束，查看 `timeTest()` promise 需要多长时间才能完成，然后记录结束时间并报告操作总共需要多长时间：

```js
let startTime = Date.now();
timeTest().then(() => {
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  alert("Time taken in milliseconds: " + timeTaken);
})
```

`timeTest()` 函数在每种情况下都不同。

在[slow-async-await.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/slow-async-await.html)示例中，`timeTest()` 如下所示：

```js
async function timeTest() {
  await timeoutPromise(3000);
  await timeoutPromise(3000);
  await timeoutPromise(3000);
}
```

在这里，我们直接等待所有三个timeoutPromise（）调用，使每个调用3秒钟。后续的每一个都被迫等到最后一个完成 - 如果你运行第一个例子，你会看到弹出框报告的总运行时间大约为9秒。

在[fast-async-await.html](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/fast-async-await.html)示例中，`timeTest()` 如下所示：

```js
async function timeTest() {
  const timeoutPromise1 = timeoutPromise(3000);
  const timeoutPromise2 = timeoutPromise(3000);
  const timeoutPromise3 = timeoutPromise(3000);

  await timeoutPromise1;
  await timeoutPromise2;
  await timeoutPromise3;
}
```

在这里，我们将三个Promise对象存储在变量中，这样可以同时启动它们关联的进程。

接下来，我们等待他们的结果 - 因为promise都在基本上同时开始处理，promise将同时完成;当您运行第二个示例时，您将看到弹出框报告总运行时间仅超过3秒！

您必须仔细测试您的代码，并在性能开始受损时牢记这一点。

另一个小小的不便是你必须将等待执行的promise封装在异步函数中。

## [Async/await 的类方法](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#asyncawait_%E7%9A%84%E7%B1%BB%E6%96%B9%E6%B3%95 "Permalink to Async/await 的类方法")

最后值得一提的是，我们可以在类/对象方法前面添加`async`，以使它们返回promises，并`await`它们内部的promises。查看 [ES class code we saw in our object-oriented JavaScript article](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#ecmascript_2015_classes)，然后查看使用异步方法的修改版本：

```js
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  async greeting() {
    return await Promise.resolve(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
```

第一个实例方法可以使用如下：

```js
han.greeting().then(console.log);
```

## [浏览器的支持](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84%E6%94%AF%E6%8C%81 "Permalink to 浏览器的支持")

决定是否使用 async/await 时的一个考虑因素是支持旧浏览器。它们适用于大多数浏览器的现代版本，与promise相同; 主要的支持问题存在于Internet Explorer和Opera Mini。

如果你想使用async/await但是担心旧的浏览器支持，你可以考虑使用[BabelJS](https://babeljs.io/)库 —— 这允许你使用最新的JavaScript编写应用程序，让Babel找出用户浏览器需要的更改。在遇到不支持async/await 的浏览器时，Babel的 polyfill 可以自动提供适用于旧版浏览器的实现。

## [总结](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Async_await#%E6%80%BB%E7%BB%93 "Permalink to 总结")

async/await提供了一种很好的，简化的方法来编写更易于阅读和维护的异步代码。即使浏览器支持在撰写本文时比其他异步代码机制更受限制，但无论是现在还是将来，都值得学习和考虑使用。