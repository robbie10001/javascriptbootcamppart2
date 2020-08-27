
### A Quick Overview of Async Functions 

Async functions and this section depend significantly on promises. At their core, Async functions are just nice syntactical sugar for promises. It's a nice clear syntax to work with promises.

The Async and Await keywords don't give us anything we can't aleady do using promises. Although they make it easier and clearner to work with promises. 

![images](/images/section18/asyncintro1.png)


### The Async Keyword 

Async is a javascript keyword. Async functions always return a promise. If the function returns a value, the promise will be resolved with that value. If they function thrown an exception, the promise will be reject. 

![images](/images/section18/asynckeyword1.png)

The key thing to understand about using the async keyword is that when you put it in front of a function, the function behaves differently. It will now return a new promise. 

![images](/images/section18/asynckeyword2.png)

The next thing we want to talk about is how do we return a promise that is not resolved?

Sometimes we want to make promies that might be rejected or might be resolved. 

Inside of an async function, if we want to return a rejected promise, all we have to do is raise an exception. 

![images](/images/section18/asynckeyword3.png)

An Async function on one level, is just a short cut syntax to make a function that returns a promise. 

If we return a value, that value will be the value that a promise is resolved with. 

If you thrown an exception, instead that promise will be rejected with that value. 

This is not all we need to know about async functions. This is the async keyword. Next we will see the await keyword that makes things even more magical. 

### The Await Keyword 

We have the async keyword which we use to delcare an async function, it's basically a fancy way to wrap our function in a promise. 

Await is really magical, if we put the await keyword inside of an async function, it will pause the execution of a function while it waits for a promise to be resolved. 

We can await something without needing to use .next, we can run code after an ansyrchronous operation, without needing to nest things with callbacks. 

We can only use await within an async function. The await keyword gives us some nice syntactical sugar when we are using promises. 

![images](/images/section18/theawaitkeyword1.png)

This is great, very short easy way to wait for an anchyronous operation to finish before running the next line. But what about if our promise is not resolved and is rejected? This is what we are going to look at in the next section. 

### Error Handling in Async Functions 

In order to handle errors we have a couple of options. 

1. The first is to chain onto our function call a .catch. For example, 

![images](/images/section18/errorhandlingasync1.png)

2. The second way to do it, is if you don't want to use .catch and pass in a callback function. In our async function, we can add a try and catch block. 

![images](/images/section18/errorhandlingsync2.png)

### Multiple Awaits 

In the section we are going to look at how we can make multiple requests in a single async function using AWAITS and Async. 




### Parrallel VS Sequential Requests 




### Refactoring with Promise All 



