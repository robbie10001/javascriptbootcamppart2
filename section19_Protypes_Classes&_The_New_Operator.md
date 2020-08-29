
### What on Earth are Protoypes?

In this section, we're focusing on Object Orientated Programming, or at least Javascripts flavour of OOP.

We will cover things like Constructor Functions and Classes, Super Keyword and Inheritence. We are going to start with a quick video on a weird but important part of Javascript called Object Prototypes. 

We are going to take a deeper look at what a protype is, what it means and what it means when we look at a console of an array and see the property of proto.  

According to the MDN website, protypes are the mechanism by which Javascipt objects inherit features from one another. Objects can have a prototype object, which adds as a template object that it inherits methods and properties from. 

What this means is that certain object, an array for example, has a bunch of different methods. These methods are kept within the proto property. Proto is a property that refrences the array prototype. A protype is the templete object for this case array. It contains typically, a bunch of methods that every array will have access to. So instead of defining them individually in every single array, they all share a reference to proto which houses all these different methods that we use. 

Through the magic of javascript, we can simply access these methods whenever we make an array. For example array.toUpperCase(). 

This matters because we will look at this again when we talk about defining classes and constructor functions. 

All we need to know at the moment is that prototypes are templete objects. They typically contain a bunch of methods and we create multiple objects that contain the same prototypes, so they all have access to the same methods without needing to have their own copy. 

As a fun demo, we can actually add our own properties and methods to any prototype that we want. 

![images](/images/section19/robbiestring.png)

In the above example, we can see that we have added a new method to our prototype object for String!

We can then use this method that we've created in our code. For example, we can declare a variable and then use the method we created. This leads to the following. 

Everytime we make a string, we now have access to a new string method called robbie! 

![images](/images/section19/robbiestring2.png)

Here we have created, a new string method called craig. It is a callback function that returns an upper case value of what every string we pass in plus the object literal value.

For example, 'bruce'.craig() would return, "OMG!!! BRUCE!!!!! ARGHGHGHGHGHG

We have made our own method that we can use on every single string! 

![images](/images/section19/craig2.png)

It's important to know that this is not really a good idea. This is not a pattern we should follow all the time. It's just a demo of how prototypes works. 

Prototypes are important to understand. The idea is that we have a single object that contains common properties and methods that other copies other objects of arrays or strings look up to..to find their common properties. It's a place to store a blueprint. 

### An Intro to OOP 




### Factory Functions 





### Constructor Functions 




### JS CLASSES - SYNTACTICAL SUGAR 





### A BIT MORE PRACTICE WITH CLASSES 





### EXTENDS, SUPERS AND SUBCLASSES 


 