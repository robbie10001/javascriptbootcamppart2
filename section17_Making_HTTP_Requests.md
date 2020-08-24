
### Intro to AJAX 

We need to look at callbacks and promises so that we can now start making requests.

We are going to look a how we can use javascript to get information from an api. For example, load movie data,  or search from planets in starwars. 

We can apply what we are going to learn, to do things like log people in via facebook, or sending some data of to our our database to save. It's all the same process. 

We send a request from the client-side. We have to understand asynchronius javascript and promises for a lot of the requests we are sending because these requests take some time.  

They might fail, they might be successful, they could take 10 seconds. It's not instant, so we have to worry about things like promises and callbacks. 

There are a number of ways to make requests. We are going to start with the old school, confusing way, XMLHTTP requests. This is standard across all browsers. 

We are then going to look at a much more modern version called FETCH. 

Then we are going to talk about a library this is really popular to make requests called AXIOS. 

We are doing the same thing using all three of these methods, just the syntax is clearer. 

#### What is AJAX? 

AJAX stands for Asynchronous Javascript and XML. This is a bit wrong, most of the time these days we work with JASON instead of XML. Although it's called AJAX still. 

Before AJAX and single page apps became big things, we had a single standard flow for loading new data or getting information from a server, which included a page refresh. 

The idea of AJAX, is using the requests that we can make through Javascript asynchronously to load or send some data to a server behind the scenes. Not inbetween page loads. 

The general process is as follows. A request is sent, in the background we get a response from the server. In the modern day, this most often comes in the form of JSON. 

JSON is just a format for sending data. Imagine that we take some data from a server. All that we are actually getting is text and perhaps some information that we don't see on the page. It is not sent as plain text. It is turned into JSON notation. Which is a way of representing data. It's a protocol for communicating between servers and formating data. 

When a request is made, we can see what is happening behind the scenes in our NETWORK tab within our console in developer tools. 

For example, if we search for SPREAD on caniuse.com you can see the following requests being made after we submit our search. 

![GIF](/gifs/section17/consolerequest1.gif)

We can see more specifically the requests that have been send by looking at the XHR tab. We can see the data that was sent back from the server behind the scenes. What we are being sent back is actually JSON. It's simply a way of sharing information that we can then use in Javascript. It's easy to turn JSON into javascript and then use it. 

![GIF](/gifs/section17/consolerequest2.gif)

The browser sends a request information comes back. Javascript then takes over and decides what to do. 


### JSON & XML 

JSON and XML are ways of formatting data so you can send them from a server to another server or from a server to a broswer. It's a format for information and they solve esentially the same problem. That is we have some data that we want to send, and we need a common way for us to send that information. 

##### XML 

XML stands for Extensible Markup Language. We can think of it as almost the parent of HTML, with the exception that the element names look very different. XML is just a way of grouping content and giving meaning to our data. 

![images](/images/section17/xmlexample1.png)

Javascript has a way that we can take XML and turn it into Javascript. We do this by parsing the text that is XML and turning it into actual javascript. 

There is another format, called JSON.

##### JSON

JSON is really common these days. It stands for Java Script Object Notation. 

![images](/images/section17/jsonintro1.png)

JSON is not Javascript even though it looks like Javascript and shares much in common with it. JSON is another notation for sending data.

In JSON every key must be a string. We use colons (:) instead of an object. We can also use arrays. We can also use primitive datatypes but cannot use more complicated data types like functions. Because of it's similarities to Javascript it is very easy for us to understand what is going on with JSON. 


### XMLHttpRequests: The Basics

In this section we will make our first requests using the original method for sending requests using Javascript. This is through XMLHttpRequests. This method does not support promises, so we have to use lots of callbacks! These method also can be difficult to understand and has clunky syntax which can be difficut to remember. 

These are objects we can create in the browser that have different methods and we can use them to fetch data from an API to send data somewhere. Basically, they generate a HTTP request. 

