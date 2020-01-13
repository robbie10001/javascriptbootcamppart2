/*
GOALS FOR THE SECTION

Use the new arrow function syntax
Understand and user the following methods
forEach
map
filter
find
reduce
some
every
*/ 

/*
INTRODUCTION TO ARRAY CALLBACK METHODS

In this section we are going to look at some of the most useful methods that expect us to put a function in.
This section is focused on array methods that expect a callback. 
Arrays come with many built-in methods that accept callback functions.
Now that we've covered callbacks, we can learn these methods. They are super useful! 
The general pattern here is that we are going to run a function once per element in each array. 
each method will have different goals. 
The methods we see here are going to be used all the time. 
*/ 

/*
FOREACH

For each accepts a callback function and call the function once per element in the array. 
When we don't want to repeat a function we can use a annonymous function!
*/ 
//we create an array
const numberz = [9, 8, 7, 6, 5, 4, 3, 2, 1];
//accepts a callback it accepts a function and it calls it on every element in a given array. 
//we are using an annoynoums function expression, they are just one time things that we are trying to do.
numberz.forEach(function (n) {
//we are using an annoynoums function expression, they are just one time things that we are trying to do. 
    console.log(n * n) //81, 64, 49, 36, 25, 16, 4, 2, 1
});
//we are using an annoynoums function expression, they are just one time things that we are trying to do.
numberz.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)// 8,6,4,2
    }
});


//we create an array called didgets
const didgets = [20, 21, 22, 23, 24, 25, 26, 27];
//if we call the forEach method on our array we need to add a function with a paramater.
//we can name this whatever we want, but this is going to store one element at a time(20, 21, 22 for example)
//the first iteration will call the function and pass through the value of 20. 
//the second interation will call the function and pass through the value of 21...and so on. 
didgets.forEach(function(i){
    console.log(i); //20, 21, 22, 23, 24, 25, 26, 27
    console.log(i * 2)//40, 42, 44, 46, 48, 50, 52, 54


})
console.log("------break------")

function getMeTriples(n) {
    console.log(n * 3)
}
console.log(numberz.forEach(getMeTriples));//27, 24, 21, 18, 15, 12, 9, 6, 3, undefined. 

console.log("--------break--------")

const books = [{
    title: "good omens",
    authors: ["terry pratchett", "neil gaiman"], 
    rating: 4.25
},
{
    title: "Bone",
    authors: ["jeff smith"],
    rating: 4.42
},
{
    title: "American Gods",
    authors: ["neil gaiman"],
    rating: 4.11
},
{
    title: "A gentleman in moscow",
    authors: ["Amor towles"],
    rating: 4.36
}
]
//forEach passes through each element, in this case our element is an object. 
//we can then do whatever we want a console.log
//we are calling a function here! Which is why this is different to using a for of loop.
books.forEach(function(book){
    console.log(book.title.toUpperCase())// GOOD OMENS, BONES, AMERICAN GODS, A GENTLEMAN IN MOSCOW
})

//we can also add a second paramater to our callback function if we want to by using the index. 
numberz.forEach(function(num, index){
    console.log(index, num)//0 9, 1 8, 2 7, 3 6, 4 5, 5 4, 6 3, 7 2, 8 1,
})

/*
MAP 

Creates a new array with the results of calling a callback on every element in the array. 
It can be used to take bits of an array or do other cool things with an array. 

*/ 
//we create an array called texts which contains 4 string elements. 
const texts = ["rofl", "lol", "omg", "ttyl"]; 
//we then define a variable called caps. 
//we then call texts.map and pass a callback function in with he paramater of t, which represents each element in the string.
//we are returning from the function t. toUpperCase. 
//What this map does overall is it creates a new array, in which we store the new information in (caps).
//we are not alterating the original array, we have instead made a new array. 
const caps = texts.map(function (t) {
    return t.toUpperCase();
})
console.log(texts);//[ 'rofl', 'lol', 'omg', 'ttyl' ]
console.log(caps);//[ 'ROFL', 'LOL', 'OMG', 'TTYL' ]

const themNumbers = [20, 21, 22, 23, 24, 25, 26, 27];
const themWords = ["asap", "byob", "rsvp", "diy"];

//we are usingan annonymous function because we don't need to save the function.
//the callback paramatr we are going to use is num, in represents each number. 
//this function need to return a value, otherwise map will not work.
const doublez = themNumbers.map(function(num){
//this function need to return a value, otherwise map will not work.
    return num * 2;
})

console.log(doublez)//[ 40, 42, 44, 46, 48, 50, 52, 54 ]

const thoseNumbers = [20, 21, 22, 23, 24, 25, 26, 27];

const doubleUp = thoseNumbers.map(function (num){
    return num * 2;
});

const numDetail = thoseNumbers.map(function(n){
    return {
        value: n,
        isEven: n % 2 === 0 
    }
})

console.log(numDetail)//{ value: 20, isEven: true },{ value: 21, isEven: false },{ value: 22, isEven: true }, { value: 23, isEven: false },
//and so on! 

const thoseWords = ["asap", "byob", "rsvp", "diy"];

const abbrevs = thoseWords.map(function (word){
    return word.toUpperCase().split("").join(".")//[ 'A.S.A.P', 'B.Y.O.B', 'R.S.V.P', 'D.I.Y' ]
   
})
console.log(abbrevs)


/*
ARROW FUNCTIONS INTRO

Arrow functions are a syntactically compact alternative to a regular function expression. 
Arrow functions are not only syntactically different. 
They also function differently when using the keyword .this 
Although besides this, they are just a faster way to write functions. 
paranthesis ae option if they's only one argument.
We use empty paranethisis if we have a function with no arguments. 

*/ 
//we define a function 
//we use the equal sign.
//we pass in our paramater. 
//we then make a  fat arrow
//we then pass in our argument. 
const squarerer = (x) => {
    return x * x; 
}

const sumers = (x, y) => {
    return x + y;
}

const squarerered = x => {
    return x * x; 
}


/*
ARROW FUNCTIONS: IMPLICIT RETURNS


*/ 

/*
ARRAY.FIND


*/ 

/*
FILTER


*/ 

/*
SOME AND EVERY


*/ 

/*
REVISITING SORT!


*/ 

/*
REDUCE INTRO


*/ 

/*
REDUCE PART 2 


*/ 

/*
EVEN MORE REDUCE! 


*/ 

/*


*/ 
