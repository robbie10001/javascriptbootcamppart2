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

function getMeTriples(n) {
    console.log(n * 3)
}
console.log(numberz.forEach(getMeTriples));//27, 24, 21, 18, 15, 12, 9, 6, 3, undefined. 


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
//we define a function, we use the equal sign, we pass in our paramater,
//we then make a  fat arrow, we then pass in our argument. 
const squarerer = (x) => {
    return x * x; 
}

const sumers = (x, y) => {
    return x + y;
}
//if we have one paramater we can leave the square brackets off. 
const squarerered = x => {
    return x * x; 
}
//if we have no paramatersarr 
const squarerereded = () => {
    return x * x; 
}

/*
ARROW FUNCTIONS: IMPLICIT RETURNS

There is an even more compact way to write arrow functions. 
This is through implicit return 
Arrow functions are just a shorter version of a regular function expression. 
They are just more compact, even though they have the same functionality. 

ALL THESE FUNCTIONS DO EXACTLY THE SAME THING JUST WITH DIFFERENT SYNTAX.

*/ 
 



//REGULAR FUNCTION EXPRESSION
const isEven = function (num) {
    return num % 2 === 0;
}
//ARROW FUNCTION WITH PARENS AROUND PARAMS. 
const isEven = (num) => {
    return num % 2 === 0;
}
//NO PARENTS AROUND PARAMS. 
const isEven = num => {
    return num % 2 === 0;
}
//IMPLICIT RETURN 
const isEven = num => {
    num % 2 === 0;
//In this example, we are just returning one argument. 
//In this case, we can avoid using the return keyword. 
}
//ONE-LINER IMPLICIT RETURN 
const isEven = num => num % 2 === 0; 
//one-liners are really a use case. 
//in this example again, we don't need the return keyword. 
//we should only use this syntax on short functions WITH single arguments.
//if we have multiple statements javascript will not allow us to use implicit return. 
//we can have multiple things that javascript could potentially return. 

const numberers = [1, 2, 3, 4, 5, 6, 7, 8]; 

const doubles1 = nums.map(function (n){
    return n * 2 
})

const doubles2 = nums.map(n => {
    return n * 2;
})

const doubles3 = nums.map(n => n * 2);




/*
ARRAY.FIND

Returns the value of the first element in the array that satisfies the provided testing function. 

*/ 
console.log("----------break---------")


let movies = [
    "stargate", 
    "firefly",
    "the tudors",
    "game of thrones"
]

//the includes method returns boolean values to see if our array contains a given element. 
//find ends by default when a first match is found. 

const movie = movies.find(movie => {
    console.log(movie.includes("the"))//false, false, true, false
    return movies.includes("the");
})

movie 

