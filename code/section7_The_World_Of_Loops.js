/*
GOALS FOR THIS SECTION

Write for loops 
write while loops
Avoid infinite loops
Iterate over arrays and objects

INTRO TO LOOPS 

Looping is about how we repeat code. 
There are multiple types of loops   for loop, while loop, for...of loop, for...in loop

*/

/*
FOR LOOPS 

There are three seperate pieces to a FOR loop. 
1.Initial value- The main idea is that we define a variable,
2. When to run the loop- We then add a counter which acts to control the duration of the loops
3. How to change value each iteration- What happens to the variable each time we go through the loop

for ([initiaExpression]; [condition]; [incrementExpression]
)


*/
//let is just a variable we have defined within the loop
//stop the loops at 10 
//add i each time 

for(let i = 1; i <= 10; i++){
    console.log("Hello") //Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
};

for(let i = 1; i <= 10; i+= 3){
    console.log(i) //1, 4, 7, 10 
};

for(let num = 1; num <= 5; num++) {
    console.log(`${num}x${num} = ${num * num}`); //1x1 = 1, 2x2 = 4, 3x3 = 9, 4x4 = 16, 5x5 = 25
};
//We can also loop in the other direction by counting backwards

for(let i = 200; i>= 0; i-=25) {
    console.log(i); //200, 175, 150, 125, 100, 75, 50, 25, 0 
}
/*
INFINITE LOOPS 

Infinite loops are something that we want to avoid. 
In general we need to make sure that we are going in the right direction with our loop. For example,
for(let i 100; i >= 0; i--) {
    console.log(i)
}
*/
//this would be an infinite loops, because i will always be bigger than zero. 
/*
for (let i = 20; i >= 0; i+=2) {
    console.log(i);
}
*/

/*
FOR LOOPS AND ARRAYS 

We can use for loops to iterate of an array or a string.
To loop over an array, start at 0 index and continue to the last index (length -1)
  
*/
const animals = [ "lions", "tigers", "bears"];
for (let i = 0; i < animals.length; i ++) {
    console.log(i, animals[i]); //0 "lions" 1 "tigers" 2 "bears"
}

const examScores = [98, 77, 84, 91, 57, 66]; 
for (let i = 0; i < examScores.length; i ++) {
    console.log(examScores[i]) //98, 77, 84, 91, 57, 66 
}

const myStudents = [
    {
        firstName: "Zeus",
        grade: 86
    },
    {
        firstName: "Artemis",
        grade: 97
    },
    {
        firstName: "Hera",
        grade: 72
    },
    {
        firstName: "Appolo",
        grade: 90
    }
];

for(let i = 0; i < myStudents.length; i ++) {
    let student = myStudents[i]; 
    console.log(`${student.firstName} scored ${student.grade}`); //Zeus scored 86, Artemis scored 97, Hera scored 72, Appolo scored 90
};   
const word = "stressed";
for(let i = word.length - 1; i >= 0; i --) {
    console.log(word[i]); //desserts
};

const greekGods = [
    {
        firstName: "Zeus",
        grade: 86
    },
    {
        firstName: "Artemis",
        grade: 97
    },
    {
        firstName: "Hera",
        grade: 72
    },
    {
        firstName: "Appolo",
        grade: 90
    }
];

let total = 0;

for(let i = 0; i < greekGods.length; i++ ) {
    let allStudent = greekGods[i];
    total += allStudent.grade;
}
console.log(total/myStudents.length); //86.25 

/*
NESTED LOOPS 

Just like with conditional statements (such as if)  with can nest loops. 


*/


    for(let i = 1; i <= 10; i++) {
        console.log("Outer Loop:", i); //Outer Loop: 1, Outer Loop: 2, Outer Loop: 3, Outer Loop: 4, Outer Loop: 5, Outer Loop: 6, Outer Loop: 7, Outer Loop: 8, Outer Loop: 9, Outer Loop: 10
    //we can add an inner loop which we can define i in again. This is because they have a different scope.
    //although, it is better practice to use a different variable name. 
        for(let x = 10; x >= 0; x-=2) {
            console.log("Inner Loop:", x) // Inner Loop: 10 Inner Loop: 8 Inner Loop: 6 Inner Loop: 4 Inner Loop: 2 Inner Loop: 0 Outer Loop: 9 Inner Loop: 10 Inner Loop: 8 Inner Loop: 6 Inner Loop: 4 Inner Loop: 2 Inner Loop: 0 Outer Loop: 10
    //What is happening is that everytime we run the outer loop, the inner loop runs its full cycle. 
    //this is not a great example of why we would use nested loops.
    }
}

const gameBoard = [
[4, 32, 8, 4],
[64, 8, 32, 2],
[8, 32, 16, 4],
[2, 8, 4, 2 ]
];

for (let i = 0; i < gameBoard.length; i ++) {
    let row = gameBoard[i]; 
    for (let j = 0; j < row.length; j ++) {
        console.log(row[j]); //4, 32, 8, 4, 64, 8, 32, 2, 8, 32, 16, 4, 2, 8, 4, 2 
          
    }
        //Our outerloop start, then we return 4,32,8,4 in the inner loop. We then continue through the rows. 
    }

/*
INTRO TO WHILE LOOPS 

A while loop continues to run as long as its test condition is true. 
A while loop is more flexible than a for loop in some ways. 



while(SOME CONDITION IS TRUE) {
    RUN THIS CODE 
}

*/
let j = 0;
//this is not the best example of a while loop as it's not good practice to declare the value of a variable outside the loop. 
while(j <= 5){
    console.log(j); //0, 1, 2, 3, 4, 5
    j++; 
}
/*
MORE WHILE LOOPS 
Where a while loop is really usefully, is when we don't know how many times we want the loop to run. 


*/
console.log("--------break--------")

