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


### addEventListener 


### The Impossible Button Demo


### Events on Multiple Elements 


### The Event Object 


### Key Events: keypress, keyup & keydown 


### Coin Game Demo 


### From Events and PrevantDefault 


### Input and Change Events 
