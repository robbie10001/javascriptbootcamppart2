/*
THE CALL STACK 


*/ 

/*
Call stack debugging with dev tools 

index.html 

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Call Stack Demo</title>
  <link rel="stylesheet" href="app.css">
</head>

<body>

  <script src="app.js"></script>
</body>

</html>

app.js 


//repeat takes the uppercase version of scream 
const repeat = (str, times) => {
	let result = '';
	for (let i = 0; i < times; i++) {
		result += str;
	}
	return result;
};
//the screm function makes our string uppercase and adds some exclimation marks. 

const scream = (str) => {
	return str.toUpperCase() + '!!!';
};
//get rant text calls two different function. scream() and repeat()
//text = I HATE MAYONNAISE!!! 
//rant = I HATE MAYONNAISE!!!I HATE MAYONNAISE!!!I HATE MAYONNAISE!!!I HATE MAYONNAISE!!!I HATE MAYONNAISE!!!I HATE MAYONNAISE!!!I HATE MAYONNAISE!!!I HATE MAYONNAISE!!!
const getRantText = (phrase) => {
	let text = scream(phrase);
	let rant = repeat(text, 8);
	return rant;
};
//in this function we create a new empty h1 tage, 
//then we set the innerText to the result of a function called getRantText.
//we then take the value of text and rant, and add it to our h1 tag
const makeRant = (phrase, el) => {
	const h1 = document.createElement('h1');
	h1.innerText = getRantText(phrase);
	el.appendChild(h1);
};
//we call the function makeRant twice. In both cases we are passing in a string, and a place to apphend a new h1 tag.
makeRant('I hate mayonnaise', document.body);
*/ 



/*
JS is single threaded 


*/ 


/*
How Asychronous Callbacks Actually Work 


*/ 



/*
Welcome to Callback Hell 

HTML 

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="app.css">
  <title>Callback Hell</title>
</head>

<body>
  <h4>Try shrinking your window and see what happens!</h4>
  <button>Move Me!</button>
  <script src="app.js"></script>
</body>

</html>

CSS

button {
	font-size: 50px;
}


JAVASCRIPT 

const btn = document.querySelector('button');

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
const moveX = (element, amount, delay, onSuccess, onFailure) => {
	setTimeout(() => {
		const bodyBoundary = document.body.clientWidth;
		const elRight = element.getBoundingClientRect().right;
		const currLeft = element.getBoundingClientRect().left;
		if (elRight + amount > bodyBoundary) {
			onFailure();
		}
		else {
			element.style.transform = `translateX(${currLeft + amount}px)`;
			onSuccess();
		}
	}, delay);
};

// LOOK AT THIS UGLY MESS!
moveX(
	btn,
	300,
	1000,
	() => {
		//success callback
		moveX(
			btn,
			300,
			1000,
			() => {
				//success callback
				moveX(
					btn,
					300,
					1000,
					() => {
						//success callback
						moveX(
							btn,
							300,
							1000,
							() => {
								//success callback
								moveX(
									btn,
									300,
									1000,
									() => {
										//success callback
										alert('YOU HAVE A WIDE SCREEN!');
									},
									() => {
										//failure callback
										alert('CANNOT MOVE FURTHER!');
									}
								);
							},
							() => {
								//failure callback
								alert('CANNOT MOVE FURTHER!');
							}
						);
					},
					() => {
						//failure callback
						alert('CANNOT MOVE FURTHER!');
					}
				);
			},
			() => {
				//failure callback
				alert('CANNOT MOVE FURTHER!');
			}
		);
	},
	() => {
		//failure callback
		alert('CANNOT MOVE FURTHER!');
	}
);

*/ 

/*
Introducing Promises! 

JS


//below we are defining a variable that takes in a new promise. 
//when we create a promise, we pass in a function
//and this function always has two parameters. 
//we normally call these paramaters resolve and reject.These paramaters are actually functions.
//At any point in our function, if we call resolve the promise will be resolved.
//if  we call reject, our promise will be rejected. 
const willGetYouADog = new Promise((resolve, reject) => {
//we create a promise that is randomly resolved. Half the time in will resolve and half the time it will reject.
	const rand = Math.random();
	if (rand < 0.5) {
	//the resolve function acts to carry out our promise. 
		resolve();
	}
	else {
	//tbe reject function acts to carry out our promise as well
		reject();
	}
});
//This below code is how we actually interact with a promise. Its how we run code if its rejected versus if its resolved. 
//if we hit the the resolve function we will return the .then 
//the .then method will run if our promise is resolved. 
willGetYouADog.then(() => {
	console.log('YAY WE GOT A DOG!!!!');
});
//if we hit the reject function we will hit the catch. 
//the .catch method will run if we hit the reject. 
willGetYouADog.catch(() => {
	console.log(':( NO DOG');
});

HTML 

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="app.css">
  <title>Promises Intro</title>
</head>

<body>
  <h1>Promises Intro!</h1>
  <script src="app.js"></script>
</body>

</html>




*/ 


//Returning Promises from Functions 

//we often return a promise from a function instead of just making one promise like we did above,
//we could instead define a function and this function, can the return our promise. 

const makeDogPromise = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const rand = Math.random();
		if (rand < 0.5) { 
			resolve();
		}
		else {
			reject();
		}
	  }, 5000)
	}); 
	};
	makeDogPromise()
	.then(() => {
		console.log('YAY WE GOT A DOG!!!!');
	}) 
	.catch(() => {
		console.log(':( NO DOG');
	});
}

/*
//this is the first example we have had of a promise that takes some time (5 seconds).

Resolving/Rejecting with values 
*/
//we create a callback function that takes in a single argument url.
const fakeRequest = (url) => {
//this function returns are new Promise which must be resolved or rejected. 
	return new Promise((resolve, reject) => {
//we set this promise to execute after 3 seconds. 
//It will be rejected 30% of the time and resolve 70% of the time.
		setTimeout(() => {
			const rand = Math.random()
				if(rand < 0.3){
				//THIS IS WHERE WE PASS IN THE VALUE OF OUR REJECT CALL
				//We can pass multiple paramaters through our reject.
					reject({status: 404});
				//if something is rejected, we pass in an object with the key of status. 
				//we can then see this value when we call the .catch(response) by console.log(response.status)
				//this returns in this case the value of the object...404;	
				}
				else {
				//THIS IS WHERE WE PASS IN THE VALUE OF OUR RESOLVE CALL
				//we create variable pages. This is an object /users, which contains an array.
				//this array contains two objects both with an id and a username. 
				//we also create an object /about. 
					const pages = {
						'/users': [
							{id: 1, username: "bilbo"},
							{id: 2, username: "Esmererla"}
						],
						'/about': 'This is the about page!'
					};
					//we create a variable data that take the value of our pages array. 
					const data = pages[url]
					resolve({ status: 200, data });
				}
		}, 3000)
	});
}
//if the request is sucessful we log the following code. 
fakeRequest('/about')
.then((response) => {
	console.log("Status Code", res.status)
	console.log("Data", res.data)
	console.log("REQUEST WORKED!");
})
//if the request fails we log the following code. 
.catch((response) => {
	console.log(response.status)
	console.log("REQUEST FAILED!");
});







/*
The Delights of Promise Chaining 

 



/*
Refactoring with Promises 

c
*/ 



