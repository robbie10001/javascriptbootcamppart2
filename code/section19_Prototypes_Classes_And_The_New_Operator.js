
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

/*
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

*/


/*
JS CLASSES - SYNTACTICAL SUGAR 
*/ 
/*
//This creates a class
class Color {
    //next WE ALWAYS add in a constructor
    //a constructor is a function that will execute immediately whenever a new color is created.
    //the constructor will run immediately whenever we call a new instance of our class in this case Color.
    constructor(r, g, b, name) {
    //typically in the constructor we are going to access .this
    //the below values, are going to be added as properties on our Color object that is returned. 
    //this is the same as when we had our constructor function.
    //.this will automatically refer to a new object.
    this.r = r;
    this.b = b;
    this.g = g;
    this.Colourname = name;
    }

}
//when we call new color, it still follows the same steps.
//it makes a new object, and it set the value of .this to that object.
//so .this .r will be whatever is based in as r in this case, 200.
const colour1 = new Color(200, 43, 89, "strawberry")
//when we run this code, colour 1 is an object having the following data form:
//Color {r: 200, b: 89, g: 43, Colourname: "strawberry"}
//these property names were all set in the constuctor. 

class Color {
    constructor(r, g, b, name) {
    this.r = r;
    this.b = b;
    this.g = g;
    this.Colourname = name;
    }
    //we can use this syntax for defining our methods within our constructor
    //this is now a method on every colour, but not on every instance. 
    //Using classes, we can see how we can group everything together!
    //our greet method is now on the prototype! There is only one copy.
    greet(){
        return `Hello From ${this.Colourname}!`
    }

}
//if we call colour1.greet() we recieve: "Hello from Strawberry";
const colour1 = new Color(200, 43, 89, "strawberry");
//if we call colour.greet() we recieve: "Hello from white";
const colour2 = new Color(255, 255, 255, "white");

class Color {
    constructor(r, g, b, name) {
    this.r = r;
    this.b = b;
    this.g = g;
    this.Colourname = name;
    }
//anytime we are within a class using the new keyword, .this refers to the instance of the class. The individual objects
//not the prototype or anything like that. 
//so in our methods, we can deconstruct the objects that we want.

    innerRGB(){
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        return `rgb(${this.innerRGB()})`
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`
    }

    hex() {
        const {r, g, b} = this;
        return `#` + ((1 << 25) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}
//if we call colour1.rgb we get the following: rgb(200, 43, 89)
//if we cann colour1.hex we get the following: "#c82b59"
const colour1 = new Color(200, 43, 89, "strawberry");
//if we call colour2.rgb we get the following: "rgb(255, 255, 255)
//if we call colour2.hex we get the following: "#ffffff"
const colour2 = new Color(255, 255, 255, "white");
*/

/*
A BIT MORE PRACTICE WITH CLASSES 
*/ 
class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
        this.name = name;
    //we can call a function from within our constructor! 
		this.calcHSL();
	}
	innerRGB() {
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}
	rgb() {
		return `rgb(${this.innerRGB()})`;
	}
	rgba(a = 1.0) {
		return `rgba(${this.innerRGB()}, ${a})`;
	}
	hex() {
		const { r, g, b } = this;
		return (
			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
		);
    }
    //this method is where we will show our calculation of our hsl.
	hsl() {
		const { h, s, l } = this;
		return `hsl(${h},${s}%, ${l}%)`;
    }
    //this method will set saturaition to 100% on anything we pass through. 
	fulllySaturated() {
		const { h, l } = this;
		return `hsl(${h},100%, ${l}%)`;
    }
    //this method will take h and create an opposite of this colour. 
	opposite() {
        const { h, s, l } = this;
    //so if this was white, it would now be black;
		const newHue = (h + 180) % 360;
		return `hsl(${newHue},${s}%, ${l}%)`;
	}
	calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}
}
const red = new Color(255, 67, 89, 'tomato');
red.hsl();
red.opposite();
red.rgba(0.3);
const white = new Color(255, 255, 255, 'white');




/*
EXTENDS, SUPERS AND SUBCLASSES 


*/ 



