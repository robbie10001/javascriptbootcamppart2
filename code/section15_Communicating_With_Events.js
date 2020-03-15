/*
Intro to DOM Events 


*/ 



/*
Ways NOT to add Events 


*/ 



/*
addEventListener


*/ 



/*
The Impossible Button Demo


*/ 



/*
Events on Multiple Elements


*/ 


INDEX.HTML 

<body> 
    <section id= "boxes">

    </section>
    <script src="app.js"></script>
</body> 


APP.CSS 

.box {
    width: 200px; 
    height: 100px; 
}

//this displays all of our different boxes on a single line. 
#boxes{
    display: flex;
    justify-content: center; 
    align-items: center; 
}

h1 {
    text-align: center; 
}






APP.JS  
//What we are trying to achieve is to loop over each of these colours and create a unique div for each element. 


//we create an array 
const colours = [
    "red", 
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "indigo",
    "violet"
]; 
//we create a variable container that has the size dementions we want for each of our elements.
//we extract this information our of our css file. 
const printColor = function(){
    const h1 = document.querySelection("h1");
    console.log(this);
    console.log(this.style.backgroundColor);

}

const h1 = document.querySelector("h1");
const container = document.querySelector("#boxes");

//we use a for loop to to go through each element of our array. 
for (let color of colors ) {
//we create a variable which creates a div for each element. 
    const box = document.createElement("div"); 
//within our loop, we assign a color in order from our array to each element as it goes through the loop.
    box.style.backgroundColor = color; 
//we use our css class which gives us the height and width. 
    box.classList.add("box"); 
//we then apphend the div with its unique color. 
    container.appendChild(box); 
//in order to add an event listener to each element within our div, it is best to use the current loop. 
//This can be a achieved the following way, 
    box.addEventListener("click", printColor)
    box.addEventListener("click", function() {
        console.log("clicked a box");
//the follow line will print out the color of any of the boxes that we click.
        console.log(box.style.backgroundColor);
    });
}


/*
The Event Object


*/ 


/*
Key Events: keypress, keyup, & keydown


*/ 


/*
Coin Game Demo 


*/ 


/*
Form events & PreventDefault 


*/ 



/*
Input & Change Events



*/ 

