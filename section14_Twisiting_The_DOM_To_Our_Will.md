 

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

![images](/images/section14/innerText.png)


We can change our text, it's just another property on an object, and if we change it, the browser is going to update to reflex that. 

![images](images/section14/innerTexting.png)
Now this change is obivously only in the console. However, we could add it to a script and then it would run each time and we would see it. 

It is kind of silly to update the contents of a H1 whenever a new page loads. Why not just update the html? 

This is where events come in, in which we want to change information based on some sort of event taking place (a click or a hover for example). When can use innerText, when we want to update a heading for example. 

![GIF](gifs/section14/imhungry.gif)

#### textContent 

On the surface, textContent seems the same as InnerText. They seem identical. 

However this is not the case, if look at innerText, we are given just the text of our HTML, there is not formatting, we don't get information about our script. Its just the text. 

Howevever, if we put in p.textContent, we get the text, the formatting and it returns the text from our script.  Also, if we had something that was hidden within the paragraph, we can see it using textContent. 

![images](/images/section14/textContent.png)

### InnerHTML



### value, src, href, and more



### Getting & Setting Attributes 



### Finding parent/children/siblings



### Changing multiple elements 



### Altering styles 



### getComputerStyles



### Manipulating Classes




### Creating Elements



### Append, Prepend & insertBefore



### emoveChild & remove



### NBA Scores Chart PT1 




### NBA SCORE CHART REFACTOR



