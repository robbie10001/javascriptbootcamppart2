/*
FUNCTIONS IN DETAILS 

Important things we should know about functions! 

GOALS 
1. Understand Scope 
2. Write higher order functions.
3. Pass functions as callbacks. 
*/

/*
FUNCTION SCOPE 

Function scope can be seen as variable visibility. 
The location where a variable is defined dictates where we have access to that variable. 
There are multiple different ways in which functions works in javascript. 

The first type of scope is called function scope. 
When we define a variable in a function, it is accessable only within that function. 

*/
function lol() {
    let person = "Tom"; 
    const age = 45; 
    var color = "teal"; 
console.log(person) //Tom
console.log(age) //45 
console.log(color) //teal 
}

lol() //calling the function however we don't have access to the variables inside this function. 
//WE CANNOT ACCESS THIS VARIABLE OUTSIDE THE BOUNDS OF OUR FUNCTION. 
//console.log(person)//not defined 
//console.log(age)//not defined
//console.log(color)//not defined 

let bird = "duck"; 
console.log(bird)//duck 
function birdWatching(){
    let bird = "chicken"
    console.log(bird)//chicken 
}
birdWatching()
console.log(bird);//duck 

/*
BLOCK SCOPE 

Block scope is a very important concept about how variables work in javascript. 
blocks is javascript are denoted by { }, curly braces. 
examples of blocks are if statements, for loops and while loops for example. 
Let and Const have different scoping to var. 
Let and const have block scoping while var only has function scoping. 
let, cost and var are three ways of declaring variables. 
let and const cannot be redelcared. We can change let but not redeclare it. 
Let and const are blocked scoped, var is not! 

*/
//this the behaviour of let and const 
if(true){
    let animal = "eel"
    console.log(animal)//eel 
}
//animal is scope to the block above us. 
//console.log(animal)//animal is not defined! 

if(true){
    var animals = "eel"
    console.log(animals)//eel 
}
//if we use var we can still get access to the value of animals outside of the block scope. 
console.log(animals)//eel 
//let and const have different scoping rules to var. 
//Var is scoped to functions, there is no block scoping for var. 
let mammals = ["bear", "cat", "dog"]
for(var i = 0; i < mammals.length; i++) {
    console.log(i, animals[i])
    //0, "e", 1, "e", 2 "l"
}
console.log(i)//3 
//because we use var, we have access to i after the loop. This could have a number of different consequences which aren't good! 

//[1,3,5]
//[2,6,10]
//we define a function that takes a single argument
function doubleArr(arr){
    //define a new array which is empty 
    //this const is defined in the function so is scoped to the function. 
    const results = [];
    //we have a for loop that goes through for the length of the array 
    for(let num of arr){
        let double = num * 2; 
        //double is scoped to this block of code. 
        results.push(double);
        //we still have access to results. Within a block we have access to variables defined outside the block in this function. 
    }
    //because results is defined with functional scope, we can call it here. 
    console.log(results);
};
doubleArr([1,2,3]);
//this returns 2,4,6 

/*
LEXICAL SCOPE  

Lexical scope is pretty simple and straight forward.
When we have nested functions, we have inner and outer functions. 
a variable defined in one function is available to nested functions within it. 

*/
function outer() {
    //our outer function is a variable called hero. 
    //we don't have access to it outside of the function, 
    //but if have a nested function it still has access to it. 
    //FOR EXAMPLE, OUTER FUNCTION HAS ACCESS TO INNER FUNCTION. 
    //when we have nested functions we have access to the variables declared in the parent function. 
    //IF WE USE REACT THIS IS VERY IMPORTANT! 
    let hero = "black panther";

    function inner() {
        let cryForHelp = `${hero}, please save me!`
        console.log(cryForHelp);
    }
    inner(); 
};

function outer(){
    let films = "Amadeus";

    function inner(){
        let films = "The Shining"
        console.log(films.toUpperCase());
        //when we reference films, we are going to see if there is a films defined within the inner function.
        //if it cannot find one, it moves up to the next function (outer) and looks to see if films is defined within the parent function. 
        //if it is it will use the parent variable. 
    }
    outer()
};

