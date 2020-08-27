
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



### Error Handling in Async Functions 




### Multiple Awaits 




### Parrallel VS Sequential Requests 




### Refactoring with Promise All 



