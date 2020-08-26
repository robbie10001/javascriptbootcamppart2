## Section1: Introduction 


### JS, ECMA, TC39: What Do They Mean? 

##### ECMA Script 

ECMA script is a specification for a programming language. Its a document that describes how a language should work. It is then up to the browser to implement these rules as Javascript. 

##### TC39 

TC39, is a technical committee that is in charge of maintaining and evolving the ECMAscript specifications. ES6  took almost 6 years to release. Many features were ready sooner but had to wait for the mainvrelease. After this, they decided to release changes yearly. 
 
##### Resources 

caniuse.com - is a good website to see if a feature of ECMAscript we are using is available in a given browser. 

While there is no an offical javascript we use, a good place o et information is MDN! - This is a really good resource for Javascript developers. 

https://developer.mozilla.org/en-US/docs/Web/JavaScript

## Section 2: Values and Variables. 


### GOAL OF THIS SECTION 
1.  Work with primitive types. 
2. Understand let and const
3. Use String Template Literals. 
4. Work with common operators/methods 

### PRIMITIVE TYPES 

The primative datatypes for javascript are as follows. 

1. number
2. string
3. boolean
4. null
5. undefined 

Technically, there are two more. 

6. Symbol 
7. BigInt 

### Introducting Numbers

JavaScript has ONE Number Type (number), It works whole number (integers) and decimal numbers (floats)


### SIMPLE OPERATIONS 

Using numbers we can add, subtract, multiply and divide. We can also find our a modulo and also an exponential. 

Modulo 27 % 2  = 1 (the remainder operator- takes the second operator and divides it by the first, and gives you the remander. )

Exponential 2 ** 3 (2 x 2 x 2), 5 ** 5 (5 x 5 x 5 x 5 x 5 )

NaN  is a special value in JavaScript and is a number in JS. It's a value that means this is not standard math, or JS is going to have hard time representing this value.

Infinity can be shown in JS as can -Infinity 

With Maths the regular order of operations applies. 


### Variables and Let

Variables are like labeled jars of value in JS. We can store a value and give it a name, so that we can recall it and use it or change it later on. For example, if i wanted to give my father's age. 

let fatherAge = 70; 

### UPDATING VARIABLES  

let hens = 4; 
//a raccon kills a hen 
hens = hens - 1; 
//this changes the value of hens to 3.

### NAMING VARIABLES 

We cannot give our variables the name of a JS keyword. Our variable names should make sense. We name variables using camel case. 

### UNARY OPERATORS 

Instead of doing something like 

hens = hens + 1; 

We can acheive this result using a faster method. 

For example, 

hens += 1 

This is the same as the previous longer syntax. 

We can also use the unary operator, which is useful when we using a counter. For example, 

let counter = 0; 
counter++; 
this would make counter equal 1. 

### CONST 

When using const we are unable to change the value that we assign to that variable. Bascially, we shouldn't use it unless we are sure that we don't want the value of something to change. 

### VAR 

Before JS had let and const, var was the only way to declare variables. We can still use var, but it's not ideal. 

### VARIABLE QUIZ 

##### What is the value of eggCount? 

let eggCount = 42; 
eggCount + 2; 

correct answer- The correct answer remains 42.

###### What is the value of rating after this code runs?

const rating = 7.5; 
rating = 8; 

correct answer- We caught an error, and the value of rating stays the same. 