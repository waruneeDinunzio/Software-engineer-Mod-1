/*for (let counter=10; counter>=0; counter--) {
    console.log(counter)
}
*/

/*for (let i="#"; i.length<= 6; i+="#") {
    console.log(i)
}*/

/*for (let i=6; i<=60; i += 3 ) {
    
    console.log(i)
}*/
//  Loops are used to repeat code until a condition is met
// For Loops
// 1.Declaring the variable
// 2.Set the condition to be tested
// 3. Set the work that will be done if the condition is true
// 4. What to do after each iteration
// for(let counter = 0; counter <= 6; counter++){
//     console.log()
// }
// for( var counter = "#"; counter.length <= 6; counter+="#"){
//     console.log(counter)
// }
// for(counter = 0; counter <= 40; counter++){
//     if(counter %2 == 0){
//         console.log(counter)
//     }
// }


//1. Write a for loop for the given output:
// 1, 3, 5, 7, 9
let array1 = []
for ( i=1; i<10; i+=2) {
    
    array1.push(i); 
}
console.log(array1);
//1. Write a for loop for the given output:
// 2, 4, 6, 8, 10
let array2 = []
for (i=2; i<10; i+=2){
  array2.push(i)  
}
console.log(array2)

//2. write a for loop that iterates between 0 and 10 and prints all even numbers.
let evenNum = []
for ( i=0; i<=10; i++){
    if (i%2 == 0) {
      evenNum.push(i)  
    }
}
console.log(evenNum + " are all even number")

//Write a for loop that iterates from 1 - 20. Prints “prime” for all prime numbers, “even” for all even numbers, and “odd” for all odd numbers

for (counter = 0; counter <= 50; counter++) {
    /*if(counter%2 == 0) {
        console.log(counter + " is a even number")
    }
    if (counter%2==1) {
        console.log(counter + " is a odd number")
    }*/

    if (counter !== 1 && counter == 2 || counter == 3) {
        console.log(counter + " is a prime number")
    } 
    if (counter !== 1 && counter%2 !== 0 && counter%3 !== 0) {
            console.log(counter + " is a prime number");
    }  
}