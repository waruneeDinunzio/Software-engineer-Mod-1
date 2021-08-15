/*1.Create an Animal class. 
    1.The class will have name, age, color, legs, superPower attributes
    2.Create two objects of this class - both with a unique superPower

    3. create three methods for this class - include one method named useSuperPower()
    4.Create two objects for this class*/

    class Animal {
        constructor(name,age,color,legs,superPower){
            this.name = name
            this.age = age
            this.color = color
            this.legs = legs
            this.superPower = superPower
        }
        running(){
            console.log(this.name + " is running")
        }
        eating(){
            console.log(this.name + " is eating")
        }
        useSuperPower(){
            console.log(this.name + " has " + this.superPower+ " power!")
        }
    }
    const dog = new Animal("Mr.white",2,"black", 4, "fast speed run")
    //console.log(dog)
    //dog.userSuperPower()
    const cat = new Animal("Leo",4,"brown", 4, "jump super high!")
    const bird = new Animal("Hedwig",3, "snow",2,"deliver Anything for you")
    //bird.useSuperPower()
    const wolf = new Animal("Ghost",6,"white",4,"sensing enemy") 
    const snake = new Animal("Nakini",50,"black", 0,"can vanish")

/*
2.Create a class name User
    1. This class with have firstName, lastName, department attributes, a method name changeDepartment()
    2. Create three instances of this class = objects
    3. Change department for two of the instances => polymorphism
    4. Create three objects for this class */

class User {
    constructor(firstName,lastName,department) {
        this.firstName = firstName
        this.lastName = lastName
        this.department = department
    }
    changeDepartment(){
        console.log(this.department= "Software Engineer department")
    }
}
const warunee = new User("warunee","dinunzio","IT")
const john = new User("John","Snow","Night's Watch")
const robb = new User("Robb","Stark","King of the North")
console.log(john.department)
john.changeDepartment()
console.log(john.department)
