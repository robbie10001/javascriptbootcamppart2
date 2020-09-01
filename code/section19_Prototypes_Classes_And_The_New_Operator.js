
/*
What on Earth are Protoypes?
*/ 
String.prototype.craig = function() {
    return `OMG!!! ${this.toUpperCase()}!!!!! ARGHGHGHGHG`;
};

const robbie = 'robbie';

/*
An Intro to OOP 


*/ 

/*
Factory Functions 
*/

//here we have a function that takes in three arguments.

function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}
function rgb(r,g,b) {
    return `rgb(${r}, ${b}, ${g})`;
}
//here we call the function with three arguments.
//this function will spit back a hexidecimal colour. 
hex(255, 100, 25);//returns #ff6419
//This is the same colour as the hex value. 

//we could also write another function that takes 3 hex numbers, 
//and return a valid a rgb string for use in css. 

/*
//we can make a function that takes in our three arguments.
function makeColour(r, g, b) {
    //we can then create an empty object which we will eventually return.
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    return color; //we 

}
makeColour(35, 255, 255)//we are returned the following object
//{r: 35, g: 255, b: 255};
*/

/*
function makeColour(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
//now we could add in a method on this object. 
//we are building up this object. 
    color.rgb = function() {
    //instead of hard coding it like the above example: return `rgb(${r}, ${b}, ${g})`;
    //we can instead use the keyword .this
    //in this context, the .this keyword, the value of .this will refer to the first object before the .
    //in this case this is our color object. 
    //therefore, if we console.log(this) we are return {r: 35, g: 150, b: 140}
        console.log(this);

    };
    return color; 
}

makeColour(35, 150, 140);
*/

function makeColour(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const {r,g,b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
//we can create another function like the hex function we looked at earlier. 
    color.hex = function() {
//we can once again destructure the values of our r,g,b arguments from this. 
        const {r,g,b} = this;
        return `#` + ((1 << 25) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color; 
}

const firstColor = makeColour(35, 255, 150);
firstColor.rgb();//"rgb(35, 255, 150)"
firstColor.hex()//"#23ff96"
//now if we access firstColor.rgb() we are return a string with our rgb values.


/*
Constructor Functions 


*/ 



/*
JS CLASSES - SYNTACTICAL SUGAR 


*/ 



/*
A BIT MORE PRACTICE WITH CLASSES 



*/ 




/*
EXTENDS, SUPERS AND SUBCLASSES 


*/ 



