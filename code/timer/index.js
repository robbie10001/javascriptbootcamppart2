

class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

//we wait for a click event on our start button, then we run the .start method.
        this.startButton.addEventListener('click', this.start);
//we wait for a click event on our pause button, then we run the .pause method.
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        this.tick();
//whenever we call setInterval, we get back an interger. This interger is an id. 
//this interger represents the running timer or the running interval,
// that is going to continue running this function again and again
//if we want to stop that timer, or the setInterval from running, we can run clearInterval.
//this method starts the timer ticking when the start button is clicked.
        this.intervalID= setInterval(this.tick, 1000);   

    };

    tick = () => {
        console.log('tick');
    }
    
    pause = () => {
//when we run clearInterval(interval) we pass in the id of the interval we want to stop. 
//in this case, it is the instance variable this.intervalID that we want to stop from ticking. 
//this method stops the ticker from continuing once the pauseButton has been clicked. 
        clearInterval(this.intervalID);
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton)





