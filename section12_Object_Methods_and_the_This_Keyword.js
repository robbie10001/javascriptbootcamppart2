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

We can add functions as properties on objects! We call this methods!
The reason we do this, firstly, is to group functions together, and put functions into cohesieve units. 
When we define a function on it's own and add in an object, and call it with the dot notation we are creating a method! 

*/ 



const adder = {
    multiply: function(x,y) {
        return x * y;
    },
    divide : function(x, y) {
        return x/y; 
    },
};
//we define an object. 
//and we can add functions in! 
const maths = {
    adder

}
console.log(maths)//{ adder:{ multiply: [Function: multiply], divide: [Function: divide], square: [Function: square] } }

//normally, what we do is something like this. 

//we create an object 
const mathematics = { 
//our object has two functions. 
//function 1 = add. (because it's in an object, it's really method 1)
    add: function(x, y) {
        return x + y;
    },
//function 2= multiply. (because it's in an object, it's really method 2)
    multiply: function(x,y) {
        return x * y; 
    }
};
//we then print out the results of our adder function 
console.log(mathematics.add(5,6))//11
//we then print out the results of our multiply function
console.log(mathematics.multiply(5,6))//30

//This is a nice way of grouping functions together, by putting them in an object. 
//This puts them in a container, which is better than having a bunch of functions just floating around, we now have a math object with our functions in it. 
//when we add a function is a property in a object, we call it a method. 
/*
Method Shorthand Syntax

We can use an arrow function although this is not that common. 
In addition, there is a nice new short hand for adding a method to an object, where we don't have to use the key value pair syntax. 
 
*/
console.log("------break-----")

const matho = {
    blah: "Hi!",
    add(x,y) {
        return x + y; 
    },
    multiply(x,y) {
        return x * y;
    }
}
 
//console.log(matho.blah(''))
console.log(matho.add(50, 60))//110
console.log(matho.multiply(50, 60))//3000

const auth = {
    username: "TommyBoy",
//login is the key, and the function is the value that corresponds to it.
    login(){
        console.log("You are logged in")
    },
    logout(){
        console.log("Goodbye")
    }
}
console.log(auth)//{ username: 'TommyBoy', login: [Function: login], logout: [Function: logout] }
console.log(auth.username)//TommyBoy
console.log(auth.login())//You are logged in
console.log(auth.logout())//Goodbye

/*
Intro to keyword THIS 

This - The keyword this can be a major point of confusion and misery and hardship, 
and general suffering in the life of a new JS developer. 

This- is one of the keys to writting useful methods on our objects. 

This- is also pretty useful once we get to DOM manipulation. 
When we do things like add events, or click events and the like. 

In reality, this is not that bad. What is tricky, is that sometimes the value may seem unpridictable. 

There are a set of concrete rules that dictate, what the value of THIS is. 

THIS is a keyword. It's a reference to the current execusions scope. It returns an object.

Depending on the scope and the rules of how THIS works, that object changes. 

It could be a reference to the global scope for example. 

*/ 
console.log("----break----")

function sayHi() {
    console.log("Hi")
    console.log(this);

};

sayHi()
//when we call this function we get "Hi", and we also get a bunch of stuff from our console.log(this)
//This, returns an object [global] with node, [window] within the broswer. 
//the [window],  is the global scope in the browser. 
//when we define a function, it looks like it is floating on its own, but it is actually created as method on the [window] object (global scope of our browser)

//this inside of a function, normally refers to the [window]. In node, it's the global object. 
//remember that this can change, so it does depend on how it is called. 

//the window/global contains all sorts of properties. Things like alert("lol").
//However, it is a property of the window. So we could call it like the following window.alert("lol")

//When we declare a variable with var, that variable is added to the window. 
//var color = "teal"; 
//so we could reference it as the follows. 
//window.color
//however, this does not work with let or const, they are not added to the global scope. 

const greet = function() {
    console.log(this); 
}
//in this example, we are still calling globally (the window)

//This is a reference to an object, and that object represents the current object scope. 

/*
Using THIS in methods 

Now we are going to see where THIS becomes far more useful.


*/ 

console.log("-----break-----")
//We create an object
const persons = {
//this object has the key value pairs. 
    first: "Robbie", 
    last: "Colborne",
    nickName: "Bigdog",
//we add a method to the object. 
//we can use either the shorthand or the longer way to define the method. 
    fullName() {
        console.log(this);//{ first: 'Robbie', last: 'Colborne', nickName: 'Bigdog', fullName: [Function: fullName] }
//This type we are not getting the [window]. Instead we are getting something else. 
//The value of this is the persons object itself. The value of this has been set to a different object, but the method it's inside of. 

//it is useful, because it allows us to reference the properties or other methods for example, 
        console.log(this.first)//Robbie
//THIS is a reference to the object, dot first will give us the value. 
        console.log(`${this.first} ${this.last} AKA ${this.nickName}`)//Robbie Colborne AKA Bigdog
//This is a good spot for us to use destructuring. 
        const {first, last, nickName} = this;
        return (`${first} ${last} AKA ${nickName}`)//Robbie Colborne AKA Bigdog
//let's not change the value of nickName. 
       
//Now we have the ability to right a method that is aware of the object it lives in, 
//this means we can use objects not just to store different methods because they are related, 
//now we have a way of interacting with properties, values or even different methods. 
//our object can now be its own little self contained world! 
  
    },
    printBio() {
        const fullName = this.fullName();
        console.log(`${fullName} is a person!`)
    }
}
persons.fullName()

/*
THIS: Invocation Context

The value of THIS depends on the invocation context of the function it is used in. 

We have seen two different values for THIS so far. 
1. We have seen that in a regular old function, THIS refers to the global state.
2. When we use THIS inside a method, its a way of accessing the parent object. The object the method is located in. 

However, this is not always the case. The value of THIS depends on the inovcation context of the function its use in.
This means, the value will change depending on how the function is actually executed. NOT JUST WHERE YOU WRITE IT. 
It depends how we call it! 
THIS is a bit of a shape shifter in some ways! 

//generally, when we call the THIS method, we are going to be using the dot syntax. 

//When we write an arrow function, arrow functions do not get there own version of THIS. 
//the value of THIS is not going to change! 
//generally, we don't write methods usings arrow functions! 


//The value of THIS is not set in stone, soley based on where we write it.

*/ 
console.log("----break----")



const personality = {
    first: "Bruce", 
    last: "McClure", 
    nickName: "Brucy Boy",
    fullName(){
//in a method, this refers to the object the method "lives" in:
        const {
            first, 
            last, 
            nickName
        } = this;
        console.log(`${first} ${last} AKA ${nickName}`);
    },
    printBio() {
        console.log(this)
        const fullName = this.fullName();
        console.log(`${fullName} is a person!`)
       
    }
}
console.log(person.printBio)
const printBio = person.printBio; 

//




/*
Annoyomatic DEMO

*/ 


/*
Putting It All Together: Deck of Cards 

*/


/*
Creating A Deck Factory 

*/