/*
FUNCTION EXPRESSIONS 
There is another syntax we can use to define our functions. 
This is called a function expression. 
They work just as well as the functions we have been declaring already. 
THERE IS ONE KEY DIFFERENCE, THE FUNCTION IS STORED IN A VARAIBLE. 
THE FUNCTION ITSELF DOESN'T HAVE A NAME. 
WE ARE ABLE TO STORE OUR FUNCTION IN A VARIABLE BECAUSE, FUNCTIONS ARE OBJECTS.     
we can store them in a variable, we can store 10 of them in an array, we can even pass them around as arguments.
We do this all the time. 

*/
//we have a variable called square. 
//it holds a function(an object) an it takes an argument.
const square = function (num) {
    return num * num 
}
//to call it, we use the variable name and an argument. 
//just like any other function. 
console.log(square(6)); //36
console.log(square(7)); //49

function add(x, y) {
    return x + y;
}
//this is the same as 
const sum = function (x,y) {
    return x + y; 
}
console.log(sum(9,3))//12 
console.dir(sum)//function: sum
//we can add in a name for our function 
const product = function multiple(x, y) {
    return x * y 
};
console.log(product(3, 4));//12 


/*
HIGHER ORDER FUNCTIONS

Function are objects, what does this mean? 
We can store a function in a variable or an array for example. 

*/
//function statement 
function add(x, y) {
    return x + y;
}
//function expresion 
const subtract = function(x, y) {
    return x - y; 
}

//function statement
function multiply(x, y) {
    return x * y; 
}
   
//function expression
const divide = function(x, y) {
    return x / y; 
}
//we have created an array which holds our four functions. 
const operations =[add, subtract, multiply, divide];

console.log(operations); //[ [function: add], [function: subtract], [function: multiply], [function:divide]]
console.log(operations[0](100, 4)); //this calls the add function (index 0) of our array, and prints 104. 
console.log(operations[1](100, 4));//this calls the subract function (index 1) and therefore the answer is 96.
console.log(operations[2](100, 4));//this calls the multiply function (index 2) and threfore returns 400.
console.log(operations[3](100, 4));//this calls the divide function and therefore divides 100/4 and logs 25. 

console.log("---------BREAK--------")

//we can do things like loop over our array of functions. 
for(let i of operations){
    let result =i(30, 5);
    console.log(result);//THIS PRINTS OUT 35(addition), 25(subtract), 150(times), 6(divide)
}

//this is creating a method
const thing = {
    doSomething: multiply
}
//we are creating an object which has the key of doSomething for the value of multiply.
console.log(thing.doSomething(50, 2))//100 
//we then call the object with the paramaters 50, 2 which ends up being 50 x 2 = 100

/*
FUNCTIONS AS ARGUMENTS 

Higher order functions are functions that operate on/with other functions.
They can accept other functions as arguments. 
They can return a function. 
*/

//function that accept other function as argument. 

//we create a function called callTwice. 
//it accepts as an argument (func) which we are calling twice. 
function callTwice(func) {
    func();
    func();
}
//we have another function laugh. 
function laugh() {
    console.log("HAHAHAHAHAHAAHAHAHAH");
}
//if we cann the function callTwine and laugh, we print out laugh twice. 
console.log(callTwice(laugh));
//HAHAHAHAHAHAAHAHAHAH
//HAHAHAHAHAHAAHAHAHAH

function callThreeTimes(f) {
    f();
    f();
    f();
}
function cry(){
    console.log("Boo Hoo I'm so sad!")
}
console.log("-------break--------")
//we call our fuction with the argument of another function. 
callThreeTimes(cry);
//Boo Hoo I'm so sad!
//Boo Hoo I'm so sad!
//Boo Hoo I'm so sad!

//we can pass in whatever paramater name we want. 
//it will store whatever we pass in, javascript doesn't care! 
function repeatNTimes(action, num){
    for(let i = 0; i < num; i++){
        action();
    }
}
repeatNTimes(cry, 2);
//Boo Hoo I'm so sad!
//Boo Hoo I'm so sad!

function pickOne(f1, f2){
    let rand = Math.random();
    console.log(rand);
    if (rand < 0.5) {
       console.log(f1()); 
    } else {
        console.log(f2()); 
    }
}
pickOne(cry, laugh)
//we pass in to our function another function. 
//we then get a random number out of the function. 
//based on this number, we either print out the cry or laugh function. 

console.log("---------break---------")
/*
FUNCTIONS AS RETURN VALUES  




*/
//we can think of these functions as function factories. 
//the function itself returns another function. 
//the outer functions are changing a function and returning it so we can use it. 
function makeBetweenFunc(min, max){
    return function (val) {
        return val >= min && val <= max;
    }
}
const inAgeRange = makeBetweenFunc(18, 100);

