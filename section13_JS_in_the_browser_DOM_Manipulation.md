
/*
####INTRODUCTION TO THE DOM

#####The DOM stands for Document Object Model (DOM)

Through the DOM we connect Javascript to HTML and CSS. 
This is where JS becomes more visual and we can make stuff that we can actually see! 
There is a lot to cover in terms of the DOM! 

Javascript helps to give our webpages an interactive element! 

Javascript in a way gives our websites a life! and can help to make our pages interactive and more user friendly! 

Javascript can be used to put logic into our applications. 

All the interactivity on our websites can be achieved through the use of Javascript.

Javascript and the DOM in very exciting stuff. 

This is where we start to take HTML and CSS and play with it using javascript. 


#####TASTE OF THE DOM- DOCuMENT OBJECT MODEL 

The DOM (Document Object Model), is a JavaScript representation of a webpage.
It's your JS "window into the contents of a webpage"
It's just a bunch of objects that you can interact with via JS. 

It is our portal into the world of JAVASCRIPT. So we can write JS to figure out how many h1 tags are on a page, 
 Or how many inputs we have in a form, or the value of a form, we could change the value of a form, we could change images, put in animations, 
 listen for clicks or drags, or hovers, or any event that is user generated and then respond to this event. 
 
 We add logic in with Javascript that controls, interacts, reads and understands the content of a page.

 The key thing to understand about all of this, is the object part of the DOM. 

 When our website loads-up, the broswer turns it into a bunch of OBJECTS.

 ![images](/images/Section13_TasteoftheDOM.png)

 Just  JS objects, and these objects are all constructed and put together to form the DOM. 
 It is a virtual representation (or a js representation) of the content of a page, and consists of a bunch of JS objects. 

 HTML + CSS and some other stuff go in, and the browser interpreats it and reads it and creates the DOM for us. 
 It spits our JS objects, representing the HTML, CSS and other stuff. 

![image](/images/Section13_TasteoftheDOMpart2.png)

If we had a page of simple HTML, the browser will read it, on its own its just text, 
the browser interpreates and interpreats it into a way that is understandable to humans. 
The broswer reads it, makes it look nice for humans, and at the same time, creates a virtual representation. 
This virual representation is a JavaScript object of the different elements. For example, the h1 element becomes a JS object.
The h2 becomes another object, our ul becomes another and so on and so forth. 

These objects have a bunch of different properties. The simplest one, in their content. For example, 
h1 (this is made into a javascript object)>  How To Become a DOM Pro(this is the content and is made into a property of our object) h1

p (becomes a JS object)> Becoming a pro at DOM is not an easy thing (becomes a property (innerText) of the JS object that is the paragraph) p

Which have a bunch of other properties, for different attributes, CSS styles, we have methods that we can use, we could delete HTML elements update them and so on. 

This usability is all achieved through JS where we are able to interact with these objects. 

We can select and interact with these objects, we can change them in JavaScript. 
When we change an element in the DOM using JS, there is an impact that we can see, on our webpages. 


##### ANOTHER FUN DOM EXAMPLE 

We are going to play around with the home page of google. We are going to take every element from the screen, and animate it around randomly.
This is to show us the we can do things like change style, move things around, and animate them. 

Through our console, we can go to sources and create a new code snippet. We can then use this to customise a webpage and see how we can manipulate the DOM and its javascript objects. 

In this example, we have uploaded an image from unsplash, that moves around the page to another random spot every two seconds. 

![GIF](gifs/checkingelementsinthedom.gif)

The code for this, does the same thing as the gif, but it doesn't jump and moves more across the screen smoothly. 







#####THE DOCUMENT OBJECT



#####getElementById



#####getElementsByTagName




#####getElementsByClassName



#####querySelector & querySelectorAll 


