### Intro to DOM Events 

This is where we start to make cool applications that do things! Events allow us to run our code to create an element, remove an element, or change a colour when a specific interaction happens from a user. There are tons and tons of different events out there. Here is a small sample of some of the more common event handlers that we will use. 

![images](/images/section15/eventssample.png)

If we go to MDN web docs, we can go through the event handlers in JS within the doc, these are grouped together.  

https://developer.mozilla.org/en-US/docs/Web/Events


### 2 Ways Not to Add Events 

There are tons of different events we can work with in our JS code. The range from super common things like clicks and drags, to some pretty obscure events like priniting events. Even though the trigger for events are different, they all follow the same pattern, whether its a user typing the enter key, or the user dragging or dropping. The way we incorporate our events into our code has the same pattern. 

1. Thing (we have a thing that we are listening for an event on, we are listening to see when the event occurs on a given thing or with a given thing, like a click on a button or a drag on an image.)
2. Event (then we have the event itself, or the event type.)
3. Code (Then we tell JS here is the code that i want to run.)

For example, 

Button -> click -> change the color 
input -> hits return -> get search results
image -> mouseover -> display the image captionc

They all follow this pattern. We have to find an element, an event type and then code we want to run once this actually happens. 

There are 3 different syntaxs for how we can actually achieve this. Although, two of these we should avoid using. 

#### Code directly in the element. 

The first way we can make an event listener is by inserting the event directly into our element. This is not a good idea, for the same reason it's not a good idea to put in a heap of inline styles. This is because we end up with super cluttered html and our JS is spread out all over the place.  We don't want this! 

![images](/images/section15/onclickmethod1.png)

#### Select an Element first in JS and then add event listener 

The second method we can use is to give our event an id. We create a script within our index.html file. We when access this script within our app.js file. Within this file, we define a function that allows our event listener to work. 

##### index.html 

![images](/images/section15/listenindex.png)

##### app.js 

![images](/images/section15/listenindex1.png)

What we are saying is, the button, that we selected, when a click happens on this one button, we should execute our function. 

This is educational, this is not how we want to add events and to use events. 

If we wanted to have a second click listener, we don't have that option. onclick is a single property. Only the most reason value is held. Therefore we are limited using this method. There are times when we want multiple listeners on events. 

### addEventListener 

![images](/images/section15/addeventlistener.png)

addEventListener is great, it's one method and it will attach any type of event listener that we want. It will also attach as many as we want to a given element. Now when we click out button we get an alert. We can add a second event listener to the exact same button if we would like. 
For example, 

const btn = document.querySelector("button); 
btn.addEventListener("click", function()){
    alert("Clicked")
});

btn.addEventListener("click", function()){
    console.log("Second Thing!")
});

We are not setting the onClick property, instead we are attaching an event listener which we can multiple of for a given event on a given element. We could attach as many as we want! Let's try a different event. 

btn.addEventListener("mouseover, function(){
    btn.innerText = "STOP TOUCHING ME!"
});

btn.addEventListener("mouseout, function(){
    btn.innerText = "Click ME!"
});

Now whenever we hove over the button we change its value to "Stop touchimg me", whenever we move of the button it becomes "click me" again. 

Add event listener is our swiss army knife for events. 


### The Impossible Button Demo

We are going to do a small demo for event listeners by making the worlds most annoying button. Its a button that when you try and click it, it moves out of the way. It will be very simple, in our HTML we will add a button element, with the text "try to click me", and a script tag to link our project. 

##### index.html 

![images](/images/section15/htmlforbutton.png)

In our javascript, we are going to select that button and use the mouseover event so that the button moves before you can click it!. 

const btn = document.querySelector("button"); 

btn.addEventListener("mouseover", function() {
    console.log("Noused over ME!")
    btn.style.left
});

#### app.css 

button { 
    position: absolute;
    top: 10px; 
    left: 10px; 
}

We can now manipulate this css within our callback function! 

Now what we want to do, is that when you mouse over the button, it randomly moves to somewhere else on the screen. There are many ways to do this, we are going with the most simple one, which isn't the best really for peformance. 

#### app.js 

btn.addEventListener("mouseover", function() {
    console.log("Noused over ME!")
    btn.style.left = "200px"
    btn.style.top = "100px;
});

Now when ever we mouseover the button, the button moves. Now what we want is that when we mouseover the button, it randomly moves. 

btn.addEventListener("mouseover", function() {
    console.log("Noused over ME!")
    const h = Math.floor(Math.random() * window.innerHeight);
    const w = Math.floor(Math.random() * window.innerWidth);
    btn.style.left = `${width}px`
    btn.style.top = `${height}px`
});

