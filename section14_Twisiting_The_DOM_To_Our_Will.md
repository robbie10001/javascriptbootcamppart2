 

### Working With InnerText & textContent

Now that we have seen how to select elements, we usually want to use them. 
Manipulation is not exactly the best term, some times we will be manpulating elements (like changing colors), but other times we are just accessing data. What is the contents of this div? What number did the user just click on? 

We can narrow down the most important properties and methods of the dom that we need to know. 

 ![images](/images/section14/listofdompropertiesandmethods.png)

These are the methods and properties that 95% of the time, we end up using. We use these to style elements, create new elements, change attributes, add class to an element, or remove a class from an element. There are so many different things that we can do. Using just these properties, we can by using the DOM. 

In this section, we are going to go through these properties and methods peace by peace. 

In this video, we are going talk about access text from an element. How do we get the contents from an element? 

#### innerText 

When we use innerText on an element, we get all of the text inside of it. 

It doesn't matter how many elements deep it is, or nested, it takes out all the text. 

![images](images/section14/text.png)

We can change our text, it's just another property on an object, and if we change it, the browser is going to update to reflex that. 

![images](images/section14/innerTexting.png)
Now this change is obivously only in the console. However, we could add it to a script and then it would run each time and we would see it. 

It is kind of silly to update the contents of a H1 whenever a new page loads. Why not just update the html? 

This is where events come in, in which we want to change information based on some sort of event taking place (a click or a hover for example). When can use innerText, when we want to update a heading for example. 

![GIF](gifs/section14/imHungry.gif)

#### textContent 

On the surface, textContent seems the same as InnerText. They seem identical. 

However this is not the case, if look at innerText, we are given just the text of our HTML, there is not formatting, we don't get information about our script. Its just the text. 

Howevever, if we put in p.textContent, we get the text, the formatting and it returns the tefxt from our script.  Also, if we had something that was hidden within the paragraph, we can see it using textContent. 

![images](/images/section14/textContent.png)

### InnerHTML

Is going to retrieve, not only the text inside an element, but also all other tags within a given element.

For example, if we selected a form: 

form.InnerHTML we would recieve, all the elements contained within that form as a string.  

We get everything from one tag to another tag. 


![GIF](gifs/section14/forminnerhtml.gif)

If user InnerHTML, we get all of the content within our search paramaters. This is very different to our innerText works. We are given the html syntax, any css and so on when we use InnerHTML

![images](/images/section14/innerhtmlinnertext.png)


We can use innerHTML, to change the contents between our two tags if we wanted to. We can also had HTML elements im using innerHTML as a string. 

InnerText, textContent, innerHTML, all these methods return strings. 

If we don't wanted to completely overide what elements we have in our DOM currently, we can use += to add other elements in. It is not that often that we would use this, but we can. 

There is also a difference between innerHTML and innerText when we set them. We have already seen the difference when we retrieve them. 

![images](/images/section14/innertext.png)

If we wanted to add a tag into our H1 tag (My Webpage) and we used innerText, they would not be read as a new element. Instead they would be seen as new text. Whereas, if we used innerHTML, it would be understood that this is a new tag and would be rendered the way we would like. 

![images](/images/section14/textinner.png)

If we are trying to add an element we need to use innerHTML.

With innerText, we cannot actually add new elements. 

### value, src, href, and more

These properties are grouped together as we can directly, access on individual elements. 

#### Value 

When we have a form and we want to retrieve the text input or some value from within the form, we have an attribute that allows us to achieve this. This attribute is value. 

value is how we can get the value out of a form. 

Usually, the way that we change input value, is to reset it to an empty string. This is like a search bar. Once you type it in an press enter, some new stuff loads, and you are taken to a new page, but then the search bar becomes empty again. 

![images](/images/section14/value.png)

That is value and checked, we also have direct access to placeholder. We can change placeholder directly, although this is not that common. This is how we can work with inputs. 

#### href 

The href tag allows us to link of our images, and also change the links that we have within our page. 

![images](/images/section14/href.png)

### src 

If we wanted to change our image we could do so through altering our images sources! 

![GIF](/gifs/section14/src.gif)

We have these different attributes that we can access directly through the DOM. 

### Getting & Setting Attributes 

We are going to look at two methods in this section.

1. getAttribute()
2. setAttribute()

They do exactly what they sounds like. They allows us to access or to change, the value of attributes on elements. 

We have seen a couple of shorthand ways to access attributes, but there are others that done have shorthand methods so we use getAttribute() and setAttribute(). 

With getAttribute(), we pass in the attribute we are looking for on the element we are calling it on and it gives us the value. If we look for a value that doesn't exist we get null. 

![images](/images/section14/getattribute.png)

