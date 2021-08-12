/*OOP - Inheritance 

Create a class called Fish 
Define a method Swim( )
Create a class Nemo that inherits from Fish
Define an attribute color
Create a Nemo object. Can it swim? 
Find the difference between abstract class and an interface
Which of the two can have implementation of a method in the class?*/
// super class when we create subclass
class Fish {
    constructor(color){
        this.color = color
    }
    swim() {
        console.log("keep swimming...")
    }
}
//inheritance

class Nemo extends Fish { //subclass
// takes in it's parents attributes and methods
constructor(color) {
    super(color) // refers to the parent superclass
    this.speed = "slow"
}
// polymorphism - when we instantiate a class er take in it's parents attributes and methods
// purpose - we can then add extra things to out class Nemo

//override methods from parent methods
swim() {
    console.log("I can swing slowly")
}
}

const ramsey = new Fish()
//ramsey.swim()
const teo = new Nemo("orange")
console.log(teo.color)
teo.swim()
//teo.speed() //speed is not function
console.log(teo.speed)