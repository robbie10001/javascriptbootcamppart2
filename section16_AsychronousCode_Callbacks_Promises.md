
### Our goals for this section

1. Make http requests from JS from our browser(client), loading data from an api and sending the request somewhere. This stuff is something we do all the time. 
2. We will talk about async code, what it means and in order to do that, we need to understand how JS works behind the scenes. 
3. We will understand promises and how we use promises to manage asynchronous code, and make our life easier. 

### THE CALL STACK 

The call stack is a tool of Javascript which is seen in tons of different programming languages. Its function is that it help JS keep track of where it is within our code. If we have a number of functions and some of the functions may call other functions, the call stack is the mechanism the JS interpreter uses to keep track of its place in a script. Its how "Knows" what function is currently being run and what functions are called from within that function, etc. 

If we use the analogy of a book, the callstack is like the bookmark which shows us where we are in that book. It helps us keep track of our current place. 

The 'stack' in call stack has to do with a data structure in computer science called a stack. A stack is a very simple data structure, all we need to know is that just like a stack of books on a desk, the last thing we put in is going to be on top and that will be the first thing that we remove. 

 ![images](/images/section16/firststack.png)

 When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function. Any functions that are called by the function are added to the call stack further up, and run when their calls are reached. When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing. 

For example, in the below example, we have three different functions, the first one called is named isRightTriangle. isRightTriangle, accepts three different arguments (a,b,c), and it returns true if the square of a + b is equal to the square of c. For example 3x3=9 4x4=16(25) 5x5=(25) therefore, the below example is true. 

![images](/images/section16/firstexample.png)

isRightTriangle, is not a function that just returns something immediately. Instead it needs to call other fuctions (square) which itself needs to call the (multiply) function. 

When the interpreter encounters the very first function call, isRightTriangle(3,4,5), its added to the callstack, and we then hit the multiple function calls held within isRightTriangle, square(a/3) will be the first thing added to the callstack, this function calls another function (multiply x/3, x/3). Multiply is then added to the stack, and from multiply (3 x 3) we get 9. 

So when the multiply function with the value of 9 is run, this completes this function. It is then removed from the stack, the square(9) function is then completed and removed from the stack, followed by the isRightTriangle square(a) function call. This process repeats for square(b) and square(c) until we have finished all our function calls within isRightTriangle, it is then removed from the call stack.

In the end we end up with isRightTriangle(3,4,5) 9 + 16 === 25 true, so we return. 

The first thing into the callstack is the last thing out out of call stack. 


### Call stack debugging with dev tools 

We can use chrome dev tools to look at a representation of the call stack, and step through it one call at a time. 

![images](/images/section16/js.png)

![images](/images/section16/html.png)

![images](/images/section16/ihatemayonnaise.png)

We can open up our dev-tools and open up our sources tab, in the sources tab, we can open up the navigator, and go to the file with our code, we then add in a breakpoint by selecting one of the lines within our file. This will pause our code when it hits this breakpoint. 

![GIF](/gifs/section16/breakpoint.gif)

Firstly, we need to refresh the page, in order to get access to our callstack. We can then go through the order in which our call stack is called!

![GIF](/gifs/section16/aa.gif)

We can see that the callstack now contains the following, in order of creation.

1. (anonymous)
2. makeRant
3. getRantText
4. scream 

scream is then completed a removed from the call stack. 

next, getRantText is run. It uses the function repeat 8 times. so repeat is added to the callstack. At the moment our callstack looks like this,

1. repeat
2. getRantText
3. MakeRant
4. (annonymous)

Once the loop is over, we return the result. This finishes the repeat function and it's then removed from the callstack. Current callstack

1. getRantText
2. makeRant
3. (annonymous)

getRantText now has all the information it needs and so is able to return rant. getRankText is then removed from the callstack. 

1. makeRant
2. (annonymous)

Now we are back in makeRant the original function call that has been waiting this whole time. It then finishes and is removed from the callstack. 

### JS is single threaded 

A fundemental aspect of JS as a language is that it's single threaded language. At any given point in time, that single JS thread is running at most one line of JS code. We are not multitasking we are running one thing at a time. 

At any given point, one thing is being run at a time and this has a whole bunch of implications.

The problem with this is that it could be a serious issue if we doing things that take time, anything that is not immediate. Our program would have to wait for this to finish before moving onto the next line of code. 

An example of something that takes time is when we send a request. For example, from the browser we write some JS code that asks for some data from a movie api. This takes time, we send a request to the server, the server responds to the request and sends a response back, all of this takes time. 

The way we can avoid this process and actually get on with our code will waiting for a process to finish is what we are going to address in the next section.

### How Asychronous Callbacks Actually Work 

We have established the JS is single threaded, meaning that it does one thing at a time. Commonly with JS we do a lot of things that take time. This could be getting data from a database, or an API, or trying to save something, or even just setting a timer for example.

Here is a simple example, its not exactly full code that would work. Imagine a user types something into a form, it submits, we want to grab the value of the form, save it to a database (this could take a second or two) and the we reset the from. 

![images](/images/section16/time.png)

Fortunately, instead of needing to just wait, we have a work around. This is a callback function. These functions are run at the appropriate time after an interval has passed in the below example. However, this doesn't really answer how does this work or why does this work. 


