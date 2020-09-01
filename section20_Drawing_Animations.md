### Welcome to Part 2

In part one of this course, we looked at many different individual topics. We also focused on the basic features of Javascript and we didn't build any large applications.

In this part of the course we are going to be looking at fewer topics but in much more detail. We are going to be focusing on design patterns and more advanced concepts within Javascript. We are going to be building nothing but large apps and we are going to be doing a lot of refactoring of our code.

We are going to get our toolbox of different skills to build our own apps in our own way.

### App Overview

The first project that we are going to build is going to be based fully within the browser. This project will focus mainly on our basic javascript skills, especially, classes and functions. 

We are going to be making a timer application. When a user visits our application within the browser, we're going to show them a number a play button and a pause button. 

Whenever the user clicks on play, we're going to have the time count down every second. The user will be able to pause the countdown at any time by clicking the pause button and resume it again by click the play button.

There are going to be a couple of elements within this project that make it a bit interesting and challenging. 

We're going to have a circle, drawn around the timer element, as the timer counts down, we are going to have the circle revolve. 

Whenver a user clicks on the number that is counting down, it will turn into a text input. This will allow the user to change how long the countdown time will run. 

### Project Setup

For my projects, i'm going to create a new route for each one. For example, to access the code for this particular project the url is localhost:5500/code/timer/

In this section we are just going to make some boilerplate and make sure our html and js files are connected. 

##### index.html

![images](/images/section20/indexhtml1.png)

##### index.js 

![images](/images/section20/indexjs1.png)


### Event-Based Architeture 

In total, we are going to have a timer and an animated border around it.
Our program does two things. It displays a timer and it shows an animated border around the timer. 

The timer and the border around the timer are really two different parts of our program. 

For our timer we could possibly have the following implementation. 

![images](/images/section20/timer1.png)

Instead of doing it as one big bunch of code, we should seperate our code into different and seperate blocks. 

One way to do this would be the following: 

![images](/images/section20/possible1.png)


### Class-Based Implementation 

To implement our design, we are going to use a class. We don't have to do this, but a class makes sense in this case. 

In order to implement our timer we are going to do the following: make a class Timer which has four methods, start, pause, onDurationChange and tick. 

Our timer class will be fully focused on the counter the play button and the pause button. It will be a completely distinct piece of code from our border. 

1. When a user clicks on the play button, our start method will take effect.
2. When a user clicks on the pause button, our pause method will take effect.
3. When a user clicks on the actual countdown number we will invoke the onDurationChange method. 
4. Our tick method count-down every second and update the time on our timer.

Whenever we create an instance of our Class Timer, we are going to have a construction which will take three arguments. We are going to reference some dom element that will serve as our text input. We are going to pass some dom-element that will serve as a start button and thirdly, pass in an argument for our pause button. 


### Binding Events in a Class 

##### index.html 

![images](/images/section20/htmlsection201.png)

#### index.js 

![images](/images/section20/jssection201.png)


### Reminder on "This"

In this section we are going to go over the value of .this is a class. 

#### index.js 

![images](/images/section20/whatsthis.png)



### Determining the Value of "This"

There are three ways to determine the value of .this within a function.

![images](/images/section20/thevalueofthis.png)

##### Determining the value of "This" within an arrow function.

![images](/images/section20/determinearrow.png)

##### Did you call "bind", "call" or "apply" to the function when you invoked it?

![images](/images/section20/bindcall1.png)

##### all other cases

![images](/images/section20/bindcall2.png)


### Solving the "This" issue

In order to solve our problem we have, where we need to call start() and have it always give us the same value of 'this' we are going to simply make sure that the value of 'this' is either determined through the use of arrow function or through the use of calling .bind() .call() or .apply(). 

##### First Solution Using An Arrow Function.

![images](/images/section20/firstsolution.png)

##### Second Solution Using 'Bind', 'Call' or 'Apply




### Starting and Pausing the Time 




### Where to store data? 




### DOM-CENTRIC APPROACH 





### GETTERS AND SETTLERS 





### STOPPING THE TIMER 





### NOTIFYING THE OUTSIDE WORLD 




### ONTICK AND ONCOMPLETE





### EXTRACTING TIMER CODE





### INTRODUCING SVG'S





### RULES OF SVG'S 





### ADVANCED CIRCLE PROPERTIES 





### THE SECRET TO THE ANIMATION





### FIRST PASS ON THE ANIMATION 





### SMOOTHING THE ANIMATION 





### ADJUSTING BY AN EVEN INTERVAL 




### USING ICONS 




### STYLING AND WRAPUP 


