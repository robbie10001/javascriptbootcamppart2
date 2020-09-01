

class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start.bind(this));
    //.bind returns us a new function. Which we can call sometime in the future.
    //calling .bind doesn't run start straight away. We're still passing a function to the event listener.
    //that's going to be executed at some point in the future after the user clicks on the button.
    //With .bind, we pass in the first argument into .bind which is going to be what the value of .this is forced to be, 
    //inside of the start function.
    //the value of .this in the start function is forced to be the value of .this on line 9 within the constructor.
    }

    start() {
        this.importantMethodToCall();
    }
    
    importantMethodToCall() {
        console.log('IMPORTANT THINGS WERE DONE')
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton)

timer.start() 



