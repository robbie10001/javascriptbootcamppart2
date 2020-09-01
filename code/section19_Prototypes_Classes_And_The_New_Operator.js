
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
//1. Creates a blank, plain Javascript Object
//2. Links (sets the constructor of) this object to another object
//3. Passes the newly created object from step 1 as the this context;
//4. returns this if the function doens't return its own object. 

//By defining Color with a capital, we are signalling that we are not creating a normal function.
//instead we are creating a function that helps us create objects. It's a constructor function.
//In our constructor function we pass in r, g & b
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}
//When we call this Color function with the new keyword, and pass in values. 
//if we don't use the new keyword, this refers to the window object.
//It is going to create a new object.
//And it's going to set the this keyword to this new object.
//so we will be adding r, g, b to that new object. 
//then it returns the value of .this at the end.
new Color(255, 40, 100);
//so this is doing a similar thing to the last example although it is happening implicitly. 
//An object is being created - for example, const 0 = {};
//this - is refering to the newly created empty object.
//and then the three properties are added to the created object. 
//and at the end we are returned the now populated object. 



function Coloring(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}
//what we do is define our method on the PROTOTYPE outside the constructor function.
Coloring.prototype.rgb = function() {
 const {r, g, b} = this;
 return `rgb(${r}, ${g}, ${b})`;
};
//We have now made this constructor function for Coloring, anytime we call it with NEW keyword
//it makes us a new object, sets the constructor to Colouring of that object
//and sets the value of THIS to that new empty object. 
//we can add properties to it and returns that object. 

const color1 = new Coloring(40, 60, 60)
//if we have a look at this method, we can see that the rgb function is not defined on the object itself.
//instead, the function is defined within the proto in the constructor. 
//we can still call color1.rgb() and get our result. 
//however we don't have to have multiple instances of it now. 
//This is more programmatic than the factory approach. 


function Col(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Col.prototype.rgb = function() {
 const {r, g, b} = this;
 return `rgb(${r}, ${g}, ${b})`;
};

Col.prototype.hex = function() {
    const {r, g, b} = this;
    return `#` + ((1 << 25) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
//when we console these out we see that we get different results. 
//This is because the value of THIS is different inside these methods. 
//but when we call coloring1.hex === coloring2.hex...we get true. 
//They are pointing to the same thing! which are defined on the prototype!
const coloring1 = new Col(40, 60, 60) //"#283c3c"
const coloring2 = new Col(50, 120, 50)//"#327832"










/*
JS CLASSES - SYNTACTICAL SUGAR 


*/ 



/*
A BIT MORE PRACTICE WITH CLASSES 



*/ 




/*
EXTENDS, SUPERS AND SUBCLASSES 


*/ 



