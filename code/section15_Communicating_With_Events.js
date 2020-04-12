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

/*
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
const changeColor = function(){
    const h1 = document.querySelection("h1");
    //this is refering to the individual div that is clicked on. 
    h1.style.color = this.style.backgroundColocr;
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
    box.addEventListener("click", changeColor)
    box.addEventListener("click", function() {
        console.log("clicked a box");
//the follow line will print out the color of any of the boxes that we click.
        console.log(box.style.backgroundColor);
    });
};


//The Event Object

const h1 = document.querySelector('h1');
const changeColor = function() {
    h1.style.color = this.style.backgroundColor;
};
const container = document.querySelector("#boxes");
for (let color of colors ) {
    const box = document.createElement("div"); 
    box.style.backgroundColor = color; 
    box.classList.add("box"); 
    container.appendChild(box); 
    box.addEventListener("click", changeColor)
};




//ey Events: keypress, keyup, & keydown

/*
INDEX.HTML 

<body> 
    <input id="username" placeholder="username" type="text"/>
    <h3>Shopping List</h3>
    <input type="text" id="addItem" placeholder="enter aa food"/>
    <ul id="items"></ul>
    <script src="app.js"></script>
</body> 

APP.JS 

const input = document.querySelection('#username');

input.addEventListener('keydown', function(e) {
    console.log('KEY DOWN!')
});
//this events runs when we press a key down. 

input.addEventListener('keyup', function(e) {
    console.log('KEY UP!')
});
//this event runs when we let go of a key. 

input.addEventListener('keypress', function(e) {
    console.log('KEY DOWN!')
});

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e))
   if(e.key === 'enter') {
       const newItemText = this.value 
       const newItem = document.createElement('li');
       newItem.innerText = newItemText;
       itemsUL.appendChild(newItem)
       this.value = '';

   }


/*
Coin Game Demo 


*/ 


//Form events & PreventDefault 







/*
Input & Change Events



*/ 

