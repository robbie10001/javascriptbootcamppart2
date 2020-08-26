
/*
BOOLEAN INTRO

Booleans are simple true of false values. We can think of them as Yes or No or 1 or 0. 

let isLoggedIn = true; 
let gameOver = false; 
const isWaterWet = true; 

You can change a boolean to some other datatype, but this isn't really a great idea! 
*/ 

/*
STRINGS INTRO 

In JavaScript, strings are pieces of text, or strings of characters wrapped in quotes (single or double as long as we are consistant).

In JavaScript, we have an operator called typeof. 
This operator tells us the datatype of the element we are inquiring into. 

We can also use quotes within quotes, as long as we use the correct format. 
For example, 

"he said 'lol' "

or

'he said "lol"'

to declare a variable using a string, we use the following syntax. 

let firstName = "Robbie"
let lastName = "Coulborne"

We can then concatonate the strings together for example.

firstName + lastName 

or 

letFullName = firstName + " " + lastName

*/

/*
STRING INDICES 

Every character within a string is given an index number. They all have a positional number 
For example,

HARRY is indexed as H = 0 A = 1 R = 2 R = 3 Y = 4 

This is really useful for some of the methods that we use. We allow us to copy and search parts of a string to create a variablee for example. 

Every string has a property called length

For example. 

"hello".length = 5 

PROPERTIES = ARE VALUES THAT WE CAN ACCESS.

let mySong = "Surfin' USA"
mySong.length = 11 
mySong[0] = "S"
mySong[1] = "u"

The length is always one greater than our index! 

If we want to access the last character is a string, we can use the following syntax

mySong[mySong.length - 1] = "A"

*/

/*
STRING METHODS 
Methods are build in pieces of functionality. 
Strings come with a set of built-in method, which are ACTIONS that can be peformed on or with that particular string. 

We can do things like...
- searching within a string 
- replacing parts of a string 
- changing case (upper/lower)

All string methods follow the following syntax, 

thing.method()

thing = datatype 
.method = method name 
() = calling with parenthsis 

We can find a list of methods for strings on the MDN website. 

let message = "You are so grounded mister!"
message = message.toUpperCase();
or
let upperMessage = message.toUpperCase();
message = "YOU ARE SO GROUNDED MR"
upperMessage = "YOU ARE SO GROUNDED MR"

.toLowerCase() = This makes all the characters within the string into lowercase characters. 

.trim() = This removes leading and tralling whitespace. For example 
let color = "       green     "
color = color.trim().toUpperCase()
color = "GREEN"

*/

/*
MORE STRING METHODS 

Some methods accept arguments that modify their behaviour. We pass these arguments inside of the parentheses. 

thing.method(argument)

thing = datatype 
.method = method name 
() = argument

For example, 

indexOf() = this method gives us the first match for our search term within the string we are looking at. 

let tvShow = "catdog"; 
tvShow.indexOf("cat"); = 0 - cat starts at the first character within the string. 
tvShow.indexOf("dog"); = 3 - dog starts at the fourth character within the string. Therefore is has an index of 3. 
tvShow.indexOf("z"); = -1 (this is the representation of not found)- This is because their is no z found within the string at all. 

slice() = the method allows us to access difined elements within our strings. 

let string = "hellomydude"
str.slice(0,5); = "hello" - if we pass in two indecies, the first is where we want to start while the second is where we want the slice to finish.
str.slice(5); = "mydude" - if we pass in a single number, it takes a slice for index 5 to the end!
This is often used when we have data that follow a pattern and we are trying to focus on a portion of it!

replace() = allows you to specify what you want to replace and what you want to replace it with. 

"baseball is entertaining".replace("entertaining", "ok")
"baseball is ok"

We can also use replace to remove things universally, but this requires the use of REGEX. 

*/

/*
VARIABLE QUIZ

What is the value of age?

const age = "5" + "4";
my answer = because it is a string the answer will be "54";

what does this evaluate to?

"pecan pie"[7]
my answer = "i"

What does this evaluate to 

"PUP"[3]; 

my answer = undefined

What is the value of song?

let song = "london calling"; 
song.toUpperCase();

my answer= it doesn't change.

What is the value of cleanedInput?

my answer = "todd@gmail.com"

What is the value of index?

my answer = - 1 

What is the value of index

my answer = 7

What does this evaluate to? 

my answer ="RAGE"

*/

/*
STRING ESCAPES 

\n = newline 
\' = single quote 
\" = double quote 
\\ = backslash - this allows us to just put a regular backslash in our code (\)
*/

/*
STRING TEMPLATE LITERALS 

Template literals are strings the allow embedded expressions, which will be evaluated and then turned into a resulting string. For example, 

`I counted ${3 + 4} sheep` = I counted 7 sheep

 For template literals we use back-ticks not single quotes. 

 The use of template literals is that they allow us to embed information.

 let animal = "pig";
 let sound = "oink";
 `${animal} says ${sound}` = "pig says oink"

 What we are doing here is string interpolation. 

let item = "cucumbers";
let price = 1.99;
let quantity = 4; 

`you bought ${quantity} of ${item}, total price: $${price*quantity}`;
== "you bought 4 cucumbers, total price $7.96"

*/

/*
NULL AND UNDEFINED

These represent the lack of a value but their are differences between them. 

Null = the intentinal absense of any value. For example, 

//no one is logged in yet
let loggedInUser = null, //value is explicitly nothing
//a user logs in...
loggedInUser = "Alan Rickman";

Undefined = Variables that do not have an assigned value assigned to it. 

Normally, undefined is a value that we get back from JavaScript. 
*/

/*
The MATH OBJECT AND RANDOM NUMBERS 

The Math object contains properties and methods for mathematical constants and functions. 

Math.round(4.9) = 5 (rounding a number)
Math.abs(-456) = 456 (absolute value)
Math.pow(2,5) = 32 (raises 2 to the 5th power)
Math.floor(3.9999) = 3 (removes decimal)
Math.PI = 3.14159 (gives us the value of PI)
Math.random(); (gives us a random decimal between 0 and 1 (non-inclusive))

Say we want to make a random integer generate between 1 and 10. We would do the following. 

const step1 = Math.random();
const step2 = step1 * 10
const step3 = Math.floor(step2);
const step4 = step 3 + 1;

Math.floor(Math.randm() * 10) + 1;
*/

/*
typeof Operator 

The syntax for typeof is lowercase and with parenthisis. 
It is an operator! so it doesn't need them.  

typeof 99 = "number"
typeof true = "boolean"
typeof "99 mystery" = "string"
*/
/*
parseInt & parseFloat

This is used to parse strings into numbers, but watch out for NaN! 

parseInt("24") = 24
parseInt("28dayslater") = 28 

parseFloat("24.89") = 24.89
parseFloat("7") = 7 
parseFloat("i ate 3 shramp") = NaN
*/