![images](/images/section17/exampleXMLrequest1.png)

What we do is make a new object. We create that object by calling new XMLHttpRequest();

Then we provide two callback functions. 

the first to run if the request loads (myReq.onload) and one to run if there's an error (myReq.onerror)

Then we call the request object (in this case myReq) .open the type of request we are making (e.g 'get'), and what url to send the request to (https//whatever) then we finally send the request (myReq.sent());

If this request works, myReq.onload will run. If it fails myReq.onerror will run instead. 

![GIF](/gifs/section17/fr1.gif)

### XMLHttpRequests: Chaining Requests

The limitations with XMLHttpRequests start to be seen once we begin making requests that are dependent upon each other. 

The main reason why people don't like to use XHR's is that it's difficult things tend to get nested and it can become a mess. This is why fetch was created. Fetch is easier to work with because fetch allows for promises which makes making additional requests far easier. 

![images](/images/section17/XMLREQUEST2.png)


### A BETTER WAY: FETCH! 

Fetch is the newer way of making a request through Javascript. It supports the use of promises, however it is not supported in internet explorer. It also has better syntax is terms of its simplicity. 

The fetch method takes one mandatory argument, the path to the resource you want to fetch. It returns a PROMISE that resolves to the response of the request. 

##### How to use fetch 

![images](/images/section17/fetch1.png)

1. We call our fetch method and pass in a url. 
    fetch('http://icanhazdadjoke.com/23/2`, {
        headers: { Accepts: 'aplication/json`}
    })
2. That then returns a promise which is either accepted or rejected. 
    .then((res) => {
        if (res.stauts !=== 200) {
            console.log("Problem", res.status);
            return;
        } 

if it is resolved sucessfully we are given a response which we then parse into JSON. 
        res.json().then((data) => {
            console.log(data);
        });
    })
Otherwise we catch the error.
        .catch(function(err) {
            console.log("Fetch Error", err);
    })

Below is an example of a fetch request when everything goes correctly. 

![images](/images/section17/fetch2.png)

Below is an example of Fetch where we account for if the data doesn't behave the way we expect. 

![images](/images/section17/fetch3.png)


### CHANING FETCH REQUESTS 

The main selling point of fetch is that we don't have to nest things and so it isn't messy like XHR requests. We get around nesting by chaining promises and using a bunch of .then(s).

Below we have multiple requests that are hapeening one after another. We don't have any nesting, our code structure is very flat. Although we do have some logic that we repeat. This is the great advantage of fetch, we can use PROMISES to keep our code flat and not nested. 

![images](/images/section17/chainingfetchrequests1.png)

### REFACTORING FETCH CHAINS 

In this section, we are going to work on refactoring our code. We can refactor our code by making a number of functions so that instead of repeating our code we are able to just duplicate the functionality that we need. 

![images](/images/section17/refactoringfetch.png)

### AN EVEN BETTER WAY: AXIOS 

A third option for requests using JavaScript is AXIOS. It is not native to javascript, like fetch or XHR's. Instead it's an external library. There are many other libraries like axios online. 

Also Axios does is simplify the process of making requests. It uses fetch behind the scenes. So it doesn't give us things we can't already do, it just makes things easier to use. 

It is promised based so we don't have to deal with a bunch of callbacks. 

One of the things people really like about axios is that you can use it both on the client side and the server side using node.js

Just like fetch, we get a promise back when we make a request using axios. 

One of the main advantages of using axios, is that we don't have to use json parsing on our own.

When we used fetch, we had to manually check the response status code. Fetch doesn't reject a promise if the status code is something other than 200. Axios, in contrast, knows that if there is a status code besides 200, you want the catch callback to run. This simplifies things for us as developers.  

1. We don't have to parse JSON. 
2. We don't have to weed out the bad status codes. 

![images](/images/section17/axios1.png)

### SEQUENTIAL AXIOS REQUESTS