The other method we can use is setAttribute.If our example, range.setAttribute takes two arguments. The thing we are trying to set, and the value we are assigning to it.  

![images](/images/section14/setattribute.png)

setAttribute allows us to change the value of our attributes. We will use setAttribute often. We can also use setAttribute to change the type of our input for example. In these way, it's quite powerful. 

If there is ever an attribute you want to update or get access to, getattribute() and setattribute() our our methods. 

### Finding parent/children/siblings

In the section we will be looking at ways to access th parent, children, sibiling elements. This allows us to access elements that are close in scope to each other. This is particularly useful when we are dealing with events. 

For example, a user my click something, and based off that click, we would have an element selected and we want to then select some other element based of this other element. 

#### Parent 

![images](/images/section14/parentElement.png)

We can use our parent elements to work backwards, back up the tree, and find a parent element from any given element. 


#### Children 

This is the opposite of parent, it allows us to work downwards through our tree. We are able to find the child elements of any given element that we have selected. 

![images](/images/section14/children.png)

#### Siblings 

By accessing sibling elements, we are able to access elements that share a parent and are on the same level within our tree. 


![images](/images/section14/nextsibling.png)

### Changing multiple elements 

In this section, we are going to talk about how we can use, what we have already learn't on multiple elements. Everything we have done so far has been one element at a time. 

However, often we want to affect changes on multiple elements. 

And we already know how to select multiple elements. We can use querySelectorAll, getElementsByClassName, getElementsByTagName. These methods give us an array like object, so all we need to do is iterate through this object, and change whatever property that we want. 

Firstly,  we have created a new script, that will run once our file runs. Secondly, we delcare a variable and assign to it all the values in our HTML that contain the "li" property. We when create a loop and console.log our the results of all innerText within our pages li properties. 

![GIF](/gifs/section14/multipleelements.gif)

If we want to change the value of all of these li elements we can do the follow within our loop. 

allList[i].innerText = "We are the Champions". 

This now updates every li element within our page to the value of "We are the Champions". We can also do this using a for of loop, which is actually the better way to achieve this result. 

This is the common pattern of how we change multiple elements. We select a group of things, and iterate through them and change the value. 

We can also changed styles, access and set attributes, we can do all sorts of things but the pattern remains the same with the use of a loop! 

### Altering styles 

In this section we will address how we alter CSS properties using Javascript and the DOM. 

Every element that we select. has a style property. 

We can use the style property to change styles or colours for example, however, if we are trying to use the style property to read existing properties and styles, it won't work unless those styles are defined inline (which is not how we use css). 

In JavaScript, our property names are CAMELCASED within the DOM. 

![images](/images/section14/alteringstyles.png)

For example, in our CSS file we could have text-align. However, to access this through the DOM we would instead look for textAlign. 

While this is okay, there is a better way to do it, especially when we want to change a number of properties on a number of elements. 

We can use a loop like we did in the previous section, if we want to change the styling on an element type throughout our page. For example, if we want to change every "li" element on a page. 

![GIF](/gifs/section14/alteringstyled.gif)


### getComputerStyles

In the video, we are going to look at a different way of accessing style values.  We are not going to set a value, instead we are going to retrieve what the current value is of a CSS element. 

If we want to get the computed values of styles (what i mean by this is the value that are held within our CSS file) we have a method called getComputedStyle. 

with getComputedStyle, we pass in an element that we have selected. In this case we are selecting the "li" elements and saving them to a variable. 

We then pass it into getComputedStyle. For example, 

const styles = getComputerStlye(li)

This returns to us an object, called a CSS style declaration, and if we open it up, we see a ton of properties, most of the values in this are the default values assigned by our browser. It holds all the possible properties for our CSS element and all their current values. 

![images](/images/section14/getComputed.png)

### Manipulating Classes

Here we are going to see a much better way for us to add multiple styles at once. 

Imagine that we want to apply radical changes to our elements. The best way to achieve this is through the use of classes. 

We define our classes within our CSS folders, using . (dot) notation. Within our class, we input the properties that we want to exist within that class. 

The best approach to do this is to use the classList property. Class list is an object representation, a DOM token list, and it contains the classes that exist on a given element. Not only does it provide a way for us to view these classes, the classList property has methods attached to it that allows us to change things. 

![GIF](/gifs/section14/classes.gif)



### Creating Elements

We are going to look at how we can create elements from scratch and add them or insert them into the DOM. 

For example, we could create an image, give it a source, and put it somewhere within the page. 

The first step, is to make an element and we can achieve this through the createElement method. 

For example,

document.createElement("h2")

This returns, 

<h2></h2>

This is all we get, it creates an empty element for us. However, if we save this to a variable, and we log it, we can see that what we've really created is an object. So far, all we have done is created an element. 

