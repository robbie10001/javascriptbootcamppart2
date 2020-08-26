
/*
GOAL OF THIS SECTION 
- Work with primitive types. 
- Understand let and const
- Use String Template Literals. 
- Work with common operators/methods 
*/


/*
PRIMITIVE TYPES 
- number 
- string 
- boolean
- null
- undefined 

We technically have two more 
- Symbol 
- BigInt 
*/

/*
INTRODUCTING NUMBERS
- JavaScript has ONE Number Type (number)
- It works whole numbers (integers) and decimal numbers (floats)

*/

/* 
SIMPLE OPERATIONS 
- Addition, Subtraction, Mutiplication, Division. 


- Modulo 27 % 2  = 1 (the remainder operator- takes the second operator and divides it by the first, and gives you the remander. )

- Exponential 2 ** 3 (2 x 2 x 2), 5 ** 5 (5 x 5 x 5 x 5 x 5 )

- NaN  is a special value in JavaScript and is a number in JS. NaN is a value that means this is not standard math, of JS is going to have hard time representing this value.
- Infinity can be shown in JS as can -Infinity 


- With Maths the regular order of operations applies. 
*/

/*
Variables and Let
- Variables are like labeled jars for a value in JS. 
- We can store a value and give it a name, so that we can recall it, use it, or change it later on. 

let someName = value; 

if i wanted to give my father's age. 

let fatherAge = 70; 

UPDATING VARIABLES  

let hens = 4; 
//a raccon kills a hen 
hens = hens - 1; 
//this changes the value of hens too 3.

NAMING VARIABLES 

There are certain words that we cannot use in JS, especially keywords. 
We should make our variable names make sense
We also name our variables using camel case. 
This means that we capitalise the first letter of each new word. 
For example, 
let numOfHens = 6; 

Another important aspect of JS is that we can change the data type of a variable that we have defined! 
*/

/*
UNARY OPERATORS 
Instead of doing something like hens = hens + 1;
We could do this in a faster way. 
For example,
hens -= 1, this is the same as the logner method.
We can do this using other mathematical operators.

Another method we can use, which can be useful when we are using a counter for example, 
We can use a unary operator! 
For example, 
let counter = 0; 
counter++; 
this would make counter equal 1. 

*/

/*
CONST 

const works just like let, except you CANNOT CHANGE THE VALUE. 
const is short for constant. Don't use const unless you are sure you don't want to change the value of your variable! 
We use const for things like pi(a constant), daysInTheWeek(will always be the same), minHeightInARide(never changes).
const actually has more uses that we will see later in the course. 
*/

/*
VAR 

Before let and const, var was the only way to declare variables. 
We can still use var, but it's not ideal. 
These days, there really isn't a really reason to use it.

var egg = 12; 

*/

/*
VARIABLE QUIZ 

What is the value of eggCount? 

let eggCount = 42; 
eggCount + 2; 

My Answer- the answer will still 42 as we are not saving the changes within a variable.
correct answer- The correct answer remains 42.

What is the value of rating after this code runs?

const rating = 7.5; 
rating = 8; 

My Answer- this will throw an error because we are trying to change the value of a constant. The value of rating will remain 7.5
correct answer- We caught an error, and the value of rating stays the same. 

What's the value of wind_speed? 

My Answer- While wind_speed is not defined using standard convention, i still think it is valid. We then add 5 to the value of wind_speed then remove 1. Therefore the value of windspeed should be 80. 
correct answer- Windspeed equals 80, the issue with the code is that style doesn't follow js conventions. 



*/
