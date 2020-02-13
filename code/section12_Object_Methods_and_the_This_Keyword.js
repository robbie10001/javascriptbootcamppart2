console.log("\n", "\n", "\n", "LET'S DO IT", "\n", "\n", "\n", )

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

console.log("THE START OF THIS!")
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
console.log("SAYHI!")

function sayHi() {
    console.log("Hi")//Hi 
    //console.log(this);//our sayHi function returns a global value for this! 

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

console.log("--greet---")

const greet = function() {
    //console.log(this);//once again, our greet function returns a global value! 
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

console.log("----PERSONALITY!----")

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
        console.log(`${first} ${last} AKA ${nickName}`); //Bruce McClure AKA Brucy Boy
//without a return, our factory(method) will not be producing anything! 
        return `${first} ${last}`
    },
    printBio() {
        console.log(this)//{ first: 'Bruce', last: 'McClure', nickName: 'Brucy Boy', fullName: [Function: fullName], printBio: [Function: printBio] }
        console.log(this.fullName())//Bruce McClure AKA Brucy Boy
        const answer = this.fullName()
        console.log(answer)//Bruce McClure
        console.log(`${answer} is a person!`)//Bruce McClure is a person! 
    }
}
personality.fullName()
personality.printBio()

console.log("---ANNOYER!---")

//console.log(personality.printBio())


//

/*
Annoyomatic DEMO

We are going to talk more about arrow functions and THIS. 



*/ 

//we create an object 
const annoyer = {
    //within this object we have an array (phrases) which contain a number of different values.
        phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
    //within the parent object, we also create a method. 
        pickPhrase() {
    //we use distructuring to get this.phrases as phrases. 
            const {phrases} = this;
    //when then create a variable (idx) which goes through each element of our phrases object and picks one at random.
            const idx = Math.floor(Math.random() * phrases.length);
    //we then console.log a random element of the phrases object. 
            console.log(phrases[idx])//iteration 1: YOLO, //iteration 2: literally, //iteration 3: Can't stop won't stop
            return (phrases[idx])
        },
    
        start() {
            console.log(this.pickPhrase())
            setInterval(function() {
                console.log("Not dry code!")//every three seconds,  "not dry code" is run in the console. 
            }, 3000)
        }
    }
    
    annoyer.pickPhrase()
    annoyer.start()
    
    
    /*
    const annoyers = {
    
            phraser: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
            pickPhraser() {
                const {phraser} = this;
                const idx = Math.floor(Math.random() * phraser.length);
                console.log(phraser[idx])
            },
        
            starter() {
                setInterval(function() {
      //HOWEVER, IF WE TRY AND CALL THIS.PICKPHRASE(), WITHIN OUR SETINTERVAL FUNCTION, EVERYTHING BREAKS! 
      //WE GET A TYPEERROR: THIS.PICKPHRASE IS NOT A FUNCTION.
      //This is because within our function the value of THIS is set globally!. 
      //The question becomes, why in the previous example, THIS is set to the object, whereas within the setInterval function it is set globally?
      //the answer is that THIS changes depends upon where its called! 
    
      //we are executing starter  by ourselves as a method. annoyer.start()
      //however, the setInterval function is not being called by us. Instead its is being called by setInterval itself every three seconds. 
      //the meaning here is that THIS is set globally as a result! 
      //All of this has been setup to talk about arrow functions. 
                    console.log(this.pickPhraser()) //typeerror: this.pickPhraser() is not a function! 
                }, 3000)
            }
        };
    
        annoyers.pickPhraser()
        annoyers.starter()
    */
    
    /*
    
        const annoying = {
    
            phrasing: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
            pickPhrasing() {
                const {phrasing} = this;
                const idx = Math.floor(Math.random() * phrasing.length);
                console.log(phrasing[idx])
            },
        
            starting() {
                setInterval(function() {
      //HOWEVER, IF WE TRY AND CALL THIS.PICKPHRASE(), WITHIN OUR SETINTERVAL FUNCTION, EVERYTHING BREAKS! 
      //WE GET A TYPEERROR: THIS.PICKPHRASE IS NOT A FUNCTION.
      //This is because within our function the value of THIS is set globally!. 
      //The question becomes, why in the previous example, THIS is set to the object, whereas within the setInterval function it is set globally?
      //the answer is that THIS changes depends upon where its called! 
    
      //we are executing start by ourselves as a method. annoyer.start()
      //however, the setInterval function is not being called by us. Instead its is being called by setInterval itself every three seconds. 
      //the meaning here is that THIS is set globally as a result! 
      //All of this has been setup to talk about arrow functions. 
                    console.log(this.pickPhrase())
                }, 3000)
            }
        };
    
        annoying.pickPhrasing()
        annoying.starting()
    
    */
    console.log("USING ARROW FUNCTIONS")
    
    const annoys = {
        //within this object we have an array (phrases) which contain a number of different values.
            phrasess: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
        //within the parent object, we also create a method. 
            pickPhrases() {
        //we use distructuring to get this.phrases as phrases. 
                const {phrasess} = this;
        //when then create a variable (idx) which goes through each element of our phrases object and picks one at random.
                const idx = Math.floor(Math.random() * phrasess.length);
        //we then console.log a random element of the phrases object. 
                console.log(phrasess[idx])//iteration 1: YOLO, //iteration 2: literally, //iteration 3: Can't stop won't stop
                return phrasess[idx]
            },
        
            starts() {
                console.log(this.pickPhrases())
        //If we use an arrow function here, we avoid the problems we have been having fully! 
        //arrow functions don't get their own THIS. The value of THIS in an arrow function will not change from that of its parent or it's closest THIS.
        //Because of that fact, the THIS we get in our setInterval arrow function is the THIS we get from STARTS!
        //Sometimes arrow functions are better to use because we don't want a new THIS! 
        //The other side of this coin is that they suck as regular methods on an object because you don't get access to THIS referencing the object. It's reference is global
                
        //this.timerId now gives us a    added a new property called timerId to our annoyer object. 
                this.timerId =setInterval(() => {
                    console.log("We the greatest!")//every three seconds,  "not dry code" is run in the console. 
                }, 3000)
            },
            //we create another method. 
            stop() {
                //we call clearInteval which takes an id. Which we get from this.timerId
                clearInterval(this.timerId)
                console.log("THANK GOD IT'S OVER!")
            }
        }
        
        annoys.pickPhrases()
        annoys.starts()
        annoys.stop()

        
