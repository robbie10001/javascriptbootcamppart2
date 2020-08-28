/*
A Quick Overview of Async Functions 
*/ 
//if we write a function like this, we can't actually log the data variable.
//Thie is because we have to wait for the data to come back from the server. 
//our data variale will log before any information is actually recieved from the server.
function getData() {
    const data = axios.get('http://swapi.dev/api/planets');
    console.log(data)
}
//it would be nice to not have to use callbacks and .then to resolve promises. 
//This is where async and await come into play.

/*
The Async Keyword 
*/ 

//we just have a normal function that returns "hello"
function greet() {
    return "Hello"
}

/*
//however, when we put the async keyword in front of our function declaration, we get a promise. 
//Not only was the promise returned, it was also resolved, with the value of "Hello".
//Whatever the value that we are returning is, the promise this is returned from greet,
//will be resolved with that value.  
async function greeter() {
    return "Hello"
}
//so we can do something like this, and get the val, which is equal to 'hello'.
greeter().then((val) => {
    //this will log, 'Promise Resolved With Hello'
    console.log("Promise Resolved With ", val);
})
//So we can chain on .then because greeter is going to return a promise. 
*/

/*

//if we call this as a regular function, we will see that the logic works.
//if we call this function with 3 and 4, everything works fine. 
//however, if we call it with "e" and "t", we recieve the uncaught throw.
function add(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw 'x and y must be numbers';
//we recieve back: uncaught x and y must be numbers
    }
    return x + y;
}
//if we run the same code again with an async in front of the function,
//if it's successful we get a resolved promise with the value we put in (the sum of two numbers)
//if it doesn't work, we can back a rejected promise.
//however, we still recieve an uncaught message. 
//The same message as the function before. 
async function adder(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw 'x and y must be numbers';
//we recieve back: uncaught x and y must be numbers
    }
    return x + y;
}

async function adding(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw 'x and y must be numbers';
//we recieve back: uncaught x and y must be numbers
    }
    return x + y;
}

//we can call our function, then put on our .then and .catch.
//because adding is now an async function, it returns a promise. 
//and now we are handling it if it's rejected or if its resolved. 
adding('e', 5)
    .then((value) => {
        console.log('Promise resolved with', value);
    })
//if we run adding('e', 'p') for example, we 
    .catch((error) => {
        console.log('Promise resolved with', error);
    });

/*
The Await Keyword
*/ 
/*
//this function looks like its runs in order. 
async function getPlanets() {
    //we get our data from the api. We then wait until this is resolved. 
    //axios.get returns a promise.
    const resolution = await axios.get('http://swapi.dev/api/planets')
    //by putting the await keyword in, javascript will wait until the axios.get promise. 
    //and the value they its resolved with will be stored in our variable. 
    //In this case, const resolution.
    //then we console the data that we have stored in our variable
    //As we can see in this example, we don't have to use .then 
    console.log(resolution.data)
}

getPlanets()
*/

/*
Error Handling in Async Functions 

async function starwarsPlanets() {
    const resolvePromise = await axios.get('http://swapi.dev/api/planetss');
    console.log(resolvePromise.data);
}

starwarsPlanets().catch((error) => {
    console.log("We have an error", error)
})
//The spelling of our API call is wrong. This causes a .catch error. 
//the following is consoled: 
    //We have an error Error: Request failed with status code 404
        //at e.exports (spread.js:25)
        //at e.exports (spread.js:25)
        //at XMLHttpRequest.l.onreadystatechange (spread.js:25)

async function getStarWars() {
    //almost like an if/else statement we use a try and catch. 
    //If the try is successful, we get the data. 
    try {
    const resolvePromise = await axios.get('http://swapi.dev/api/planetss');
    console.log(resolvePromise.data);
    //if we have an error we hit the catch are recieve a console response. 
    } catch (error) {
        console.log("We have an error", error)
    }
}
getStarWars()
//This function returns the exact same information as the previous method.
//For both sucessful calls and failed calls. See Above. 
//We get the same behaviour although these methods are technically different. 
//they are different because in our second example, 
//we are going to catch any errors only within the specific async function. 
//in the first example, we could have multiple functions that are returning promises.
//So when we have one function we are calling, it doesn't really matter. 
//But in other cases, the first example, is more of a backup, that will catch multiple possible errors. 


/*
Multiple Awaits 
*/ 
const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				reject({ bodyBoundary, elRight, amount });
			}
			else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

//here we are setting a variable theButton to the dom element in our html file which is a button.
const theButton = document.querySelector('button');
//here we create an async function. 
async function animateRight(element, amount, ){
    //here we call moveX which returns a promise.
    //we then pass in the element, an amount (100px) for time (every second)
    await moveX(element, amount, 1000)
    //if we want the line above to finish before we move on to the next moveX, 
    //we don't need a .then, we can just await the first one and do the same thing again.
    await moveX(element, amount, 1000)
    await moveX(element, amount, 1000)
    await moveX(element, amount, 1000)
    await moveX(element, amount, 1000)
    await moveX(element, amount, 1000)
    await moveX(element, amount, 1000)
    await moveX(element, amount, 1000)
    await moveX(element, amount, 1000)
    await moveX(element, amount, 1000)
//we haven't error handled if we run out of room in our viewscreen and the promise is rejected. 

}
//using the .catch we can now error handle when we run out of room in the viewport.
//when we hit the catch, we will make it that we animate the other way back to the left.
animateRight(theButton).catch((error) => {
    console.log("All Done")
    animateRight(element, -100);
})


