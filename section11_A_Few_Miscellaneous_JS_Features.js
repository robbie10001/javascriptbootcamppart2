/*
THE GOALS OF THIS SECTION 
- Work with rest 
- Work with spread
- Add default function paramaters 
- Understand destructuring 
*/ 


/*
DEFAULT PARAMETERS 

deafult parameters have to come at the end of our of our paramater list! 
we can have the first element default and then not default afterwards! 
We can have as many as we want, although, if we have heaps we are likely not using the best solution! 
*/ 
function multiply(x, y) {
    return x * y;
}
console.log(multiply(4, 6))//this function returns 24. 
//Without putting in a second argument (6), we get NaN. 

//however, we can define a value within a function as follows.
//this is the old way of doing it. 

function multiples(x, y) {
    if(typeof y === "undefined") {
        y = 2;
    }
    return x * y; 
}
console.log(multiples(5))//this returns 10. 

//This works although its very clunky. There is a better way to do it. 
//This is using Default Params! 

function multiplier(a, b= 3) {
    return a * b; 
}
console.log(multiplier(4))//this evaluates to 4 x 3 which equals 12. 

console.log("---break----")

const greetz = (person, greeting = "Hey, ") => {
    console.log(`${greeting} ${person}! `)
}

greetz("rob")//this returns Hey,  rob! 

const blah = (x, y = [1, 2, 3]) => {
    console.log(x, y); 
}
blah(2);//this returns 2 [ 1, 2, 3 ]

/*
SPREAD FOR FUNCTION CALLS 

Spread syntax allow an iterable such as an array to be expanded in place where zero or more arguments
(for function calls) or elements (for array literals) are expected, or an object expression to be expanded
in places where zero or more key-value pairs (for object literals) are expected. 

Spread always has to do with expanding some iterable into some other destination. 
We are spreading/expanding something. 

When we use spread in a function call, it will take that iterable, and break it up into individual arguments.

Spread is not only applicable to arrays, we can also use it on strings and the like. 


*/ 
//expands an iterable (array, string, ect.) into a list of arguments.
console.log("---break---")


const nums = [9, 3, 2, 8]; 
Math.max(nums); //NaN 
//use spread! 
Math.max(...nums); //67 
//same as calling: Math.max(9,3,2,8)



console.log(Math.max(3,4,5,6)); //this returns 6.
console.log(Math.min(3,4,5,6)); //this returns 3. 

//This only works when we pass them in as separate arguments. 
//it we use an array of numbers for example, it will not work as it views them as a single argument. 
const numberz = [3, 4, 5, 6]
console.log(Math.max(numberz))//Not a Number
//the argument we pass in in numberz is not a number, it is a list of numbers not a number itself. 
//Instead we can use spread. Which will break our single argument into 5 different arguments. 
console.log(Math.max(...numberz))//this therefore returns, 6. 
console.log(Math.min(...numberz))//this therefore returns, 3. 

function giveMeFour(a,b,c,d) { 
    console.log("a", a)
    console.log("b", b)
    console.log("c", c)
    console.log("d", d)
};
giveMeFour(4,5,6,7)//a 4, b 5, c 6, d 7

const themColors = ["red", "orange", "yellow", "green"]

console.log(giveMeFour(themColors));//a [ 'red', 'orange', 'yellow', 'green' ], b undefined, c undefined, d undefined 
//however, if we using the spread operator, we get the following result! 
console.log(giveMeFour(...themColors)); //a red, b orange, c yellow, d green
//we can also use strings with the spread operator. 
const string = "robs"
console.log(giveMeFour(...string))// a, r b, o c, b d, s 
/*
SPREAD IN ARRAY LITERALS  

Creates a new array using an existing array. Spreads the elements from one array into a new array. 

Individual pieces are taken and copied into a new destination array. 

We can use it to combined arrays make copies of arrays and in my other use cases. 

One of the most common use cases for the spread operator is when we want to make a copy of an array. 
That however does not work with nested arrays! 

*/ 
const num1 = [1,2,3];
const num2= [4,5,6];

[...num1, ...num2]; 
//[1,2,3,4,5,6]
[ "a", "b", ...num2]; 
//["a", "b", 4, 5, 6]
[...num1, ...num2, 7, 8, 9];
//[1,2,3,4,5,6,7,8,9]

const cephalopds = ["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"];

const gastropods = ["giant african snail", "banana slug", "variable neon slug"];

const cnidaria = ["fire coral", "moon jelly"] 
//the new array will create an array with all the cephalopds and gastropods combined into one!
const mollusca = [...cephalopds, ...gastropods]
console.log(mollusca); //[ 'dumbo octopus','humboldt squid','flamboyant cuttlefish','giant african snail','banana slug','variable neon slug' ]
//we can additional elements into our array. 
const meWithMollusca = ["Robbie", ...cephalopds, ...gastropods]
console.log(meWithMollusca); //[ 'Robbie','dumbo octopus','humboldt squid','flamboyant cuttlefish','giant african snail','banana slug','variable neon slug' ]

//in order to make a copy of our array, we can use the following syntax. 

const copyMollusca = [...mollusca]







/*
SPREAD IN OBJECT LITERALS  

*/ 


/*
THE ARGUMENTS OBJECT 

*/ 


/*
REST PARAMETERS 

*/ 



/*
DESTRUCTURING ARRAYS 

*/ 


/*
DESTRUCTURING OBJECTS 

*/ 



/*
NESTED DESTRUCTURING 

*/ 



/*
DESTRUCTURING PARAMETERS 

*/ 

