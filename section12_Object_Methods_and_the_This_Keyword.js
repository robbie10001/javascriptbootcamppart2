/*
So far we have seen the basic of objects. So far have seen object literals, but there is much more to talk about with objects.
Objects are very central to the way Javascript works, not only as developers but behind the scenes as well. 

GOALS FOR THE SECTION 

- Add methods to objects 
- Use new object Shorthand syntax
- use computed properties 
- Understand protoypes 
- explain how THIS works
*/ 

/*
Shorthand Object Properties 

Shorthand properties, are a new addition to JS (es2015), not supported in internet explorer. 
It is an easy way to create an object literal when we have variables. 
And we want to create a property where the key name is the name of the variable and the value is the value in the variable.  

*/ 
//This is the old way we had to do it. 

//we have a function (getStatistics) that is passed in an array (arr)
const getStatistics = (arr) => {
//and we calculate the max of the array, the min of the array, the sum of the array, and the average of the array. 
    const max = Math.max(...arr);
    const min = Math.min(...arr); 
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum/arr.length; 
//what we want to do, is return an object with all of these stats. 
    return {
        max: max,
        min: min,
        sum: sum,
        avg: avg
    }
}

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5]; 
//when we are calling the function, we are passing through the reviews array. 
const stats = getStatistics(reviews); 
console.log(stats)//{ max: 5, min: 2.8, sum: 26.74, avg: 3.82 }

//WITH THE SHORT HAND SYNTAX, WE CAN WRITE IT AS FOLLOWING. 

const getStatistical = (arr) => {
        const max = Math.max(...arr);
        const min = Math.min(...arr); 
        const sum = arr.reduce((sum, r) => sum + r);
        const avg = sum/arr.length; 
//below is the more simple synatax that we can not implement as of ES2015
//The value is automatically added to our objects. 
        return {
            max, 
            min,
            sum,
            avg
    }
}
const reviewal = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5]; 

const statal = getStatistical(reviewal); 
//we have the exact same output as the first example. 
console.log(statal)//{ max: 5, min: 2.8, sum: 26.74, avg: 3.82 }


/*
Computed Properties 

Computed properties are an improvement, for the object literal syntax. 
We can add a property with a dynamic key. 

*/ 
const role = "host"; 
const person = "James Holland"; 
const role2 = "Director";
const person2= "James Cameron"
//if we try and set our object to host: James Holland using just an object this will not work.
//for example, 
const team = {
    role: person
}
//this will evaluate to the object {role: "James Holland"}
//person is evaluated, while role is not. 
//In the pass to make this a dynamic value, we have done the following. 
const teams = {};
teams[role] = person; 
teams[role2] = person2; 
console.log(teams)//{ host: 'James Holland', Director: 'James Cameron' }
//With the new syntax for computered properties, we can do this all at once. 
//we can use a variable as a key name in an object literal property! 
const teamer = { 
    [role]: person,
    [role2]: person2,
    [1+6+9]: "sixteen", 
};
console.log(teamer)//{ '16': 'sixteen',host: 'James Holland', Director: 'James Cameron' }

//we
function addProp(obj, k, v){
    const copy = {...obj};
    copy[k] = v;
    return copy;//{ role: 'James Holland', happy: ':)' }
}
const res = addProp(team, "happy", ":)")
//we could write this all in one line! 
const addProps = (obj, k, v) => {
    return {
        ...obj, [k]: v 
    }
}
const rest = addProp(team, "happy", ":)")

/*
Adding Methods To Objects 

*/ 


/*
Method Shorthand Syntax


*/
 


/*
Intro to keyword THIS 

*/ 


/*
Using THIS in methods 


*/ 


/*
THIS: Invocation Context

*/ 


/*
Annoyomatic DEMO

*/ 


/*
Putting It All Together: Deck of Cards 

*/


/*
Creating A Deck Factory 

*/


