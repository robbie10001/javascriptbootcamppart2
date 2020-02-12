

//we create an object 
const annoyer = {
//within this object we have an array (phrases) which contain a number of different values.
    phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
//within the parent object, we also create a method. 
    pickPhrase() {
//we use distructuring to get this.phrases as phrases. 
        const {phrases} = this;
//when then create a variable (idx) which goes through each element of our phrases object and picks one at random.
        const idx = Math.floor(Math.random() * phrases.length);
//we then console.log a random element of the phrases object. 
        console.log(phrases[idx])//iteration 1: YOLO, //iteration 2: literally, //iteration 3: Can't stop won't stop
        return (phrases[idx])
    },

    start() {
        console.log(this.pickPhrase())
        setInterval(function() {
            console.log("Not dry code!")//every three seconds,  "not dry code" is run in the console. 
        }, 3000)
    }
}

annoyer.pickPhrase()
annoyer.start()


/*
const annoyers = {

        phraser: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
        pickPhraser() {
            const {phraser} = this;
            const idx = Math.floor(Math.random() * phraser.length);
            console.log(phraser[idx])
        },
    
        starter() {
            setInterval(function() {
  //HOWEVER, IF WE TRY AND CALL THIS.PICKPHRASE(), WITHIN OUR SETINTERVAL FUNCTION, EVERYTHING BREAKS! 
  //WE GET A TYPEERROR: THIS.PICKPHRASE IS NOT A FUNCTION.
  //This is because within our function the value of THIS is set globally!. 
  //The question becomes, why in the previous example, THIS is set to the object, whereas within the setInterval function it is set globally?
  //the answer is that THIS changes depends upon where its called! 

  //we are executing starter  by ourselves as a method. annoyer.start()
  //however, the setInterval function is not being called by us. Instead its is being called by setInterval itself every three seconds. 
  //the meaning here is that THIS is set globally as a result! 
  //All of this has been setup to talk about arrow functions. 
                console.log(this.pickPhraser()) //typeerror: this.pickPhraser() is not a function! 
            }, 3000)
        }
    };

    annoyers.pickPhraser()
    annoyers.starter()
*/

/*

    const annoying = {

        phrasing: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
        pickPhrasing() {
            const {phrasing} = this;
            const idx = Math.floor(Math.random() * phrasing.length);
            console.log(phrasing[idx])
        },
    
        starting() {
            setInterval(function() {
  //HOWEVER, IF WE TRY AND CALL THIS.PICKPHRASE(), WITHIN OUR SETINTERVAL FUNCTION, EVERYTHING BREAKS! 
  //WE GET A TYPEERROR: THIS.PICKPHRASE IS NOT A FUNCTION.
  //This is because within our function the value of THIS is set globally!. 
  //The question becomes, why in the previous example, THIS is set to the object, whereas within the setInterval function it is set globally?
  //the answer is that THIS changes depends upon where its called! 

  //we are executing start by ourselves as a method. annoyer.start()
  //however, the setInterval function is not being called by us. Instead its is being called by setInterval itself every three seconds. 
  //the meaning here is that THIS is set globally as a result! 
  //All of this has been setup to talk about arrow functions. 
                console.log(this.pickPhrase())
            }, 3000)
        }
    };

    annoying.pickPhrasing()
    annoying.starting()

*/
console.log("USING ARROW FUNCTIONS")

const annoys = {
    //within this object we have an array (phrases) which contain a number of different values.
        phrasess: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
    //within the parent object, we also create a method. 
        pickPhrases() {
    //we use distructuring to get this.phrases as phrases. 
            const {phrasess} = this;
    //when then create a variable (idx) which goes through each element of our phrases object and picks one at random.
            const idx = Math.floor(Math.random() * phrasess.length);
    //we then console.log a random element of the phrases object. 
            console.log(phrasess[idx])//iteration 1: YOLO, //iteration 2: literally, //iteration 3: Can't stop won't stop
            return phrasess[idx]
        },
    
        starts() {
            console.log(this.pickPhrases())
    //If we use an arrow function here, we avoid the problems we have been having fully! 
    //arrow functions don't get their own THIS. The value of THIS in an arrow function will not change from that of its parent or it's closest THIS.
    //Because of that fact, the THIS we get in our setInterval arrow function is the THIS we get from STARTS!
    //Sometimes arrow functions are better to use because we don't want a new THIS! 
    //The other side of this coin is that they suck as regular methods on an object because you don't get access to THIS referencing the object. It's reference is global
            
    //this.timerId now gives us a    added a new property called timerId to our annoyer object. 
            this.timerId =setInterval(() => {
                console.log("We the greatest!")//every three seconds,  "not dry code" is run in the console. 
            }, 3000)
        },
        //we create another method. 
        stop() {
            //we call clearInteval which takes an id. Which we get from this.timerId
            clearInterval(this.timerId)
            console.log("THANK GOD IT'S OVER!")
        }
    }
    
    annoys.pickPhrases()
    annoys.starts()
    annoys.stop()







