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



