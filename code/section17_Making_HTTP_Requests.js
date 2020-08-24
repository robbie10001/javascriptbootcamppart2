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
*/
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

 




/*
CHANING FETCH REQUESTS 


*/ 



/*
REFACTORING FETCH CHAINS 


*/ 



/*
AN EVEN BETTER WAY: AXIOS 


*/ 



/*
SEQUENTIAL AXIOS REQUESTS


*/ 



