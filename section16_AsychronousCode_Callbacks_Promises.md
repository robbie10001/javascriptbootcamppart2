
### Our goals for this section

1. Make http requests from JS from our browser(client), loading data from an api and sending the request somewhere. This stuff is something we do all the time. 
2. We will talk about async code, what it means and in order to do that, we need to understand how JS works behind the scenes. 
3. We will understand promises and how we use promises to manage asynchronous code, and make our life easier. 

### THE CALL STACK 

The call stack is a tool of Javascript which is seen in tons of different programming languages. Its function is that it help JS keep track of where it is within our code. If we have a number of functions and some of the functions may call other functions, the call stack is the mechanism the JS interpreter uses to keep track of its place in a script. Its how "Knows" what function is currently being run and what functions are called from within that function, etc. 

If we use the analogy of a book, the callstack is like the bookmark which shows us where we are in that book. It helps us keep track of our current place. 

The 'stack' in call stack has to do with a data structure in computer science called a stack. A stack is a very simple data structure, all we need to know is that just like a stack of books on a desk, the last thing we put in is going to be on top and that will be the first thing that we remove. 

 ![images](/images/section16/firststack.png)

 When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function. Any functions that are called by the function are added to the call stack further up, and run when their calls are reached. When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing. 

For example, in the below example, we have three different functions, the first one called is named isRightTriangle. isRightTriangle, accepts three different arguments (a,b,c), and it returns true if the square of a + b is equal to the square of c. For example 3x3=9 4x4=16(25) 5x5=(25) therefore, the below example is true. 

![images](/images/section16/firstexample.png)

isRightTriangle, is not a function that just returns something immediately. Instead it needs to call other fuctions (square) which itself needs to call the (multiply) function. 

When the interpreter encounters the very first function call, isRightTriangle(3,4,5), its added to the callstack, and we then hit the multiple function calls held within isRightTriangle, square(a/3) will be the first thing added to the callstack, this function calls another function (multiply x/3, x/3). Multiply is then added to the stack, and from multiply (3 x 3) we get 9. 

So when the multiply function with the value of 9 is run, this completes this function. It is then removed from the stack, the square(9) function is then completed and removed from the stack, followed by the isRightTriangle square(a) function call. This process repeats for square(b) and square(c) until we have finished all our function calls within isRightTriangle, it is then removed from the call stack.

In the end we end up with isRightTriangle(3,4,5) 9 + 16 === 25 true, so we return. 

The first thing into the callstack is the last thing out out of call stack. 


### Call stack debugging with dev tools 



### JS is single threaded 



## How Asychronous Callbacks Actually Work 



### Welcome to Callback Hell 



### Introducing Promises! 



### Returning Promises from Functions 



### Resolving/Rejecting with values 



### The Delights of Promise Chaining 



### Refactoring with Promises 





