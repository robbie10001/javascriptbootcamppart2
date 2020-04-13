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


*/ 



/*
Introducing Promises! 


*/ 



/*
Returning Promises from Functions 


*/ 



/*
Resolving/Rejecting with values 


*/ 



/*
The Delights of Promise Chaining 


*/ 



/*
Refactoring with Promises 

c
*/ 