![images](/images/section14/creatingelementsstep1.png)

If we want to put some content in this element, that is a new step. 
We can achieve this the following way. 

newh2.innerText = "I like animals"

Now, we have assigned the value of "i like animals" to our newh2 variable. 

![images](/images/section14/creatingelementspart2.png)

We can continue to manipulate it, for example we can add a class to our h2 element. For example, 

newh2.classList.add("special")

This returns 

<h2 class="Special">I like animals!</h2>

The questions becomes, how do we get this into the DOM? How do we get this to show up for us? How do we get it out of the Javascript console and make it useable for us? 

What we need to do, is select an element that we can apphend it to. We can achieve this through the use of methods! 

For example, appendChild() 

appendChild() is a method that we call on a parent that we want to apphend an element into. For example, if we want to apphend our H2 tag into our SECTION within our HTML file. We would do the following, 

const section = document.querySelector("section")
section.appendChild(newh2)

This now connects our new element into the DOM, through make it a child of our section attribute. 

When we append an attribute using appendChild, it will take a position at the end of the children attributes. 

![images](/images/section14/appchild.png)

We also have the ability to make all sorts of new elements. For example we can make an image using the DOM. 


######  In our app.js file we do the following 

const newImg = document.createElement("img")
newImg.src = "ADD IMAGE URL"
document.body.apprendChild(newImg)

When we look inside the DOM now, we can see that we have a new image, that is now being displayed on our webpage at the end of the body! 

We could also give our image an inline style. 

###### app. js 

newImg.style.width = "300px"; 


As an other example, lets make a new anchor tag.


###### app.js 

const newLink = document.createElement("a"); 
newLink.innerText = "Robbie's Video! Click Me!";
newLink.href = "https://wwww.youtube.com/watch?v=QQNL83fhWJU"; 

const firstP = document.querySelector("p"); 
firstP.appendChild(newLink);

This creates a new link for us that is apphended as a child of the paragraph. 


We can create elements of any type, fill them with content and do a whole bunch of other stuff! 


### Append, Prepend & insertBefore

We are going to look at a few more methods we can use to add elements to the DOM. We will also talk about removing elements from the DOM. 

When we used apphendChild the element that we added in became the last element where we apphended it. But what if we wanted to append our element to the beginning? Or if we want it to go in the middle? 

In order to do this, we can use the method insertBefore! 

#### insertBefore. 

In order to use insert before, we need to select the parent, as well as the sibling element we want to apphend our element in front of. 

For example. if we want to insert an element as the first element in our LI attributes, we would do the following. When adding in the new element, we pass two arguments. The first is what we are changing, the second is where we are changing. 

![images](/images/section14/insertbefore.png)

#### insertAdjacentElement()

This is a method, that is a bit more complicated. We pass in an element, we must have a target element, but then we also pass in a position which is a string. We have four choices. 

1. "beforebegin" - before the targetElement itself. 
2. "afterbegin" - Just inside the targetElement, before its first child. 
3. "beforeend" - Just inside the targetElemt, after its last child. 
4. "afterend" - After the targetElement itself. 

![images](/images/section14/positionnames.png)

Here we have an example, of insertAdjacentElement in action, just below the H1 tag on the homepage. 

![images](/images/section14/insertAdjacentElement.png)

#### Append, Prepend 

Append and Prepend are two newer methods. They don't work in internet explorer. They are a little bit simplier. 

Append is different from appendChild in that we can change multiple elements at once. 

![images](/images/section14/append.png)

#### Prepend 

This is the same idea of append, but will make something a first child. It will put the element at the beginning of its siblings. 


### RemoveChild & remove

In this section we are going to look at removeChild() and the remove() methods. 

These methods remove a method that we place in. 

#### removeChild 

To use removeChild, we need to find the parent of what we are trying to remove and find the item of what we are trying to remove. 

The pattern for remove child is the parent, removeChild and then the child, for example, 

ul.removeChild(removeMe)

![images](/images/section14/removechild.png)


#### remove 

remove is not supported in internet explorer. The remove method does not need the parent, all we need to do is select the target, and then call remove on the actual item that we want to remove. 

![images](/images/section14/removemethod.png)


### NBA Scores Chart PT1 

This is what we are able to render to the DOM. 

![images](/images/section14/goldenstate1.png)

We are able to achieve this, using the following code. 

![images](/images/section14/code1.png)
![images](/images/section14/code2.png)
![images](/images/section14/code3.png)

### NBA SCORE CHART REFACTOR

We can refactor the above code to make it more useful and resuable. 

![images](/images/section14/goldenstate2.png)
![images](/images/section14/refactored1.png)


