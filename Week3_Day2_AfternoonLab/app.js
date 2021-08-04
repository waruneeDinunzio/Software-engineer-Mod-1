/*1. Mr. Bonner (aka the Red Rocket, the Red Mamba) doesn't belong in this class of Hall Of Famers. 
Remove this imposter immediately and assign it to a new variable named `notHof` 
Console.log this new variable as well as the original list.*/

var hof = ["Jordan", "Bird", "Kobe", "Duncan", "Iverson", "Bonner"];

var notHof = []
notHof.push(hof.pop())
//console.log(hof)
//console.log(notHof)

/*2. As head of McDonald's New Product Division, your job is to test and approve all new menu items. 
In the testMenu array below, all the items are approved except for "McLinguine" and "McChar-Siu Bau". 
Remove these items from the list and console.log the updated testMenu.*/

var testMenu = [
    "McPizza Burger",
    "McFly Burger",
    "McLinguine",
    "McChar-Siu Bau",
    "McChop-Chae",
    "McPancit"
    ];
    testMenu.splice(2,2);
    //console.log(testMenu)

/*3. Increase the peace! Your job is quash the bitter rivalry and unite both the westSide and eastSide rappers into a new array called `oneLove`. 
Console.log this new array.*/

var westSide = ["Dre", "2Pac", "Snoop"];
var eastSide = ["Biggie", "Diddy", "Craig Mack"];
var oneLove = westSide.concat(eastSide)
//console.log(oneLove)

 /*4. Some drama between you and the Kardashian's went down during last Saturday's potluck party. You are no longer on speaking terms and need to unfriend the following from your facebook:
"Yeezy", "Kimmy K" and "Lamar Odom". Unfriend these ungrateful people and assign them to a new variable named `unFriend`. Console.log this new variable.*/

var fbFriends = [
    "Khalid",
    "Yeezy",
    "Kimmy K",
    "Lamar Odom",
    "Lebron",
    "Warren Buffet"
    ];
var unFriend = fbFriends.slice(1,4)
//console.log(unFriend)

//5.  create a user profile using map where following keys. 

user1 = {

first_name: "warunee",

last_name: "dinunzio",

company: "per scholas",

department: "software engineer"

};
//console.log(user1)

/*6. This is a challenge from https://csx.codesmith.io/units/precourse-part-2/challenge-objects-iterating-with-for-in
to use for..in loop to get object's key and value *

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  const objToArray = [];
  // ADD CODE HERE
  for (var num in checkObj) {
      if (checkObj[num] >= 2) {
        objToArray.push(checkObj[num])
        //console.log(checkObj[num])
      }
  }
  console.log(objToArray)*/

/* 7 https://csx.codesmith.io/units/precourse-part-2/challenge-objects-iterating-with-for-loop
 This time, use the Object.values() method to return an array of checkObj's values,
 and assign this array to a constant called objToArray. 
 Next, use a for loop to iterate through objToArray and 
 determine if any of the numbers are divisible by 6. If so, reassign the value of divBy6 to true.*/

  const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
  let divBy6 = false;
  // ADD CODE HERE
  const objToArray = Object.values(checkObj)
  for (var i=1; i < objToArray.length; i++) {
      if (objToArray[i]%6 == 0) {
          divBy6 = true
          console.log(divBy6)
      }   
  }
  
  