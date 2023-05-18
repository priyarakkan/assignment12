// STEP 1

function Cat(){
    this.name='nixon'
    this.color='snow white'
}
const myCat = new Cat()
console.log(myCat.color)
const Dog = function(){
    this.name='blacky'
    this.color='brown'
}
const myDog = new Dog()
console.log(myDog.color)

// STEP 2

class Cat1{

}
const cat1 = new Cat1()
class Dog1{

}
const dog = new Dog1()

// STEP 3

class Animal{
    constructor() {
        console.log(`The Animal has been created`)
    }
}
const animal = new Animal()

// STEP 4

class Animal1{
    constructor(name) {
        this.name = name
        console.log(`The ${this.name} has been created`)
    }
}
const animal1 = new Animal1('Cow')

// STEP 5 check

class animal3{
    constructor(type, breed, color, height, length){
    this.type=type
    this.breed=breed
    this.color=color
    this.height=height
    this.length=length
    console.log(`The new ${this.color} ${this.breed} ${this.type} cat was in ${this.lenght} length and ${this.heigth} height.`)
}
}
const animal2 = new animal3('nixon','bengal','snow white','2ft','3.5ft')
// STEP 6

let list
for (list in animal2)  {
    console.log(`${animal2[list]}`)
}

// STEP 7

class speak {
    constructor(animal, color) {
        this.animal = animal
        this.color = color
    }
    check = function() {
        if(this.animal == 'dog') {
            console.log(`The ${this.color} dog is barking!`)
        }
        if(this.animal == 'cat') {
            console.log(`The ${this.color} cat is meowing!`)
        }
    }
}
const animal4 = new speak('cat', 'white')
const animal5 = new speak('dog', 'black')
animal4.check()
animal5.check()

// STEP 8

function checkType(type){
    this.type = type
}
checkType.prototype.displayType = function(){
    if(this.type == 'dog') {
        console.log(`The ${this.type} has made a noise!`)
    } if(this.type == 'cat') {
        console.log(`The ${this.type} has made a noise!`)
    }
}
const animalType = new checkType('dog')
console.log(animalType.type)
animalType.displayType()


// STEP 9

//Create your own String method called findWords that 
//inherits from the native String Object. 
//This method should find all instances of a specific word 
//within a provided paragraph of text. 
//It should then alert out to the user the number of time 
//that word was found in the paragraph. 
//Remember, you’ll need to add your method to the String object’s prototype

class findwords{

}