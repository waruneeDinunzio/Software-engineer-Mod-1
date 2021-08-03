// Es5 Function
// 1. use the keyword function
// 2. give that function a name 
// 3. create parameters
// 4. to use the function. You must make a function call ie => invoke the function
// 5. fill our parameters with arguments
/*function addition(x,y){
    var z = x+y
    console.log(z)
 }
 console.log(z)
 // addition(5,7)
 // addition(3,7)
 // addition(6,7)
 
 function addThreeNum(a,b,c){
     var answer = a+b+c
     console.log(answer)
 }
 addThreeNum(1,2,3)
 */

 // Es6 Arrow function
/*var subtraction=(x,y)=>{
    var z = x-y
    console.log(z)
}
subtraction(7,10)
//
var change = (paid, total) => {
    var change = 0;
    var quarters = 0;
    while (change !== (paid - total)) {
        change += .25;
        quarters += 1;
    }
    return quarters;
}
const quarters = change(20, 2);


var cookieChallenge=(cost,bill)=>{
    var quarter = 4
    console.log("your changes are " + (bill-cost)*quarter + " in quarter!")
}
cookieChallenge(4,20)
cookieChallenge(2,20)
*/

var cashRegister=(cost,bill)=>{
    let fiftyBill = 50
    let twentyBill = 20
    let tenBill = 10
    let fiveBill = 5
    let oneBill = 1
    let quarter = .25
    let dime = .10
    let nickel = .05
    let penny = .01
    if (cost > bill) {
        let youOwer = cost - bill
        console.log("Plese pay $" + youOwer + ".");
    }
    if (bill > cost) {
        let changes = bill- cost
        while(changes > 0) {
            while (changes>fiftyBill) {
                changes -=fiftyBill
                console.log(changes)
            }  
            while (changes>twentyBill){
                changes -= twentyBill
                console.log(changes)
            } 
            while (changes>tenBill) {
                changes -= tenBill
                console.log(changes)
            }
            while (changes>fiveBill) {
                changes -= fiveBill
                console.log(changes)
            }
            while(changes>oneBill) {
                changes -= oneBill
                console.log(changes)
            }
            while (changes>quarter) {
                changes -= quarter
                console.log(changes)
            }
            while (changes>dime) {
                changes -= dime
                console.log(changes)
            }
            while (changes>nickel) {
                changes -= nickel
                console.log(changes)
            }
            while (changes>penny) {
                changes -= penny
                console.log(changes)
            }
        }
    }
}
cashRegister(10,100)

var register=(paid,cost)=>{
    totalchange = paid-cost
    change = paid-cost
    fitties = 0
    dubz = 0
    tens = 0
    fives = 0
    singles = 0
    qrts = 0
    dimes = 0
    nicks = 0
    pennies = 0
    while(change>=50){
        change-=50
        fitties+=1
    }
    while(change>=20){
        change-=20
        dubz+=1
    }
    while(change>=10){
        change-=10
        tenz+=1
    }
    while(change>=5){
        change-=5
        fives+=1
    }
    while(change>=1){
        change-=1
        singles+=1
    }
    while(change>=.25){
        change-=.25
        qrtrs+=1
    }
    while(change>=.10){
        change-=.1
        dimes+=1
    }
    while(change>=.05){
        change-=.05
        nicks+=1
    }
    while(change>=.01){
        change-=.01
        pennies+=1
    }
    console.log('Your Change is '+(totalchange)+' in '+(fitties)+' 50s '+(dubz)+' 20s '+
    (tens)+' 10s '+(fives)+' 5s, and '+(singles)+' singles. '+(qrts)+' quarters '+(dimes)+' dimes '+
    (nicks)+' nickles, and '+(pennies)+' pennies. '  )
}
register(100,10)
