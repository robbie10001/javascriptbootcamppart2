
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

Object Orientated Programming always comes back to an idea. The idea that organising our code, designing and structuring our application by breaking things up into decrete patterns of objects. When we say patterns of objects, you can also think of recipies for objects. 

The idea of having a repeatable recipie for other objects to be based off of is central to everything we will see in this section. 

OOP is the idea of creating classes or object templetes that contain the definitions of the properties and methods for a given instance of that class. 

### Factory Functions 


Above we have two functions that are perfectly fine as is. 


![images](/images/section19/factory1.png)

However, if we wanted to make a nice little object from which we can convert back and forth colours from rgb to hex without needing to pass in numbers each time.

We could use a factory function that would make us an object, that automatically had a hex method and an rgb method and it stored the r, g and b values as properties on the objects. We could do this through a function! 

![images](/images/section19/factoryfunction2.png)

What we can do is use the .this keyword in order to get the information we want from our color object. We can do this the following way. 

![images](/images/section19/factoryfunction3.png)

We can use deconstruction to make our code even more clean using the .this keyword. 

![images](/images/section19/factoryfunction4.png)

We can use this same technique to add a function to get our hex value. 

![images](/images/section19/factoryfunction5.png)

In this section we have seen as make a function, which makes us an empty object, we starts empty. We add some properties to this function based of some properties that we pass to the function as arguments then we add some methods and return the object. 

This is called a factory function and it does work. This is one way of making objects based of a pattern. In this example, we have defined a pattern for color. 

We call make colour with some arguments const firstColor = makeColor(255, 255, 150);

And we can back an object that contains three properties which are numbers (r: 255, g: 255, b: 150) and two methods (hex & rgb). 

Factory functions are not the main way people make objects based of patterns.


### Constructor Functions 

In this section, we are going to talk about why factory functions are not commonly used, and why instead, we use what's called the constructor pattern or the constructor function. 

The short coming of factory functions, is not a huge one but it's important to understand. Everytime we make a new colour object, we start with an empty object and have three unique properties that are added directly to the object but then the two functions are recreated and added to each unique colour object, so each colour object has its own rgb and hex functions. It is not very programmatic to have a unique copy of these functions everytime. 

When we called methods like .toUpperCase() we are referencing a single function. We are not creating multiple different versions of the same code. 

This is where the constructor function enters. The constructor function is a weird part of javascript. 

![images](/images/section19/construct1.png)

When using the NEW keyword, another thing happens. If we look at the object that we have created and look under proto, we can see that it has a constructor property set to color. This is the second thing in the above code snippet (Links (sets the construct of) this object to another object) using whatever we named the function. So in the above example, the constructor is set to our Color function. This allows us to add methods, NOT to the individual objects, but to the PROTOYPE.

We can achieve this the following way:

![images](/images/section19/construct2.png)

Now when now longer will create new instances everytime we make a new color. They new share the same function which is more programmatic. 

![images](/images/section19/construct3.png)

The main take away from this section is that the NEW keyword, does these mysterious operations that changes how are functions operate. We also looked at how we can add properties to our method prototypes so that we only need to define them once, rather than on each individual function. 

This syntax is now very good, this is why the class keyword and the new class keyword syntax was introduced, which we will see in the next section. 

### JS CLASSES - SYNTACTICAL SUGAR 

In this section, we are going to see a better way of replicating the exact same functionality that we have since in the previous section. Creating a template for a colour, which has different properties and then we add methods to the color prototype so that there is only one copy of them across all instances of that colour. 

This better option, in the NEW CLASS syntax. This syntax is just syntactical sugar, for exactly what we've been doing.  We are going to look at how we can rewrite our work from the last section into a single class. The main benefit of this is that we don't have to add methods to the prototype manually like we did in the previous section and we don't have to break up the constructor function and then seperately add methods. 

![images](/images/section19/class1.png)

The real advantage of using classes, is when we want to add methods! 

![images](/images/section19/class2.png)

Let's now add some methods that are actually useful within our class!

![images](/images/section19/class3.png)

So now we have covered most of the basics when it comes to classes. You define a class with the class keyword, which we capitalise. The first thing we do then is define a constructor. The constructor will run automatically whenever we call a NEW instance of that class. Inside the class, if we are inside a method, the keyword .this will refer to the individual object. So when we go this.r = r; we are  assigning properties to each colour. Not to the protoype but to the colour.

The methods that we have added (for example rgb()) are added automatically to the prototype. We can therefore keep everything together within our class. 


### A BIT MORE PRACTICE WITH CLASSES 

In this section, we are going to create a class that converts a rgb colour into a hsl colour. Hue Saturation and Lightness (HSL), is a very interesting colour system. The first bit is the hue and we give this a value from 0 to 360. Then we have saturation which we give as a percentage from 0 to 100. Then we have lightness which is also a percentage from 0 to 100. For example hsl(260, 80%, 40%). So let's make a function to create HSL values and lets store these values on our class instances so we can reuse them for other functions.

The idea of this section is to focus on the interplay of the .this keyword, the idea of the constructor adding in values to .this as properties and then using the NEW keyword to create new colors. 

![images](/images/section19/scream1.png)

![images](/images/section19/scream2.png)


### EXTENDS, SUPER AND SUBCLASSES 

The keywords extend and super, both have to do with subclassing. This is esentially about inheritence and sharing functionality between classes. For this video we are going to make it very basic. 

##### Extends

![images](/images/section19/finalsection1.png)

In this example, our classes share a lot of the same code. It would be better if we were able to have another class by which these classes could inherit the attributes that they share. 

![images](/images/section19/finalsection2.png)

##### Super

![images](/images/section19/finalsection3.png)