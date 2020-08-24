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
/*
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
/*
const fakeRequest = (url) => { 
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users': [
					{id: 1, username: "bilbo"},
					{id: 2, username: "Esmererla"}
				],
				'/about': 'This is the about page!'
			};
			//data is set to the value of our /users...id's and usernames.
			const data = pages[url];
			//if we have this data, we successful resolve and get back a status 200 and the information within our object
			if(data) {
				resolve({ status: 200, data });
			} else {
			//if we don't have the data, we get back a status 404 and the promise resolves with a falure. 
				reject({status: 404});
			}
		}, 3000);
	});
};

//Because /users is a valid value for pages[url] our promise is successful
fakeRequest('/users')
.then((response) => {
	//this returns: Status Code: 200
	console.log("Status Code", res.status)
	//this returns: Data which contains the two items in our array.
	console.log("Data", res.data)
})
.catch((response) => {
	console.log(response.status)
});
//Because /dogs is not a valid value for pages[url] our promise fails. 
fakeRequest('/dogs')
.then((response) => {
	console.log("Status Code", res.status)
	console.log("Data", res.data)
})
.catch((response) => {
	//this returns: 404
	console.log(response.status)
});

The Delights of Promise Chaining 
*/
//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
	
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users'        : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/users/1'      : {
					id        : 1,
					username  : 'Bilbo',
					upvotes   : 360,
					city      : 'Lisbon',
					topPostId : 454321
				},
				'/users/5'      : {
					id       : 5,
					username : 'Esmerelda',
					upvotes  : 571,
					city     : 'Honolulu'
				},
				'/posts/454321' : {
					id    : 454321,
					title :
						'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
				},
				'/about'        : 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			}
			else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};

//As we can see below, we are able to make requests that are chained not nested within other requests. 
//we are able to do this because we return our promises. 
//They are dependent on each other to work. 
//we make a request to /users which we then gets 
fakeRequest('/users')
	.then((res) => {
		//this returns: {status: 200, data: Array(2)}
		console.log(res);
		//We get the first id element from our data array. In this case that is 1. 
		//this is the piece of information we need to chain our request. 
		const id = res.data[0].id;
		//we then return fakeRequest(`/users/1)'
		return fakeRequest(`/users/${id}`);
	})
	.then((res) => {
		//this returns the value of '/users/1': {city: "Lisbon", id: 1, topPostId: 454321, upvotes: 360, username: "Bilbo"}
		console.log(res);
		//We then create a variable that gets the topPostId: this is 454321
		const postId = res.data.topPostId;
		//we then use string interpolation to return to us 'posts/454321'
		return fakeRequest(`/posts/${postId}`);
	})
	.then((res) => {
		//this then returns our /posts/454321 information: {status: 200, data:}
		//data now contains {id: 454321, title: "Ladies & Gentlemen, may i introduce my pet pig, hamlet"}
		console.log(res);
	})
	//we then have a catch if something goes wrong with any of data calls. 
	.catch((err) => {
		console.log('OH NO!', err);
	});

// ************************************************
// ATTEMPT 2 (deliberate error to illustrate CATCH)
// ************************************************
// fakeRequest('/users')
// 	.then((res) => {
// 		console.log(res);
// 		const id = res.data[0].id;
// 		return fakeRequest(`/useALSKDJrs/${id}`); //INVALID URL, CATCH WILL RUN!
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		const postId = res.data.topPostId;
// 		return fakeRequest(`/posts/${postId}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log('OH NO!', err);
// 	});


 



/*
Refactoring with Promises 

c
*/ 



