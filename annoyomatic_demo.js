/*
const suits = ["hearts", "diamonds", "spades", "clubs" ];
const values = "1,2,3,4,5,6,7,8,9,10,J,Q,K,A"

const mainDeck = makeDeck()
function makeDeck() {
    
    const deck = [];
    const suits = ["hearts", "diamonds", "spades", "clubs" ];
    const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";
    for (let value of values.split(",")) {
        for (let suit of suits) {
            deck.push({
                value,
                suit
            })
        }
    }
   console.log(deck.length) //52 //52
    return deck;
}


function drawCard() {
    return mainDeck.pop()
    

}

const myDeck = makeDeck();// gives an array with 52 objects containing a value and a suit for each card. 
const card1 = drawCard(myDeck); // {value: "A", suit: "clubs" }
console.log(myDeck)

makeDeck()
*/


const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ["hearts", "diamonds", "spades", "clubs" ],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
    initializeDeck(){
        const {
            suits, 
            values, 
            deck
        } = this;
            for (let value of values.split(",")) {
                for (let suit of suits) {
                    deck.push({
                        value,
                        suit
                    })
                }
            }
        //return deck;
    },
    //this method removes a single card from our deck of cards. 
    drawCard(){
        const card = this.deck.pop()
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(numCards){
        const cards = [];
        for(let i = 0; i < numCards; i ++) {
            cards.push(this.drawCard());
        }
        return cards
    },
    //WE define a method called shuffle.
    shuffle() {
        const {deck} = this;
    //we then create a for loop and we loop through the array backwards. 
//we start at the end of the array, and pick a random index before the end of the array and we swap the two. 
//we are shuffling from the back moving towards the front.  
        for (let i = deck.length - 1; i > 0; i--) {
            //pick random index before current element
            let j = Math.floor(Math.random() * (i + 1));
            //swap
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
}

myDeck.initializeDeck()
myDeck.drawCard()
myDeck.drawMultiple(6)
myDeck.shuffle()
const card1 = myDeck.drawCard() 

console.log("===WHAT IS THE VALUE OF CARD 1===")
console.log(card1)//{ value: '3', suit: 'diamonds' }
console.log("===WHAT IS THE VALUE OF MY DECK AFTER POPING OFF A CARD?)
console.log(myDeck.deck)//We now have 51 cards, in random order. 
console.log("===HOW MANY CARDS DO I HAVE LEFT?")
console.log(myDeck.deck.length)////44 cards left after we take our cards off and put into the other array.
console.log("===WHAT IS THE VALUE OF MYDECK.DECKCARD()")
console.log(myDeck.drawCard())//{ value: '4', suit: 'hearts' }
console.log("===THE CARDS THAT WE HAVE DRAWN IN NEW ARRAY")
console.log(myDeck.drawnCards)//{ value: 'A', suit: 'clubs' },{ value: 'A', suit: 'spades' },{ value: 'A', suit: 'diamonds' },{ value: 'A', suit: 'hearts' },{ value: 'K', suit: 'clubs' },{ value: 'K', suit: 'spades' },{ value: 'K', suit: 'diamonds' },{ value: '5', suit: 'spades' },{ value: '4', suit: 'hearts' }
console.log("===WHAT ARE THE 6 CARDS THAT I'M DRAWING?")
console.log(myDeck.drawMultiple(6))//[ { value: 'J', suit: 'clubs' },{ value: '6', suit: 'hearts' },{ value: '8', suit: 'spades' },{ value: '4', suit: 'clubs' },{ value: '10', suit: 'spades' },{ value: '9', suit: 'spades' } ]
console.log("HAVE WE SHUFFLED OUR CARDS?")
console.log(myDeck)//All of our cards have now been shuffled! 


