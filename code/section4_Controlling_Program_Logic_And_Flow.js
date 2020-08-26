//alert("its working!");

/*
GOALS OF THIS SECTION 

understanding comparison operators
write conditional statements.
work with boolean operators.

*/ 
/*
COMPARISON OPERATORS.

> greater than
> less than
>= greater than or equal to 
<= less than or equal to 
== equality 
!= not equal
=== strict equality 
!== stict non-equality 
*/ 
/*
DOUBLE EQUALS == 

== (equality operator)

the equality operator checks for equality of value, but not equality of type.
It coerces both values to the same type and then compares them. 
This can lead to some unexpected results!
*/ 
/*
TRIPLE EQUALS ===

=== (strict equality operator)

Checks for EQUALITY of VALUE AND TYPE! 
It is more precise and specific than the equality operator.
FOR THE VAST MAJORITY OF TIME, WE SHOULD USE TRIPLE EQUALS! 

*/ 
/*
NON EQUALITY (!=) AND NON-STRICT EQUALITY (!==)

For the same reason we use the strict equality operator,
we should use the strict non-equality operator (!==)

*/ 
/*
CONDITIONAL STATEMENTS 

IF STATEMENTS

IF - Runs code if a given condition is true 
*/
//example 1 
if (1 === 1){
    console.log("It's True");
};

//This if statement would be evaluated to true. 

let rating = 3; 
//example 2 
if(rating === 3) {
    console.log("You are a superstar!");
}
//example 3 
if(rating < 3) {
    console.log("You are not a superstar!");
}
// example 4 
let num = 37; 
if(num % 2 !== 0){
    console.log("ODD NUMBER!");
}

/*
ELSE IF STATEMENTS AND ELSE STATEMENTS 

If not the first thing, maybe this other thing? 

*/

//example 1 

//Peformance Review 
//3 - superstar
//2 - meets expectations
//1 - needs improvement 
// - anything else wtf? 

let employerRating = 2; 

if(employerRating === 3){
    console.log("You are a superstar!");
}
else if(employerRating === 2) {
    console.log("meets expectations")
}
else if (employerRating === 1) {
    console.log("Needs improvement!")
}
else {
    console.log("Not a valid rating!")
};

//While if and else both require a condition to be put within parentheses(), with an else statement this is not the case. 

//EXAMPLE 2 

let highScore = 1430; 
let userScore = 1200; 

if(userScore > highScore) {
    console.log(`Congrads, you have the new high score of ${userScore}`);
    highScore = userScore;
}
else {
    console.log(`Good Game, your score of ${userScore} did not beat the high score of ${highScore}`)
}

/*
NESTING CONDITIONALS 

We can nest conditionals inside conditionals. 

We can use nesting to see if multiple conditions are true. 

We can add in additional else if statements within our original if and else statements. 

There is nothing wrong with nesting, but there are better ways to do conditionals!
*/
//example 1 

let password = "cat dog";
if (password.length >= 6) {
    if (password.indexOf(" ") !== -1) {
        console.log("Password cannot include spaces"); 
    }
    else {
        console.log("Valid Password!")
    }
}
else {
    console.log("Password too short!")
};

/*
TRUTHY AND FALSY VALUES 

All Values have an inherent truthy or falsy boolean value! 

Falsy Values 

false 
0
"" (empty string)
null
undefined
Nan

everything else is truthy! 
*/ 
//example 1 
let mystery = 5; 
    if(mystery){
        console.log("Truthy");
}
    else {
        console.log("Falsy");
}
//example 2 

let loggedInUser = true;
    if(loggedInUser){
        console.log("You are logged in");
}
    else{
        console.log("Please log in");
}

/*
LOGICAL OPERATORS  

&& - AND - And is when both sides must be true in order for the whole thing to be true. 
|| - OR - uses the pipe character. If one side is true, it will evaluate the whole thing as true.
! - NOT 
*/

/*
Examples of AND && OPERATOR 
1 <= 4 && "a" === "a"; true
9 > 10 && 9 >= 9; false 
"abc".length === 3 && 1+1 === 4; false 
*/
//example 1
let passwords = "chickenGal"; 

if(passwords.length >= 8 && passwords.indexOf(" ") === -1) {
    console.log("VALID PASSWORD")
}
else {
    console.log("INVALID PASSWORD")
}

let nums = 3;

//example 2 

if(nums >= 1 && nums <= 10) {
    console.log("number is between 1 and 10")
}
else {
    console.log("please guess a number between 1 and 10!")
};

/*
EXAMPLES OF OR || OPERATOR

1 !== 1 || 10 === 10; true 
10/2 == 5 || null; true 
0 || undefined; false 

*/

//example 1 of OR operator 

let age = 76; 

    if(age < 6 || age >= 65) {
        console.log("You get in for free")
}
    else {
        console.log("YOU MUST PAY!")
}

//example 2 of OR operator 

//purple orchid violet 

let color = "violet";
    if(color === "purple" || color === "violet" || color === "lilac") {
        console.log("GREAT CHOICE!")
}

/*
EXAMPLES OF NOT OPERATOR ! 

!null; = true 
! (0 === 0) = false 
! (3 <= 4) = false 
*/

//example 1 of NOT operator 

//we can use NOT if we are just checking for one condition.

let isUserLoggedIn; 
    if (!isUserLoggedIn){
        console.log("Get out of here!");
}

//example 2 

let flavor = "grape"; 
    if(flavor !== "grape" || flavor !== "cherry") {
        console.log("we don't have that flavour!")
    }
//example 3 - We can write this a diffrent way 

let flavours = "watermelon"; 
    if(!(flavours === "grape" || flavours === "cherry")) {
        console.log("we only have grape and cherry!")
    }

/*
OPERATOR PRECEDENCE 

! has a higher precedence than && and || 
&& has higher precedence than || 
This can be altered through the use of parenthisis.

*/

//example 1 

let x = 7; 
x == 7 || x === 3 && x > 10; 
//this evaluates to true! 
//This is because of the order of precedence. 
//In order to make this code run the way we think it should, we would use parenthisis. 

//example 2 

//lets x = 7;
//(x == 7 || x === 3) && x > 10;
//this evaluates to false! 
//adding in parenthisis is a sure fire way to avoid the problems in the first exercise.

/*
SWITCH STATEMENTS 


*/

let day = 3; 

if(day === 1) {
    console.log("MONDAY");
}
else if (day == 2) {
    console.log("Tuesday");
}
else if (day === 3) {
    console.log("Wedensday");
}
else {
    console.log("INVALID STATEMENT");
};

//WE CAN USE A SWITCH STATEMENT TO MAKE THIS EASIER, FOR EXAMPLE 

//let day = 3; 
switch (day){
    case 1: 
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wedensday");
        break;
    default:
        console.log("Invalid Day");
}

/*
TERNARY OPERATOR

This is a way of taking an if and an else and making into a single line of code. 

condition (?) iftrue : iffalse : 

for example,

*/

let numbers = 8; 

if (numbers === 8) {
    console.log("lucky"); 
}
else {
    console.log("unlucky")
}

//The same code can be written as a single line. 

numbers === 7 ? console.log("lucky") : console.log("unlucky");

//example 2 
/*

let status = "offline";

let color; 
    if(status === "offline") {
        color = "red";
    }
    else {
        color = "green";
    };

*/
//This is the same as the code above! 
let status = "offline";

let colours = status === "offline" ? "red" : "green";
