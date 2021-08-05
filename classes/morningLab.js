/*
OOP - Classes: Model a vending machine
When we wanted to access snacks within our object we had to put the name of the object in it to access the snacks

a vending machine is an object
it has an array of snacks (make 3 snacks)
snacks are objects that have a name and a price
a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
Be able to call vendingMachine.vend() with a valid integer to return a snack
*/
class Machine{
    constructor(snacks1,price1,snacks2,price2,snacks3,price3) {
        this.snacks1 = snacks1,
        this.price1 = price1
        this.snacks2 = snacks2
        this.price2 = price2
        this.snacks3 = snacks3
        this.price3 = price3
    }
    /*class Snacks {
        /constructor(name,price){
            this.name = name,
            this.price = price
        }
    }*/
    vend(num){
    var snacksArray = [this.snacks1 + " $"+ this.price1, this.snacks2 +" $" + this.price2 ,this.snacks3 + " $" +this.price3]
    console.log(snacksArray)
    if (num == 1) {
        console.log(snacksArray[0])
    }
    if (num == 2){
        console.log(snacksArray[1])
    }
    if (num == 3) {
        console.log(snacksArray[2])
    }
    }
}
var vendingMachine = new Machine("Lays","2.99","Dorito", "2.99", "Sun chips", "2.99")
vendingMachine.vend(1)

/*This is Tory's code in class

// create a class/template for a new vending machine
// we are able to give it a name and a type
// create snacks object array if you want to give a variable name you have to declaer them first like this>
let snack1;
let snack2;
let snack3;
class Machine  {
    constructor(name,type){
        this.name=name,
        this.type=type,
        this.snacks=[
            snack1 = {      //you can take "snack1 =" out if you just want to create array of object and it's useless to create it
               name:"Apple",
                price: 1.00,
            },
            snack2 = {
                name:"Orange",
                price: 1.00,
            },
            snack3 = {
                name:"Pear",
                price: 1.25,
            }
        ]
    }
    vend(snackNumber){
        console.log("You selected " + this.snacks[snackNumber].name + " " +
         " The price is " + this.snacks[snackNumber].price)
         //console.log("You selected " + snack1.name)
    }
}
// creating a new vending machine based off of the template or
// class that we created by using the keyword new
var vendingMachine = new Machine("Feed-Me-Fast","Healthy")
var snackMachine = new Machine("Snack-Machine","Non-healthy")
console.log(snackMachine)
snackMachine.vend(2)
*/