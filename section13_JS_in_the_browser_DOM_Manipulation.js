
/*
ANOTHER FUN DOM EXAMPLE 

We are going to play around with the home page of google. We are going to take every element from the screen, and animate it around randomly.
This is to show us the we can do things like change style, move things around, and animate them. 




*/ 
//we create a variable in which we create an image element.
const myImg = document.createElement("Img"); 
//we then give our image the value of an image of a dog from unsplash. 
myImg.src = "https://images.unsplash.com/photo-1452441271666-5d998aa2f6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"
//we then give the image a width of 200px
myImg.style.width = "200px"; 
//we then add our image onto the body of the webpage we are on. 
document.body.append(myImg); 
//we then give our image a css style which moves our image smoothly across the screen, in unison with our transform property.
myImg.style.transition = "all 2s"; 
//here we are creating a new variable that is equal to the value of a new CSS style sheet. 
const sheet = new CSSStyleSheet(); 
//Here we are adding in a new selector, and we are selecting everything via CSS and giving it a transition of 2 seconds. 
sheet.replaceSync(`* {transition: all 2s}`);
//here we are adding our stylesheet into our code. 
document.adoptedStyleSheets = [sheet]; 
//we can select every element within a webpage using the following syntax. 
const allElements = document.getElementById("viewport").children;

//we create a function 
setInterval(() => {
//we are now going to loop over all the elements within our interval. 
for(let elements of allElements) {
//we can rotate all the elements within our webpage. 
    const rotation = Math.floor(Math.random() * 360);
//we create a variable which randomly moves the image across the width of the screen 
    const x = Math.floor(document.body.clientWidth * Math.random())
//we create a variable which randomly moves the image across the height of the screen
    const y = Math.floor(document.body.clientHeight * Math.random())
//
    elements.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`; 
    }
}, 2000)




/*
THE DOCUMENT OBJECT


*/ 

/*
getElementById


*/ 

/*
getElementsByTagName




*/ 

/*
getElementsByClassName


*/ 

/*
querySelector & querySelectorAll 



*/ 



const myImg = document.createElement("Img"); 
myImg.src = "https://images.unsplash.com/photo-1452441271666-5d998aa2f6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"

myImg.style.width = "200px"; 
document.body.append(myImg); 
myImg.style.transition = "all 2s"; 

const sheet = new CSSStyleSheet(); 
sheet.replaceSync(`* {transition: all 2s}`);
document.adoptedStyleSheets = [sheet]; 

const allElements = document.body.children;

 
setInterval(() => {
    for(let elements of allElements) { 
        const rotation = Math.floor(Math.random() * 360);
        const x = Math.floor(document.body.clientWidth * Math.random())
        const y = Math.floor(document.body.clientHeight * Math.random())
        elements.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`; 
    }
}, 2000)



//getElementById("viewport")





