const bookers = [{
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

const goodBook = bookers.find(b => b.rating >= 4.3);
console.log(goodBook)//{ title: 'Bone', authors: [ 'jeff smith' ], rating: 4.42 }


/*
FILTER
filer is another array method that expects a callback function.
Filter creates a new array with all elements that pass the test implemented by the provided function. 
Filter allows us to filter out subsets of arrays. 
Bascially, we pass in a test function that is either true or false. 
if an element passes that function, it will be passed to the return array.
It doesn't change the original array, we are making a copy with our filtered elements. 

*/ 
const numBer = [9, 8, 7, 6, 5, 4, 3, 2, 1,]

const odder = numBer.filter(n => {
    return n % 2 === 1; //out callback returns true or false. 
//if it returns true, n is added to the filtered array. 
})
console.log(odder); //[9, 7, 5, 3, 1]

const smallNumberz = numBer.filter(n => n < 5); 
console.log(smallNumberz); //[4,3,2,1]

const nums = [34, 35, 67, 54, 109, 102, 32, 9];

//this num filter basically checks if a number is odd. 
const odders = nums.filter(n => n % 2 === 1)
console.log(odders);//[ 35, 67, 109, 9 ]
const evenz = nums.filter(n => n % 2 === 0)
//this method filter out only the even numbers. 
console.log(evenz);//[ 34, 54, 102, 32 ]
const bigNumz = nums.filter(n => n > 50);
//this method filters out any number that is smaller than 50
console.log(bigNumz);//[ 67, 54, 109, 102 ]


/*
SOME AND EVERY
both of the these methods return a boolean true of false. 
Every- tests whether all ements in the array pass the provided function. It returns a boolean value. 
Some- similar to every, but returns true if ANY of the array elements pass the test function. 
*/ 
const animalz = ["dog", "cat", "fish", "pig"]
//every element within the function must return true for the function to return true. 
const isItThree = animalz.every(animalz => animalz.length === 3);
console.log(isItThree); //false
const isItThree1 = animalz.every(animalz => animalz.length > 2);
console.log(isItThree1); //true 
const isAllLastWordAG = animalz.every(word => {
    const last = word.length -1; 
    console.log([last] === 'g'); //false 
})

console.log("---------break---------")
//Some only cares if any element of the array returns true. 
const animalWords = ["dog", "cat", "fish", "pig"]
//are there any words longer than four characters? 
animalWords.some(word => {
    return word.length > 4; //false 
});
console.log("---------break---------")
//are thre any words that are longer than 3 characters?
animalWords.some(word => {
    return word.length > 3; //true
});

const allEndInG = animalWords.every(word => {
    const last = animalWords.length - 1;
    return word[last] === "g"
    
});

const someStartWithD = animalWords.some(word => animalWords[0] === "d"); 

console.log("----------break--------")
/*
REVISITING SORT!
The default behaviour for sort, without any arguments is for sort to create a string of all our array elements and then sort them that way. 

In order to customise the behaviour of sort we use compare functions. 
These functions have two parameters, and we return a value from the compareFunc function. 

if compareFunction(a, b) returns less than 0 - sort before b 
if compareFunction(a, b) returns 0- leave a and b unchanged with respect to each other.
if compareFunction(a, b) returnsreturns greater than 0- sort b before a 
*/ 
const prices = [1, 10, 23, 34, 12, 100];
console.log(prices.sort()) //[ 1, 10, 100, 12, 23, 34 ]

//here we are sorting from smallest to largest. 
const prices1 = prices.sort((a,b) => a - b);
console.log(prices1)//[ 1, 10, 12, 23, 34, 100 ]
//a = 1
//b = 10 
// (1)a - (10)b = -9, therefore we sort a before b. 
//a = 34
//b = 12 
//34(a) - 12(b) = 22, therefore we sort b before a.
//if we have equal numbers that order between these numbers stay the same. 

//here we are sorting from largest to smallest! 
const prices2 = prices.sort((a,b) => b - a);
console.log(prices2)//[ 100, 34, 23, 12, 10, 1 ]


/*
REDUCE INTRO

Reduce is a build in array method, we pass a call back to it, let we have done with all our other array methods. 
Reduce is a bit different. It is very useful and versitile, although it's a little tricky to explain. 
Reduce is something i need to practice in order to get good at it. 

Reduce takes an array of values and reduces it down to a single value. 
Reduce executes a reducer function on each element of the array, resulting in a single value. 
Each element is combined and reduced down to a single element. 
An application for the reduce method is summing an array for example. 
We could use reducer to find the maximum value in an array. 
Or reduce an array from 100 numbers down to a single maximum. 
It could be used to tally data within an array 
We are taking a bunch of values and reducing this down to a single value. 


*/ 
console.log("------break------");

let reducings = [3, 5, 7, 9, 11]
//the reduce method is callback with at least two paramaters. 
//the first paramater (accumlator) stores the end result of the reduce method. 
//the second paramater (currentValues), represents each element in the array as reduce works through the array. 
//in our example we are going to just sum all values in our array. 
reducings.reduce((accumlator, currentValues) => {
    console.log(accumlator + currentValues) //8, 15, 24, 35
    //First call= (accumlator =3+ currentValue =5) 8,Second Call = (3  + 5 + 7)15, Third call= (3  + 5 + 7 + 9) 24, Fourth call = (3  + 5 + 7 + 9 + 11)35 
    return accumlator + currentValues; 
});
console.log("-------break--------")
const numeringz = [3, 4, 5, 6, 7];
const product = numeringz.reduce((total, currentVal) => {
    console.log(total * currentVal)//12, 60, 360, 2520
    //3x4x5x6x7 = 2520
    return total * currentVal
    
});

/*
REDUCE PART 2 
We have seen reduced used in a simple way, however we can use reduce in more complex ways. 
We can use REDUCE to find the maximum value in an array. 
We can use REDUCE not only to multiply, or sum things together, but to keep track of some piece of data! 
We can pass in an initial value, as the second argument in reduce! 
*/ 

console.log("------break------")
let grades = [89, 56, 43, 54, 95]

let maxGrade = grades.reduce((max, currVal) => {
    if(currVal > max) return currVal; 
        return max; 

})
console.log(maxGrade) //this prints out 95!

let minGrade = grades.reduce((min, currVal) => {
    Math.min(min, currVal)
});
console.log(minGrade)

const summer = [10,20,30,40,50].reduce((sum, currVal) =>{
    return sum + currVal;
}, 1000)

console.log(summer)//this prints out 1150

/*
EVEN MORE REDUCE! 

We can use Reduce to tally up the results of an array. 
We can group different values in an array using an object. 


*/
const votes = ["y", "y", "n", "y", "n", "y", "absent", "abstain"];

const results = votes.reduce((tally, val) => {
    if(tally[val]) {
        tally[val]++
    } else {
        tally[val] = 1;
    }
    return tally 
}, {})

console.log(results)// { y: 4, n: 2, absent: 1, abstain: 1 }
//{}
//{y:1}- first iteration
//{y:2} - second iteration

//WE CAN also write this another wa. 

const electionResult = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally
}, {})
console.log(electionResult);//{ y: 4, n: 2, absent: 1, abstain: 1 }






