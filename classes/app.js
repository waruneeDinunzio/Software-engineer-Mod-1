// Classes are use to create multiple objects
// Keep code DRY

class Person {
    constructor(nameParameter,ageParameter,genderParameter){
       this.name=nameParameter;
       this.age=ageParameter;
       this.gender=genderParameter
       
    }

    greet(){
    console.log("what's up " + this.name)
    }
}

var Me = new Person("Tory",31,"male")
console.log(Me)
Me.greet()


/* this is an example using class Person

var Jeff = new Person("Jeff"," ","Male" )
Jeff.gender = "Male"
console.log(Jeff)
console.log(Jeff.name)
console.log(Jeff.gender)
*/
/*
class Animal{
    constructor(speciesPar, bloodTpePar, dietPar, colorPar) {
        this.species = speciesPar,
        this.bloodType = bloodTpePar,
        this.diet = dietPar,
        this.color = colorPar
    }
}

var lizard = new Animal("Bearded Dragon", "Cold-Blooded", "Omnivore", "Sandy-color")
lizard.name = 'Zero'
console.log(lizard)
var monkey = new Animal("Bearded Dragon", "Cold-Blooded", "Omnivore", "Sandy-color","Ling")
console.log(monkey)
monkey.name = "Ling"
console.log(monkey)*/

class Dog{
    constructor(name,color,breed){
        this.name = name
        this.age = "Six Months"
        this.color = color,
        this.breed = breed
    }
    running(){
        console.log(this.name + " is running")
    }
    eating(){
        console.log(this.name + " is eating")
    }
    barking(){
        console.log(this.name + " is barking")
    }
}

var Spot = new Dog("Spot","Brown","Lab")
Spot.age = "2 Years"
console.log(Spot)
var Miles = new Dog("Miles", "Brown", "Flemish Giant")
Miles.barking()