console.log(inAgeRange(17)); //false
console.log(inAgeRange(68)); //true 

const triple = multiplyBy(3)
triple(5); //15

//this multiplybY FUNCTION returns a new function we can save and use. 

const double = multiplyBy(2); 
double(8); //16

function multiplyBy(num){
    //this is where function expressions come in.
    //we don't have to declare a seperare function first and then declare that. 
    //we can write an annonymus function. 
    return function() {
        console.log("BLAH")//Blah Blah
    }
}

function multiplication(num){
    //this function as num set to 3. 
        return function (x) {
        return x * num;
    }
}
const byThrees = multiplication(3);
console.log(byThrees(5)); //15
const doubles = multiplication(2);
console.log(doubles(5));//10
const halve = multiplication(0.5);
console.log(halve(3))//1.5


//we define our function, that takes two numbers.

function makeBetweenFunc(min, max) {
//it needs to return a function that accepts a number(val). 
//we want to compair that value to min and max. 
//if val is between min and max true else false. 
    return function (val) {
        return val >= min && val<= max;
//this is a boolean expression, it returns either true or false. 
    }
}
//FUNCTION 1  
const inRange = makeBetweenFunc(18, 100); 
//in this function anyone under 18 is false 
inRange(17); //false
//anyone between 18 and 100 is true. 
inRange(68); //true
//FUNCTION 2 
const isChild = makeBetweenFunc(0, 18)
//in the function isChild is true between 0 and 18
console.log(isChild(5)); //true
//isChild is false if greater than 18. 
console.log(isChild(60)); //false 
//FUNCTION 3 
const isNiceWeather = makeBetweenFunc(20, 25)
console.log(isNiceWeather(24))//true
console.log(isNiceWeather(35))//false

//we are making a factory for functions that serve to check is a value is between one number and another number.
//All of our functions have been altered slightly to be different. 



/*
CALLBACK FUNCTIONS 

Callback functions are a function passed into another function as an argument, 
which is then invoked inside the outer function.

function callTwice(func) {
    func();
    func();
}
//we have another function laugh. 
function laugh() {
    console.log("HAHAHAHAHAHAAHAHAHAH");
}
//if we call the function callTwine and laugh, we print out laugh twice. 
console.log(callTwice(laugh));
//on the above line, where we called laugh is the callback function. 
//it is called within the outer function callTwice. 

Anytime we pass a function to another function and its excuded within that function we call this a callback.
Callbacks are very common in javascript. 
heaps of the built in method expect a callback function.
Often we use an anoynomus function when we are using callbacks

*/
/*
function grumpus() {
    alert("GAHHH GO AWAY!")
}


//setTimeout is an inbuilt function in Javascript. 
//It runs a block of code, after a certain number of seconds
//the first argument we need to pass it is an argument. 
setTimeout(grumpus, 5000)
//after 5 seconds, we get an alert.
//setTimeout recieves a function and a number of milliseconds. 
//we can also do this inline using an annonymus function. 
setTimeout(function(){
    alert("WELCOME");
}, 5000); 
//this annyonmous function is good when we don't want to use a function again. 
//It will send an alert in 5 seconds like the first example. 
*/

/*
HOISTING 

Hoisting is a weird bit of javascript. It is not critical, we don't need to stress about it. 

*/
var animal = "tapir";
console.log(animal);//tapir

console.log(animal);
var animal = "tapir"; //undefined - why it's undefined this is the result of hositing. 
//when js interpretes our code it hoists up our variable declaration. 
//it's esentially doing the following
var animal;
animal = "tapir"
console.log(animal); //tapir
//we just need to make sure we are delcaring our variables before we use them.

let shrimp = "Shrimp"; 
console.log(shrimp)//"Shrimp"

console.log(shrimp);
let shrimp = "Shrimp" //reference error: cannot access 'shrimp' before initialization. 
//unlike with var, let is not hoisted. This is one of the main reasons we use let. 
//LET IS NOT HOISTED/CONST HAS THE SAME BEHAVIOUR AS LET, IT IS NOT HOISTED.

howl(); //AWWWWOOO
//this works, so our function delcarations are hoisted! 
//we can think of our function declarations as going to the top of our file. 

function howl() {
    console.log("AWWWWOOO"); 
}
//if we write out function using a function expression, it will not work. 
hoot()
var hoot = function() {
    console.log("HOOOO HOOOO")
}
//this doesn't work. While the variable is hoisted, the value is not! 





/*




*/