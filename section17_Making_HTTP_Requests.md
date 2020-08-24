
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


### XMLHttpRequests: Chaining Requests



### A BETTER WAY: FETCH! 



### CHANING FETCH REQUESTS 



### REFACTORING FETCH CHAINS 



### AN EVEN BETTER WAY: AXIOS 



### SEQUENTIAL AXIOS REQUESTS



