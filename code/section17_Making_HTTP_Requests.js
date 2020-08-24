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
*/
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



/*
XMLHttpRequests: Chaining Requests


*/ 



/*
A BETTER WAY: FETCH! 


*/ 




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



