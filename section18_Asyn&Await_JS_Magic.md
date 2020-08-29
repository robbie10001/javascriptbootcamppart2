
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

In this section, we are going to get more practice with ASYNC and AWAIT. We are using code that we have used previously in section16 Asychrnous Code, Callbacks and Promises. 

Everything we see with Async and Await, are promises behind the scenes.

The moveX function that we created in section 16, returns a promise and in this promise, will move an element a certain number of pixels horizontally depending on the number we pass in and then uses a delay before that operation actually takes place. The promise is rejected if we end up not having enough room in the browser to move the specified amount. 

This is how we can have the same functionality using using AWAIT and ASYNC instead.

![images](/images/section18/multipleawaits2.png)


### Parrallel VS Sequential Requests 

In this section, we are going to talk about an important distinction that has to do with using AWAIT inside an async function. 

To illustraight this point, we are going to use AXIOS to make some requests, this will take some time, we will use an ASYNC function to handle this and we will AWAIT the request. We are going to work with a different API to the starwars one. We are going to use the POKE API. 

##### Example of a sequential request.

![images](/images/section18/pokemon1.png)

##### Example of a parallel request.

The difference in the example is that in the first example we are fully awaiting for the promise we get from the API to be resolved before we move on. In the second example, we are making all of our calls to the API at the same time. We are not awaitng the request we make to the API to finish before we move on to the next line of code. 

![images](/images/section18/pokemon2.png)

We are going to look at a much more understandable visualisation of the difference between awaiting in sequence versus awaiting in parallel...

![images](/images/section18/colour1.png)

![GIF](/gifs/section18/colour1.gif)

Right now, the above code is happening in sequence. The first thing finishes then the second then the third then the fourth. This is what we want in a use case like this. However, if these were requests, taking a second each and they are not related, we might not want that. In the next example, we can see how this would work if we ran it in parallel as opposed to in sequence. With requests, if you don't need them to run is sequence run them in parallel! 

![images](/images/section18/colour2.png)

![GIF](/gifs/section18/colour2.gif)


### Refactoring with Promise All 

The last thing we are going to look at in this section, is a nice and clean way of sending requests in parallel, and just waiting for them to be all back before we do something. If we want to refactor our code, we can do this using a promise helper method called Promise.all().

Promise.all() accepts an array of promises. So in our example, we can just pass all of our promises into the array. We can then just await our Promise.all array. 

![images](/images/section18/getthempokemon.png)



