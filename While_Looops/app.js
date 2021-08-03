/*let num = 10;
while(num >= 0) {
    console.log(num);
    num--
}


let int = 1 ;
while(int <= 35) {
    console.log(int*3);
    int ++
}

let num = 100;
while(num >= 0) {
    console.log(num);
    num -= 5;
}

let num = 1;
while(num <= 20){
    if (num%2 == 0){
    console.log(num * 3);
    }
    num ++;
}
*/
let cookiePrice = 4;
let bill = 10;
let quarter = 4;
while(bill > cookiePrice) {
    console.log("Your changes are "+ (bill-cookiePrice)*quarter +" quarters.");
    bill = 0;
}

/*
While loop

1. Using a while loop, print out all prime numbers between 0 - 20
*/
let num = 1;
while(num <= 20) {
    if (num !== 1 && num == 2 || num == 3) {
        console.log(num + " is a prime number")
    }
    if (num !== 1 && num%2 !=0 && num%3 != 0) {
        console.log(num + " is a prime number")
    }
    num ++
}




//3. Use a while loop to print out the even number from 1 to 20. (You'll need Modulus for this. And an IF Statement.)
let number = 1;
let evenNum = [];
while(number <= 20) {
    if (number%2 == 0) {
        evenNum.push(number)
    }
    number ++
}
console.log("the even number are "+ evenNum);


//2. Use a while loop to add up the numbers 1 to 20 into one variable. Print out the sum at the end

let result = 0;
let numbers = 1;
while(numbers <= 20) {
    result = result + numbers
    numbers ++  
    //console.log(result)
}
console.log(result)
