/*// Objects are a data set
// Have a key and a value
var car = {
    tires:4,
    make: "Honda",
    model: "Accord",
    color: "Black",
    VIN: 123456789101112
}
// console.log(car)
// Objects use dot notation
// To get data call the objects name and key for the value with a .
console.log(car.tires)
console.log(car.make)
// to create new keys 
car.year = "1999"
console.log(car)
car.owner = "Bob"
console.log(car)

// Object Inception
const adventurer = {
    name : "Tim",
    hitpoints: 10,
    belongings : ["Sword","Potion","Tums"]
}
console.log(adventurer.belongings[1])
// iterate over the array in the object
for(var counter =0; counter < adventurer.belongings.length; counter++){
 console.log(adventurer.belongings[counter])
}


const adventurer = {
    name: "Timothy",
    hitpoints: 10,
    belongings: ["sword","Potion","Tums"],
    companion: {
        name: "Velma",
        type: "Bat"
    }
}
//console.log(adventurer.belongings)

/*for (let i=0; i<adventurer.belongings.length; i++){
    console.log(adventurer.belongings[i])
}
adventurer.companion.name = "Susan"
console.log(adventurer.companion.name)
adventurer.companion2 = {
    name:"Pinser",
    type:"Insect",
    belongings: ["Scuba Tank", "Joe Rogan", "Health Insurance"]
}
console.log(adventurer)

// assigning a key to a variable
const monster = {
    name: "Harry",
    action: "Boo!"
}
const someName = "name"
monster.name 
console.log(monster[someName])
*/

// Array of objects
/*
var movies = [
    {title: "Paul Blart"},
    {title: "Get Hard"},
    {title: "Mortal Kombat"}
]
console.log(movies[1].title) //Get Hard
console.log(movies[0])//title: "Paul Blart"

movies.map(
    (objectInTheArray) => {
        console.log(objectInTheArray.title)
    }
)*/

const movie = {
    title : "The Matrix",
    genre: "Sci-Fi",
    year: 2000

}

for (let key in movie) {
    console.log(key) // title /genre /year
    console.log(movie[key]) //"The Matrix /Sci-Fi /2000"
}
//title/ The Matrix/ genra/ Sci-Fi/ year/ 2000

// this is example to make function
var cars = ["Honda"]
var add= (newItemInArray)=> {
    cars.push(newItemInArray)
    console.log(cars)
}
add("Toyota")
add("Mazda")