We have now created a button that moves randomly within the height and width of any given screen resolution. 

What if we now add in some behaviour if the user is actually able to click on our button? We can do this by adding another event listener for when they actually are able to click the button. 

btn.addEventListener('click', function(){
    btn.innerText = "You Got Me!";
    document.body.style.backgroundColor = "green";
});

If the person is able to click on the button, the background of the page will turn green. 

The point of this, is that we can have multiple events on a single element. 


### Events on Multiple Elements 

We are going to look at how we can attach event listeners to multiple elements. 

We have seen how we can attach multiple event listeners to one element, we had a button that had a click listener, but how to we take every button on a page and add a click event handler? Or, 

How do we take every upvote arrow on reddit and make it do something when you click upvote instead of down vote? We don't attach these manually one at a time. Instead, we use a loop. 

We can add eventlisteners to multiple elements inside of a loop. We don't always have to use this, although generally inside of an event listener, this will refer to the individual element that the event listener has been added to. 

![images](/images/section15/appmultipleelements.png)

![images](/images/section15/csshtmlmultipleelements.png)


### The Event Object 

The event object, is a very useful part of working with events. If we need information about events, weather its what was clicked on, what key was pressed, where on the screen, we can access a whole host of information using the event object. 

![images](/images/section15/theeventobject.png)

In the above example, when wchange color function on the last line within our for loop in called, it is called when a user clicks on a box. We are never executing the function ourselves. It's being called for us.

Its is also being passed a value, the event object. The event object, can sometimes be extremly useful to have access to in our callback, in our event handler. We always have access to it, although to capture the data, we would need to do the following. 

![GIF](/gifs/section15/eventobject.gif)

1. We add a paramatter to our function, we can call this anything. 
2. We console.log what it contains. 
3. We see that it's an event object, that contains information about the particular event. 

Here is another example, this time we have an event listener listening for a keypress. 

![GIF](/gifs/section15/eventkeypress.gif)


### Key Events: keypress, keyup & keydown 

We are going to talk more about key events. There are at least three options for listening for a key press, or a keydown or a keyup. When we want to know if something is changing in the input, we would use keypress. When we hit return, even this counts as a keypress. A lot of the time we want to listen to a return press or an enter key press. Meaning that the user is hitting submit to finish a form or whatever. 

![images](/images/section15/keyeventscode.png)

Keyup and KeyDown are going to fire for any key, that we touch at all. The way keypress is supposed to work, is that it only fires when an input is changed. For example,  an arrow key doesn't count at all. 

![GIF](/gifs/section15/keydown.gif)

![GIF](/gifs/section15/addingelements.gif)


### Coin Game Demo 
I made this into its own repo. In order to see the code for this game, please go to https://github.com/robbie10001/CoinGameDemo

![GIF](/gifs/section15/coingame.gif)

#### JS FILE

![images](/images/section15/jsfile.png)

#### CSS FILE

![images](/images/section15/cssfile.png)

#### HTML FILE

![images](/images/section15/htmlfile.png)

### From Events and PrevantDefault

We are now going to talk about using forms. What if we want to do something when a user submits a form? 

When we using a form, the select tag, allows us to create drop-down boxes. What we are going to do is when we submit the form, we are not going to have it send a request. Instead, we are going to stop this behaviour from happening. We can then get that data we recieve when a user clicks the submit button and do something with it. For example, display it to the user, or sent some data to a database. 

![images](/images/section15/consoleloge.png)


We can do this using the event listener submit. 

The point is that we can stop, prevent default from a form submittion and then tap into the form or its inputs, get the values we want, and then do something else. WE could send form data to a database or apphend something to the page using form data, it's totally up to the developer but the process looks like what we have been discussing in this section. 

![images](/images/section15/eventsjs.png)

![images](/images/section15/eventshtml.png)

![GIF](/gifs/section15/valueof.gif)


### Input and Change Events 

Next up, we are going to look at the onInput and onChange methods. 

We can use these method in order to stay up to date with user input and change in real time.
For example, by creating an empty object and adding event listeners, we can capture user input in a data structure of our choosing. 

![images](/images/section15/formdata.png)

We have a in-sync representation of what is happening with our form. This enables us to do some really cool stuff. For example, we could use it to do credit card information authentication. For example, 

![GIF](/gifs/section15/cc.gif)

In this example, all the events are being trigged before the event takes place! This is the same thing we are doing with our example in our code, except it doesn't look as preety! 

![images](/images/section15/com.png)

![images](/images/section15/dom.png)