The reason why this works, is because of the browser. JS is not the same thing as our browser. The browser itself are written in a different language often in C++. The browser itself is able to do certain tasks that JS sucks at. These problems are handed off to the browser, JS goes here is some stuff i need you to do and the broswer takes over, once its down it reminds JS that it needs to take over again.

So in our case, JS is not setting a timer or keeping track of how many seconds have gone by, JS is not sending a request to an API, the browser is what is actually handling all this. 

Browsers come with web APIs that are able to handle certain tasks in the background (like making requests or setTimeout). The JS call stack recognizes these web API functions and passes them off to the browser to take of. One the browser finishes those tasks, they return and are pushed onto the stack as a callback. 

![images](/images/section16/back.png)

As we can see from the above image, this is seperate from JS, the browser itself is what is setting the timeout. While this happening JS is free to continue to the next line of code, in the above example console.log('I print second!');

![images](/images/section16/silly.png)

Once the 3 seconds have occured in our example, the browser tells JS to run the callback function, and this function is placed back in the callstack so that JS knows it has to do this thing. So in our example, JS takes over and it now executes the function and in our example this evaluates to console.log('i print have 3 seconds'); running. 


### Welcome to Callback Hell 

We have already seen why callbacks are so important in javascript. We pass a callback into certain functions that the browser takes over, things like setTimeout, setInterval when we make requests, the browser takes care of that, and we pass in a callback. 

However, callbacks are not perfect and can get messy very quickly. This is what we're going to look at in this section.

The purpose of the below code is to show a situation where callbacks are useful, when we are waiting for something to finish (setTimeout), in the below we have to pass callbacks. All of this stems from the facts that JS can only do one thing at a time and that the browser is taking over whenever we use setTimeout. 

As we can see below, this can get really messy. This is especially true when we start having different outcomes (sucess, failures) which happens a lot when we are making requests. As we will see, when we make real web http requests, we follow the same pattern, and if we follow the pattern below with nesting and callbacks, things get very difficult to follow quickly. It becomes difficult to understand.

![images](/images/section16/htmling.png)

![images](/images/section16/cssing.png)

![images](/images/section16/jsing.png)

![images](/images/section16/jser.png)


This is where promises come in. Promises allow us to rewrite a function like the ones above, so that we don't have to do all the crazy nesting that we are doing above. Promises are so much easier to read.

### Introducing Promises! 

In the last section, we have seen how using a bunch of callbacks and nesting things, can get really out of hand quickly. The example from the previous section and the example below are what is known as callback hell.

![images](/images/section16/callbackhell.png)

When we work with promises there are two things that we need to understand. 

1. How do we create a promise? How do we create a function that could return a promise.
2. How do we consume or how do we interact with promises? This is something we do all the time, even if we are not writing the promises ourselves, we might be using a library like axios, which returns in a lot of its functions promises, so we need to understand how we work with promises. 

To avoid the problem of callback hell, we can use promises. 

Promises are a JS object representing the eventual completion or failure of an asynchronous operation. It's much easier to read and understand than when we are stuck in callback hell.

A promise is a way of promising a value that you may not have at the moment. The way to think about it is a promise in the real world. A promise is guarantee of a value in the future, either a sucess or a failure. 

The object that is returned while we are waiting for some data or whatever, is a promise.  What we do is that we attach callbacks to the object (the promise).

We don't pass in callbacks into a function and nest a whole bunch of stuff like we did in callback hell. Promises are OBJECTS that we can attach functions to instead.  

![images](/images/section16/promise.png)

The way we make a new promise in JS, is like this 

![images](/images/section16/intro.png)

![images](/images/section16/new.png)

We have seen the two basic piece of promises. To make a promise we call new Promise. Every time we pass a function with two parametters, resolve and reject. Within this function, we can then call to resolve the function. We call reject as a function to reject the promise. If we do neither, our promise will always be pending. 

Then we looked at the .then and the .catch method, whatever we pass into .then will automatically run, when a given promise is resolved. Whatever we pass into the .catch method will automatically run whenever a promise is rejected. 


### Returning Promises from Functions 

![images](/images/section16/new.png)

Our current promise, is either resolved or rejected immediately. There is nothing in this promise that takes time. In this example, there is really no reason to write it as a promise, we could write it instead as a simple if/else statement. 

Now lets introduce some delay so that it takes longer. We are going to use setTimeOut to simulate how many years it took Colts dad to reject the promise that he was going to get him a dog. 

![images](/images/section16/dogo.png)

we often return a promise from a function instead of just making one promise like we did above, we could instead define a function and this function, can the return our promise. 

What we have seen in this section is that 

1. we can chain .then and .catch together without needing to create a varaiable or needing to reference the variable again and only one or the other will run (the resolve or the reject), the other thing we have seen is that we can you a function to call our promises. 

### Resolving/Rejecting with values 

When you reject or resolve a promise, you can reject or resolve the callback with a value. 

You will then have access to this value in our callback to the .then or the .catch. 

This is really useful, because most of the time we want to know why something was rejected and if it was successful, what did we get back. For example, with an http request. 

The video is about how we can request or resolve with a value. We can pass a value in to our resolve or reject calls. 

![images](/images/section16/res1.png)
(continued)
![images](/images/section16/res2.png)


### The Delights of Promise Chaining 



### Refactoring with Promises 





