/*
A Quick Overview of Async Functions 
*/ 
//if we write a function like this, we can't actually log the data variable.
//Thie is because we have to wait for the data to come back from the server. 
//our data variale will log before any information is actually recieved from the server.
function getData() {
    const data = axios.get('http://swapi.dev/api/planets');
    console.log(data)
}
//it would be nice to not have to use callbacks and .then to resolve promises. 
//This is where async and await come into play.

/*
The Async Keyword 
*/ 

//we just have a normal function that returns "hello"
function greet() {
    return "Hello"
}

/*
//however, when we put the async keyword in front of our function declaration, we get a promise. 
//Not only was the promise returned, it was also resolved, with the value of "Hello".
//Whatever the value that we are returning is, the promise this is returned from greet,
//will be resolved with that value.  
async function greeter() {
    return "Hello"
}
//so we can do something like this, and get the val, which is equal to 'hello'.
greeter().then((val) => {
    //this will log, 'Promise Resolved With Hello'
    console.log("Promise Resolved With ", val);
})
//So we can chain on .then because greeter is going to return a promise. 
*/


//if we call this as a regular function, we will see that the logic works.
//if we call this function with 3 and 4, everything works fine. 
//however, if we call it with "e" and "t", we recieve the uncaught throw.
function add(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw 'x and y must be numbers';
//we recieve back: uncaught x and y must be numbers
    }
    return x + y;
}
//if we run the same code again with an async in front of the function,
//if it's successful we get a resolved promise with the value we put in (the sum of two numbers)
//if it doesn't work, we can back a rejected promise.
//however, we still recieve an uncaught message. 
//The same message as the function before. 
async function adder(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw 'x and y must be numbers';
//we recieve back: uncaught x and y must be numbers
    }
    return x + y;
}

async function adding(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw 'x and y must be numbers';
//we recieve back: uncaught x and y must be numbers
    }
    return x + y;
}

//we can call our function, then put on our .then and .catch.
//because adding is now an async function, it returns a promise. 
//and now we are handling it if it's rejected or if its resolved. 
adding('e', 5)
    .then((value) => {
        console.log('Promise resolved with', value);
    })
//if we run adding('e', 'p') for example, we 
    .catch((error) => {
        console.log('Promise resolved with', error);
    });

//2 MINUTES 30



/*
Error Handling in Async Functions 


*/ 



/*
Multiple Awaits 


*/ 



/*
Parrallel VS Sequential Requests 


*/ 



/*
Refactoring with Promise All 


*/ 



