
//we create a class. 
class Timer {
    //into our class we pass three arguments to our constructor. 
    //these arguments are variables that we have 
    //defined in order select our various html elements,
    constructor(durationInput, startButton, pauseButton) {
    //we add in our three html elements
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
    //we then create an event listen for when a user hits the start button
        this.startButton.addEventListener('click', this.start);
    }
    //we create a function that consoles to us everytime the start button is clicked.
    start() {
        console.log("time to start a timer")
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton)
