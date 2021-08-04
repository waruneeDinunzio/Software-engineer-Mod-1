/*OOP - Classes: Model a vending machine

 

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
var vendingMachine = new Machine("Lay","2.99","Dorito", "2.99", "Sun chips", "2.99")
vendingMachine.vend()