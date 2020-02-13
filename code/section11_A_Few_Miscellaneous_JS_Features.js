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

Copies properties from one object into another object literal 
Spread only works if we use something that is iterable! 

*/ 
const feline = {
    legs: 4, 
    family: "Felidea"
};

const canine = { 
    family: "Caninae", 
    furry: true
};

const dog = {
    ...canine, 
    isPet: true, 
    adorable: true, 
}
console.log(dog);//{ family: 'Caninae', furry: true, isPet: true, adorable: true }
const myAnimals = {...feline, ...canine, cat:"archie" }
console.log(myAnimals)//{ legs: 4, family: 'Caninae', furry: true, cat: 'archie' }



/*
REST - THE ARGUMENTS OBJECT 

Rest looks a lot like spread but its not! This is because it has the same syntax ... 
Rest behaves very differently from spread. It is almost the opposite. 
What it does is collects data down into a single array. 
It is used when we want to create functions that have an unlimited amount of arguments, or a variable number of arguments. 

The  arguments object, is available inside every function. 
It's an array-like object. It has a length property. Does not have array methods. 
Contains all the arguments passed to the function. Not available inside of arrow functions!


*/ 
//with Math.max we can pass in as many arguments as we like. 
console.log(Math.max(1,4,5,7,23,45)) //this returns 45. 

//this is not the answer! 
function sum(a,b,c,d,e,f,g,h,i,j,k) {

}

//notice, we don't need to put in any arguments. 
function sumAll() {
    let total = 0;
    for(let i = 0; i < arguments.length; i ++)
{       total += arguments[i];   
    }  
    return total;     
}
console.log(sumAll(8,4,3,2));//17
console.log(sumAll(2,3));//5 
//THIS IS NOT THE BEST WAY WE SHOULD DO THIS! 

function summer() {
   const argsArr = [...arguments]
    return arguments.reduce((total, currVal) => {
        return total + currVal
    })
};
//THIS RETURNS 15. 

/*
REST PARAMETERS 

Rest is ... but we put it in the paramatter list of a function. 
It collects all remaining arguments into an array. 

USING REST. 

1. we use ...
2. we use a name. This will be the name of the array which holds all our arguments.


*/ 

function sumer(...nums){
    console.log(nums); 
}
sumer(4,5,6,7)//[ 4, 5, 6, 7 ]

function summing(...nums) {
    return nums.reduce((total, currVal) => {
        return total + currVal
    })
}
console.log(summing(2,3,4,5)) //14

function fullNames(first, last, ...titles){
    console.log("first", first)//first tom
    console.log("last", last)//last jones
    console.log("titles", titles)//titles [ 'iii', 'order of the pheonix' ]
}

fullNames("tom", "jones", "iii", "order of the pheonix")// 


/*
DESTRUCTURING ARRAYS 

A short, clean syntax to "unpack": values from arrays. properties from objects into distinct variables. 


*/ 
const raceResults = ["Robbie", "Ricky", "Harry", "Bruce"];

const [gold, silver, bronze, last ] = raceResults;
gold;  //robbie
silver; //ricky
bronze; //harry
last; //bruce

const [fastest, ...everyoneElse] = raceResults;
fastest; //robbie
everyoneElse; //ricky, harry, bruce. 

const marathonResults = [
    "robbie",
    "ricky",
    "harry",
    "bruce"
];

const golds = marathonResults[0]
const silvers = marathonResults[1]
const bronzes = marathonResults[2]
const lasts = marathonResults[3]

//we can do this a lot easier, for example. 

const [golder, silverer, bronzeer, laster] = marathonResults; 
console.log(golder)//robbie
console.log(laster)//bruce 
const [first, , , fourth] = marathonResults
console.log(first, fourth)//robbie, bruce

//we can also use our rest ... inside of our destructuring in order to get the rest of an array within a new variable. 

const [winner, ...others] = raceResults
console.log(winner, ...others)//Robbie Ricky Harry Bruce

/*
DESTRUCTURING OBJECTS 

In an object, we make the variables based of the name of the property. 

*/ 

const runner = {
    firstName: "Robbie",
    lastName: "Colborne", 
    country: "Australia",
    title: "The King of Beecroft"
}
//all we need to do is use an object curly brace and then single out the properties that we want. 
//our variable holds the value of our firstName, lastName and country. 
const {firstName,lastName,country} = runner; 

console.log(firstName, lastName, country)//Robbie Colborne Australia

const {
    title: realTitle
} = runner 

console.log(realTitle)//The King of Beecroft

/*
NESTED DESTRUCTURING 


*/ 
const results = [{
    firstest: "Robbie", 
    lastest: "Colborne", 
    countriest: "Australia"
    },
    { 
    firstest: "Harry", 
    lastest: "Frankel", 
    countriest: "Australia"

    },
    {
    firstest: "Ricky", 
    lastest: "Man", 
    countriest: "Italy"
    }
]

const [{firstest: goldWinner
},{countriest}] = results; 
console.log(goldWinner, countriest)//Robbie Australia

//The point is that we can combine our syntax. 

/*
DESTRUCTURING PARAMETERS 

One more place we often see destructuring used, is inside a function definition where the paramaters are listed. 
If we put it in a function definition it will unpack values from the arguments that we pass in. 

*/ 
const fullName = ({firsta, lasta}) => {
    console.log(`${firsta} ${lasta}` + "!")//Robbie Colborne!
}
const runnera = {
    firsta: "Robbie", 
    lasta: "Colborne", 
    countrya: "Australia",
}

fullName(runnera)

const response = [
    "HTTP/1.1",
    "200 OK",
    "application/json",
]

function parseResponse([protocol, statusCode, contentType]){
    console.log(`Status: ${statusCode}`)
};








