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

*/ 


/*
SPREAD IN ARRAY LITERALS  

*/ 



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

