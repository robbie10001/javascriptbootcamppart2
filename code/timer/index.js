

class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
    }
 
    start() {
        console.log(this)
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton)

//timer.start() 


//in all other cases, the value of 'this' is going to be equal to whatever is to the left of the '.' in our method call.

const colors = {
    printColour() {
        console.log(this)//{printColour: ƒ}
    }
};
//to determine the value of 'this' we take a look to the left of our period name. 
//in this example, the colors object. 
//becase the colors object is to the left of the period, the value of 'this' inside of printColour is going to be equal to, colors!
colors.printColour();

