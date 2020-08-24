/*
Intro to AJAX 


*/ 
/*
JSON & XML
*/
/*
//example of XML data structure 

//XML can represent any form of information. 
//XML is just a wide ranging way of transmitting data. 
//XML is not very common anymore. 
<name>
    <first>John</first>
    <last>Anderson</last>
</name>
<email>Todd@gmail.com</email>
//In javascript, we have a way of taking this data,
//and turning it into a javascript object. It would look like the following.

{
    name: {
        first: 'John',
        last: 'Anderson'
    },
    email: 'Todd@gmail.com'
}

XMLHttpRequests: The Basics 

//first we make a request object. Then we attach our callbacks
const firstReq = new XMLHttpRequest(); 
firstReq.addEventListener('load', function() {
    console.log('it worked!!!');
    //we get the JSON data and turn in into javasript using the .parse method.
    const data = JSON.parse(this.responseText);
    //we create a loop that goes through every planet in our js object.
    for(let planet of data.results) {
        //we then print out the name of every plant from our object
        console.log(planet.name)
    }
    
})
firstReq.addEventListener('error', () => {
    console.log('error')
})
//we tell the type of request and where the request is.
firstReq.open("GET", 'http://swapi.dev/api/planets');
//then we tell is to send it. 
firstReq.send(); 
console.log('Request Sent!')


XMLHttpRequests: Chaining Requests

const firstReq = new XMLHttpRequest(); 
firstReq.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    const filmUrl = data.results[0].films[0];
    //INSIDE OF OUR CALLBACK, WE NEED TO MAKE OUT ADDITIONAL REQUESTS.
    //WE NEED TO CONTINUE TO DO THIS NESTING WHICH IS A BIG LIMITATION OF XHR'S.
    const filmRequst = new XMLHttpRequest();
    filmRequst.addEventListener('load', function() {
        const filmdata = JSON.parse(this.responseText)
        const filmTitle = filmdata.title
        console.log(filmTitle)
    })
    filmRequst.addEventListener('error', function(e) {
        console.log("Error", e);
    })
    filmRequst.open('GET', filmUrl);
    filmRequst.send()
})
firstReq.addEventListener('error', () => {
    console.log('error')
})
firstReq.open("GET", 'http://swapi.dev/api/planets');
firstReq.send(); 
console.log('Request Sent!')

/*
A BETTER WAY: FETCH! 

fetch('http://swapi.dev/api/planets')
    .then((response) => {
        if (!response.ok) 
            throw new Error(`Status Code Error: ${response.status}`);
            
        response.json().then((data) => {
        for (let planet of data.results) {
            console.log(planet.name)
        }
        });
    })
//we have a catch for any failure that we might have with our promises. 
    .catch((err) => {
        console.log("something didn't work");
        console.log(err);
    });
*/
/*
CHANING FETCH REQUESTS 

//we request all the planets. 
fetch('http://swapi.dev/api/planets')
//we then get a response.
    .then((response) => {
//if there is an error with our response we throw an error we the status code of our response.status
        if (!response.ok) 
            throw new Error(`Status Code Error: ${response.status}`);
//if it works we return the response on make the json into javascript. 
        return response.json();
    })
//we then have another promise.
    .then((data) => {
//from this we get the first film that that the first planet is in. 
        console.log("fetched all planets")
        const filmUrl = data.results[0].films[0];
//we then return this promise.
        return fetch(filmUrl)
    })
    .then((response) => {
//if something goes wrong we error handle it again. 
        if(!response.ok) {
            throw new Error(`Status Code Error: ${response.status}`);
        }
//otherwise, we take that json and make in into javascript. 
        return response.json()
    })
//we then make another promise, and console.log the data for the first film,
//that the first planet is in. 
    .then((data) => {
        console.log("fetched first film the first planet is in")
//Here we log the data.title we is: A New Hope
        console.log(data.title)
    })
//we have a catch for any failure that we might have with our promises. 
    .catch((err) => {
        console.log("something didn't work");
        console.log(err);
    });



/*
REFACTORING FETCH CHAINS 
*/  
//we create a function that gets our inital response.
const checkStatusAndParse = (response) => {
//if something goes wrong, we throw an error. 
    if (!response.ok) 
            throw new Error(`Status Code Error: ${response.status}`);
//if it works we make the returned data into javascript from json.
            return response.json();
};
//we create another function that takes in our js data.
const printPlants = (data) => {
    console.log("loaded 10 more planets")
//we create a loop that prints out the name of 10 planets.
    for(let planet of data.results) {
        console.log(planet.name)
    }
//we can use a Promise.resolve(), which is a method, 
//this will create a new promise for us that is resolved.
//and allows us access to the next 10 planets we want to look at.
    return Promise.resolve(data.next)
}
//we move our fetch url into a function which we call to access the api.
const fetchNextPlants = (url = 'http://swapi.dev/api/planets') => {
    return fetch(url);
}

fetchNextPlants()
    .then(checkStatusAndParse)
    .then(printPlants)
    .then(fetchNextPlants)
    .then(checkStatusAndParse)
    .then(printPlants)
    .then(fetchNextPlants)
    .then(checkStatusAndParse)
    .then(printPlants)
    .catch((err) => {
        console.log("something didn't work");
        console.log(err);
    });



/*
AN EVEN BETTER WAY: AXIOS 


*/ 



/*
SEQUENTIAL AXIOS REQUESTS


*/ 



