
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
//we create a function 
setInterval(() => {
//we create a variable which randomly moves the image across the width of the screen 
    const x = Math.floor(document.body.clientWidth * Math.random())
//we create a variable which randomly moves the image across the height of the screen
    const y = Math.floor(document.body.clientHeight * Math.random())
//we then use class style of transform and see to its value a different height and width every 2 seconds. 
    myImg.style.transform = `translate(${x}px, ${y}px)`; 
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