// const btn = document.querySelector('button');
// moveX(btn, 100, 1000)
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.catch(({ bodyBoundary, amount, elRight }) => {
// 		console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
// 		console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
// 	});

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
// const moveX = (element, amount, delay, onSuccess, onFailure) => {
// 	setTimeout(() => {
// 		const bodyBoundary = document.body.clientWidth;
// 		const elRight = element.getBoundingClientRect().right;
// 		const currLeft = element.getBoundingClientRect().left;
// 		if (elRight + amount > bodyBoundary) {
// 			onFailure();
// 		}
// 		else {
// 			element.style.transform = `translateX(${currLeft + amount}px)`;
// 			onSuccess();
// 		}
// 	}, delay);
// };

// LOOK AT THIS UGLY MESS!
// moveX(
// 	btn,
// 	300,
// 	1000,
// 	() => {
// 		//success callback
// 		moveX(
// 			btn,
// 			300,
// 			1000,
// 			() => {
// 				//success callback
// 				moveX(
// 					btn,
// 					300,
// 					1000,
// 					() => {
// 						//success callback
// 						moveX(
// 							btn,
// 							300,
// 							1000,
// 							() => {
// 								//success callback
// 								moveX(
// 									btn,
// 									300,
// 									1000,
// 									() => {
// 										//success callback
// 										alert('YOU HAVE A WIDE SCREEN!');
// 									},
// 									() => {
// 										//failure callback
// 										alert('CANNOT MOVE FURTHER!');
// 									}
// 								);
// 							},
// 							() => {
// 								//failure callback
// 								alert('CANNOT MOVE FURTHER!');
// 							}
// 						);
// 					},
// 					() => {
// 						//failure callback
// 						alert('CANNOT MOVE FURTHER!');
// 					}
// 				);
// 			},
// 			() => {
// 				//failure callback
// 				alert('CANNOT MOVE FURTHER!');
// 			}
// 		);
// 	},
// 	() => {
// 		//failure callback
// 		alert('CANNOT MOVE FURTHER!');
// 	}
// );

/*
Parrallel VS Sequential Requests 
*/ 



/*
Refactoring with Promise All 


*/ 
//HERE we desclare an async function. 
//we create three variables which use the await keyword to get the data from the api.
//
async function get3Pokemon(){
//it's important to note that each of a variables uses await. 
//we are going through them one by one. The first request will resolve before the second takes place
//The second will finish before the third request is make. 
//the requests are happening in sequence. 
//The first has to finish completely before the second one will take place.
//our requests are not getting sent off at the same time. 
//Because these requests are not dependant on each other, they really don't need to be made one by one. 
//In this cases, it would be better if we made it that our requests were made in parallel to each other.
    const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
    const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
    const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
//we then console out the different names of the three different pokemon we recieved in our api call.  
    console.log(poke1.data.name)
    console.log(poke2.data.name)
    console.log(poke3.data.name)
}
//get3Pokemon()

//In order to make our request occur in parrallel, we firstly remove the AWAIT keyword from our variable definitions.
//We will have to use AWAIT just not in our variables as we did in the first example. 
async function get3PokemonParallel(){
    //we are not using await anymore when we send off our request to the API.
    //we are still sending of our request here and recieving a promise. 
    //in the first example, our variable awaits a response so contains the data of the API call.
    //In this example, because we do not use AWAIT our variable is a promise.
    //It is not a variable storing the value like the first example.
        const promise1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
        const promise2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
        const promise3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
        //instead we declare the await keyword after our variables
        //This is a big change from the original example, in terms of how this is working behind the scenes.
        //Here we are saying AWAIT THE RESPONSE that comes back
        //In order to store the value of our API request, we can await the resolution of a promsies here,
        //and save the data we recieve to a new variable.
        const poke1 = await promise1
        const poke2 = await promise2
        const poke3 = await promise3 

        console.log(poke1.data.name)
        console.log(poke2.data.name)
        console.log(poke3.data.name)
    }
//Our requests are being sent at roughly the same time and we are awaiting the response we get from the API. 
    get3PokemonParallel()

//we create function that takes in two arguments. 
//a color argument and a delay argument. 
function changeBodyColour(color, delay) {
//we create a callback function that creates and returns a new promise.
    return new Promise((resolve, reject) => {
//we create a timeout function that after 1 second changes the color of our background.
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    });
}

//In this example, the whole code only take a second to run everything, 
//whereas the previous code took a second for each change of colour. 
/*
async function lightShow() {
    const p1 = changeBodyColour('teal', 1000)
    const p2 = changeBodyColour('blue', 1000)
    const p3 = changeBodyColour('red', 1000)
    const p4 = changeBodyColour('black', 1000)
    await p1
    await p2
    await p3
    await p4
}

lightShow();
*/

async function lightShow() {
    await changeBodyColour('teal', 1000)
    await changeBodyColour('blue', 1000)
    await changeBodyColour('red', 1000)
    await changeBodyColour('black', 1000)

}

lightShow()
