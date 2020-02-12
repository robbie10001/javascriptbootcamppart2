console.log("----break----")

const personality = {
    first: "Bruce", 
    last: "McClure", 
    nickName: "Brucy Boy",
    fullName(){
//in a method, this refers to the object the method "lives" in:
        const {
            first, 
            last, 
            nickName
        } = this;
        console.log(`${first} ${last} AKA ${nickName}`); //Bruce McClure AKA Brucy Boy
//without a return, our factory(method) will not be producing anything! 
        return `${first} ${last}`
    },
    printBio() {
        console.log(this)//{ first: 'Bruce', last: 'McClure', nickName: 'Brucy Boy', fullName: [Function: fullName], printBio: [Function: printBio] }
        console.log(this.fullName())//Bruce McClure AKA Brucy Boy
        const answer = this.fullName()
        console.log(answer)//Bruce McClure
        console.log(`${answer} is a person!`)//Bruce McClure is a person! 
    }
}
personality.fullName()
personality.printBio()

console.log("---break---")