/*
Putting It All Together: Deck of Cards 

In this video, we will not be using any new syntax or features of JS. We are just going to get in some practice, 
and talk about objects, methods, designing our code, and comparing that to different approaches we have already scene

*/
/*
const suits = ["hearts", "diamonds", "spades", "clubs" ];
const values = "1,2,3,4,5,6,7,8,9,10,J,Q,K,A"

const mainDeck = makeDeck()
function makeDeck() {
    
    const deck = [];
    const suits = ["hearts", "diamonds", "spades", "clubs" ];
    const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
    for (let value of values.split(",")) {
        for (let suit of suits) {
            deck.push({
                value,
                suit
            })
        }
    }
   console.log(deck.length) //52 //52
    return deck;
}


function drawCard() {
    return mainDeck.pop()
    

}

const myDeck = makeDeck();// gives an array with 52 objects containing a value and a suit for each card. 
const card1 = drawCard(myDeck); // {value: "A", suit: "clubs" }
console.log(myDeck)

makeDeck()
*/


const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ["hearts", "diamonds", "spades", "clubs" ],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    initializeDeck(){
        const {
            suits, 
            values, 
            deck
        } = this;
            for (let value of values.split(",")) {
                for (let suit of suits) {
                    deck.push({
                        value,
                        suit
                    })
                }
            }
        //return deck;
    },
    //this method removes a single card from our deck of cards. 
    drawCard(){
        const card = this.deck.pop()
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(numCards){
        const cards = [];
        for(let i = 0; i < numCards; i ++) {
            cards.push(this.drawCard());
        }
        return cards
    },
    //WE define a method called shuffle.
    shuffle() {
        const {deck} = this;
    //we then create a for loop and we loop through the array backwards. 
//we start at the end of the array, and pick a random index before the end of the array and we swap the two. 
//we are shuffling from the back moving towards the front.  
        for (let i = deck.length - 1; i > 0; i--) {
            //pick random index before current element
            let j = Math.floor(Math.random() * (i + 1));
            //swap
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
}

myDeck.initializeDeck()
myDeck.drawCard()
myDeck.drawMultiple(6)
myDeck.shuffle()
const card1 = myDeck.drawCard() 

console.log("===WHAT IS THE VALUE OF CARD 1===")
console.log(card1)//{ value: '3', suit: 'diamonds' }
console.log("===WHAT IS THE VALUE OF MY DECK AFTER POPING OFF A CARD?)
console.log(myDeck.deck)//We now have 51 cards, in random order. 
console.log("===HOW MANY CARDS DO I HAVE LEFT?")
console.log(myDeck.deck.length)////44 cards left after we take our cards off and put into the other array.
console.log("===WHAT IS THE VALUE OF MYDECK.DECKCARD()")
console.log(myDeck.drawCard())//{ value: '4', suit: 'hearts' }
console.log("===THE CARDS THAT WE HAVE DRAWN IN NEW ARRAY")
console.log(myDeck.drawnCards)//{ value: 'A', suit: 'clubs' },{ value: 'A', suit: 'spades' },{ value: 'A', suit: 'diamonds' },{ value: 'A', suit: 'hearts' },{ value: 'K', suit: 'clubs' },{ value: 'K', suit: 'spades' },{ value: 'K', suit: 'diamonds' },{ value: '5', suit: 'spades' },{ value: '4', suit: 'hearts' }
console.log("===WHAT ARE THE 6 CARDS THAT I'M DRAWING?")
console.log(myDeck.drawMultiple(6))//[ { value: 'J', suit: 'clubs' },{ value: '6', suit: 'hearts' },{ value: '8', suit: 'spades' },{ value: '4', suit: 'clubs' },{ value: '10', suit: 'spades' },{ value: '9', suit: 'spades' } ]
console.log("HAVE WE SHUFFLED OUR CARDS?")
console.log(myDeck)//All of our cards have now been shuffled! 





/*
Creating A Deck Factory 

*/


