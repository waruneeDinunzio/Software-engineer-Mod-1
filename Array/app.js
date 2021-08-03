//var foods = ["Beef", "Elk","Fish"]
//console.log(foods[0])
// Array is a set of data
// Arrays in JS can take any data type
// Arrays start @ 0
// var nameOfTheArray = [];
//var foods = ["Beef","Elk","Fish"]
// console.log(foods)
// console.log(foods[2])
// Array Methods
// .pop() removes the last element from the array
// foods.pop()
// console.log(foods)
// 
// .push() adds things onto the end of the array
// foods.push("Oranges")
// console.log(foods)
// .shift removes the first element in the array
// foods.shift()
// console.log(foods)
// .unshift adds onto the start of the array
// foods.unshift("apples")
// console.log(foods)
// .length gives how many elements are in the array 
// foods.length
// console.log(foods.length)

var cars = ["BMW","Nissan","Sable","Honda","Toyota"]
/*for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}
*/
/*
cars.map((itemInTheArray)=> {
    if(itemInTheArray=="BMW"){
        console.log("We have a BMW in the array")
    }
})

cars.map((item)=>{
    console.log(item)
})
*/
// .map()
// .map maps over the array and does a function for each element in the array
cars.map( (itemInTheArray)=>{
    if(itemInTheArray == "Toyota"){
        console.log("We have a beamer")
    }else{
        console.log(itemInTheArray)
    }
   } )