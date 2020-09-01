
//we create a class. 

//inside of a class, we want the value of this to be equal, to the instance of the class that we create. 
//this is how we refer to different instance variables and methods, that are defined within the class.
class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
    }
//whenever we hit the start button, our start method is going to be invoked. this is because we wired it up with an event listener on line 12. 
//if we try and envoke start by clicking on the button, we get a very different result to what we get on line 35.
//in order to fix this up and in order to ensure we can use a button with an event listen,
//to envoke the different methods inside of our class, we need to make sure, the value of .this
//within our start method is what we expect it be. In order to do this, we need to get a better understanding, of the value of .this within a class. 
    start() {
        console.log(this)//when we click on the button, the following is consoled.
//<button id="start">Start</button> this is not what we want at all.
//we don't have access to any of the intance variables inside of our class!
//inside the start function, the value of this is very different than if we call start directly like the last line of code.
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton)
//the other way we can call the start method is directly, 
//like the below line of code. 
timer.start()//this method call returns: Timer {durationInput: input#duration, startButton: button#start, pauseButton: button#pause}
//What we see is the instance of the timer class that we created. 
//This is the result we want in general. We always want a console.log of .this 
//to result in the instance of the class. This means we can access the instance variables and methods we define on the class.   