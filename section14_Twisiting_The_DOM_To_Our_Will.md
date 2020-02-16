 

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



