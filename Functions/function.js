/* 
1. Define a function  maxOfTwoNumbers  that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (num1,num2) => {
    // ADD YOUR CODE HERE
    if (num1>num2) {
        console.log(num1)
    } else {
        console.log(num2)
    }
  };
  maxOfTwoNumbers(5,6)
  
  //maxOfThree();
  
  /*
  2. Define a function  maxOfThree  that takes three numbers as arguments and returns the largest of them.
  */
  maxOfThree = (num1,num2,num3) => {
    // ADD YOUR CODE HERE
    if (num1>num2 && num1>num3){
        console.log(num1)
    } else if (num2>num1 && num2>num3){
        console.log(num2)
    } else {
        console.log(num3)
    }
  };
  maxOfThree(6,5,4)

  /*
  3. Write a function  isCharacterAVowel  that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  */
  isCharacterAVowel = (letter) => {
    // ADD YOUR CODE HERE
    const vowels = ["a", "e", "i", "o", "u"]
    var numOfVowels = 0;
    for (let i=0; i<vowels.length; i++)
    if (letter.includes(vowels[i])) {
        numOfVowels += 1;
    }
    if (numOfVowels > 0) {
        console.log(true)
    } else {
        console.log(false)
    }
  };
  isCharacterAVowel('lkslkd')

  /*
  4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) all the numbers in an array of numbers. For example,  sumArray([1,2,3,4])  should return 10, and  multiplyArray([1,2,3,4])  should return 24.
  */
  
  var sumArray = (array) => {
    // ADD YOUR CODE HERE
    var total = 0;
    for (let i = 0; i < array.length; i++) {  
        total += array[i];
    }
    console.log(total)
  }
  sumArray([1,2,3,4])

  multiplyArray = (array) => {
    var total = 1;
    for (let i = 0; i < array.length; i++) {  
        total *= array[i];   
    }
    console.log(total)
  } 
  multiplyArray([1,2,3,4])
  /*
  5.Write a function that returns the number of arguments passed to the function when called.
  */
  returnNum = (num) => {
      console.log(num)

  }
  returnNum(2)

  /*
  6. Define a function  reverseString  that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
  */
  
  reverseString = (str) => {
    // ADD YOUR CODE HERE
    console.log(str.split("").reverse().join(""))
  };
  reverseString("jag testar")

  /*
  7. Write a function  findLongestWord  that takes an array of words and returns the length of the longest one.
  */
  findLongestWord = (str) => {
    // ADD YOUR CODE HERE
    let words = str;
    let maxLength = [" "];
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength[0].length) {
        maxLength.unshift(words[i])
      }
      //console.log(maxLength[0])
    }
    console.log(maxLength[0]);
  };
  findLongestWord(["one","two","longestOne","four"])

  /*
  8. Write a function  filterLongWords  that takes an array of words and a number  i  and returns the array of words that are longer than i characters long.
  */
  filterLongWords = (arrayOfWord,I) => {
    // ADD YOUR CODE HERE
    var longerThanI = []
    for (let i=0; i < arrayOfWord.length; i++) { 
        var word = arrayOfWord
        if (word[i].length > I) {
            longerThanI.push(word[i])
        }   
    }
    console.log(longerThanI) 
  };
  filterLongWords(["one","two","three","four","five"],3)
  