const target = Math.floor(Math.random() * 10);
    console.log(target);//a random number from 1 to 10
let guess = Math.floor(Math.random() * 10);// a random number from 1 to 10 
//while guess is not equal to target
while(guess !== target) {
//we print the guess 
    console.log(guess); //9,3,6,1,5,6
//we then get another random number between 1 and 10
    guess = Math.floor(Math.random() * 10);
}
//we then print out the number and the target when target and guess are the same number.
console.log(`Target: ${target} Guess: ${guess}`) //Target 9 Guess 9

console.log("----------breaker---------")
//while(Some condition)
//in the loop, update or attempt to make that condition false. 

/*
BREAK KEYWORD

We can use the break keyword to finish or end our loops. 
Breaks are uncommon in for loops, this is because we directly control our many times the loop runs.
If we have nested loops, the break keyword will only stop the loop within its scope.  

The use of the while true, method as outlined below is not very explinational. 

*/
//loop forevers
/*
const targets = Math.floor(Math.random() * 10);
    console.log(target);//a random number from 1 to 10
let guesses = Math.floor(Math.random() * 10);
while(true){
    if(targets === guesses) break;
//OUT CONDITION WHICH IS IF TARGET AND GUESS ARE THE SAME WE BREAK, IS HOW WE CONTROL THE FLOW OF THIS LOOP.
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${targets} Guess: ${guesses}`)
console.log("YOU WIN YOUNG FELLA!");
*/

/*
FOR..OF INTRO

A nice and easy way of iterating over arrays. 

//iterable could be an array or string or other datatypes
for(variable of iterable) {
    statement
}

*/

console.log("-----------break--------")
let subreddits = ["soccer", "popheads", "cringe", "books"];
//let = the variable name we are gong to use
//sub of = the length esentially of the subreddits arrays 
//subreddits= the array we want to iterate over. 
for(let sub of subreddits) {
    console.log(sub);//soccer, popheads, cringe, books
}

for(let char of "chockadoodldoo") {
    console.log(char.toUpperCase()); //CBOCKADOODLDOO
}
/*
COMPARING FOR AND FOR...OF 

for (variable of iterable) {
    statement
}

*/
const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

//THE TWO LOOPS ACHIEVE THE SAME GOAL

/*
for(let i = 0; i < magicSquare.length; i ++) {
    let row = magicSquare[i];
    let sum = 0;
    for(let j = 0; j < row.length; j ++) {
        console.log(row[j]);
        sum += row[j];
    }
    console.log(`${row} sumed to ${sum}`) //2,7,6 summed to 15, 9,5,1 summed to 15, 4,3,8 sumed to 15
}
*/

for(let row of magicSquare){
    let sum = 0;
    for(let num of row){
        sum+=num; 
        console.log(`${row} sumed to ${sum}`) 
    }
}

const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "berry"]; 
//for every element as long as it is not longer than the length of words1 loop over.. 
for(let i = 0; i <words1.length; i++) {
    console.log(`${words1[i]}${words2[i]}`) //mailbox, milkshake, bathtub, blackberry
};//print out all the elements with words1 and words2 in each iteration. 

//This would not have been easy to achieve using a a for of loop! 

/*
FOR...OF WITH OBJECTS 


*/
//An object is not iterable. 
//To iterate over an object, we can use a for of loop, and iterate over just the keys and values. 
//we can do these using the method Object.keys in which we pass in an object and returns a list of the keys.
//we also have Object.values which returns the value of the object. 
//If we want both the object and the keys, we can use the keys to access the values in our loops. 


//There are no indecies for these objects, so we can't use a for loop.
//our first option is to use objects.keys(movieReviews) which we can loop over for the values. 
//our second option is object.values(movieReviews)
//
const moviesReview = {
    Arrival: 9.5,
    Alien: 9, 
    "In Burges": 9, 
    Coraline: 7.5 
}
//for each movie with an object key in movieReview
for (let movie of Object.keys(moviesReview)) {
    console.log(movie); //Arrival, Alien, In Burges, Coraline 
//print a list of the movies within moviesReview
}
//for each movie winth an object key in movieReview
for (let movie of Object.keys(moviesReview)) {
//print a list of each movies(movie) and each value for each movie (rating)
    console.log(movie, moviesReview[movie]); //Arrival 9.5, Alien 9, In Burges 9, Coraline 7.5,
}
//define a variable which is equal to the rating of a movie within moviewReview
const rating = Object.values(moviesReview)
//create a variable called totals and set its value to 0
let totals = 0; 
//for every element in rating loop through
for(let r of rating){
//every iteration add the sum of the movie rating to totals. 
    totals += r;
}
//create a variable that is equal to the sum of totals divided by the amount of times we iterated through the ratings variable. 
let average = totals /= rating.length
console.log(average);//8.75
//print out the average of all movie ratings. 

/*
FOR...IN LOOPS 

We can loop over the keys of an object, using Object.keys()
//for (variable in object) {
    statement 
}

A for of loop will iterate over the actual values of an array. 
A for in will loop over the keys (properties) in an object. 
Technically we can use for in with arrays, although there is not often a good idea for us to do this. 
*/

const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleOfTheDecades: 100000
};

for(let prop in jeopardyWinnings) {
//this returns the four keys within our object.
    console.log(prop);//regularPlay, watsonChallenge, tournamentOfChampions, battleOfTheDecade 
    console.log(jeopardyWinnings[prop]);//2522700, 300000, 500000, 100000
};
