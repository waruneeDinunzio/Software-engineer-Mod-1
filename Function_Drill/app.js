// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
// Test Cases:
// Expect sumOfNums([1,2,3,4,5]) to equal 15
// Expect sumOfNums([0,0,5]) to equal 5
// Expect sumOfNums([-1,0,1])) to equal 0
// Expect sumOfNums([])) to equal 0

var sumOfNums = (num) => {
    let answer = 0;
    for (var i = 0; i < num.length; i++) {
        
        answer += num[i]
    }
    console.log(answer)
}
//sumOfNums([1,2,3,4,5])
//sumOfNums([0,0,5])
//sumOfNums([-1,0,1])
//sumOfNums([])

// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
// greater (i.e. greater than but not equal to) than 10
// Test Case:
// Expect numsGreaterThanTen([-1, 0, 1, 9, 9.5, 9.99, 10, 11, 20, 100]) to equal [11, 20, 100]
var numsGreaterThanTen = (num) => {
    var greaterThanTen = []
    for (var i = 0; i < num.length; i++) {
        if (num[i] > 10) {
            greaterThanTen.push(num[i])
        }
    }
    console.log(greaterThanTen)
}
//numsGreaterThanTen([-1, 0, 1, 9, 9.5, 9.99, 10, 11, 20, 100])

// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
// `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
// Test Cases:
// Expect allGreaterThanTen([11, 20, 100]) to equal true
// Expect allGreaterThanTen([9, 100, 299])) to equal false
// Expect allGreaterThanTen([1, 2])) to equal false
// Expect allGreaterThanTen([10])) to equal false
// Expect allGreaterThanTen([])).to.equal(true);

var allGreaterThanTen = (arrayOfNum) => {
    var greaterThanTen = []
    for (var i = 0; i < arrayOfNum.length; i++) {
        if (arrayOfNum[i] > 10) {
           greaterThanTen.push(arrayOfNum[i]) 
        }
    }
    if (greaterThanTen.length == arrayOfNum.length || arrayOfNum.length == 0){
        console.log(true)
    } else {
        console.group(false)
    }   
}
//allGreaterThanTen([11, 20, 100])
//allGreaterThanTen([9, 100, 299])
//allGreaterThanTen([1, 2])
//allGreaterThanTen([10])
//allGreaterThanTen([])


// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters
// Test Cases:
// Expect wordsWithAtLeastFiveLetters(['alphabet', 'banana', 'carrot', 'doe', 'egg'])
// to equal ['alphabet', 'banana', 'carrot']
var wordsWithAtLeastFiveLetters = (letter) => {
    var fivelettersUp = []
    for (var i = 0; i < letter.length; i++) {
        if (letter[i].length > 5) {
            fivelettersUp.push(letter[i])
        }
    }
    console.log(fivelettersUp)
}
//wordsWithAtLeastFiveLetters(['alphabet', 'banana', 'carrot', 'doe', 'egg'])

// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
// `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
// Test Cases:
// Expect allStartingWithA(['apple', 'alligator', 'Arkansas'])) to equal true
// Expect allStartingWithA(['Amy', 'Bob'])) to equal false
// Expect allStartingWithA([]) to equal true
var allStartingWithA = (wordArray)=> {
    var startWithA = []
    for (var i=0; i < wordArray.length; i++){
        if (wordArray[i].toLowerCase().charAt(0) == "a" ) {
        startWithA.push(wordArray[i])    
        }
    }
    if (startWithA.length == wordArray.length || wordArray.length == 0){
        console.log(true)
    } else {
        console.group(false)
    }      
}
//allStartingWithA(['apple', 'alligator', 'Arkansas'])
//allStartingWithA(['Amy', 'Bob'])
//allStartingWithA([])

// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
// (case-insensitive), `false` otherwise
// Test Cases:
// Expect anyStartingWithB(['Amy', 'Bob']) to equal true
// Expect anyStartingWithB(['apple', 'alligator', 'Arkansas'])) to equal false
//const anyStartingWithB = function (words) {
var anyStartingWithB = (wordArray) => {
    var startWithB = 0
    for (var i=0; i < wordArray.length; i++) {
        if (wordArray[i].toLowerCase().charAt(0) == "b"){
            startWithB += 1
        }
    }
    if (startWithB > 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
//anyStartingWithB(['Amy', 'Bob'])
//anyStartingWithB(['apple', 'alligator', 'Arkansas'])

// This last set of functions are all related to one another! Use functions 7 to solve function 8,
// use function 8 to solve 9, 10, and 11.
    // #7
    // Input: a single word and a number (`n`)
    // Output: `true` if the word has at least some number (`n`) of vowels,
    // `false` otherwise
    // Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
    // Edge Case: If `n` is less than zero, return `null`.
    // Test Cases:
    // Expect hasAtLeastNVowels('uncopywriteable', 0)) to equal true
    // This case should be true as long as n is less or equal to 6
    // Expect hasAtLeastNVowels('dangerous', 5) to equal false
    // Expect hasAtLeastNVowels('banana', -1) to equal null
var hasAtLeastNVowels = (word,n) => {
    var numVowels = 0
    for (var i=0; i< word.length; i++) {
        if (word.charAt(i) == "a" || word.charAt(i) == "e" || word.charAt(i) == "i" || word.charAt(i) == "o" || word.charAt(i) == "u") {
            numVowels += 1
        }
    }
    if (numVowels >= n && n >= 0) {
        console.log(true)
    } 
    if (n < 0) {
        console.log(null)
    }
    if (numVowels < n) {
        console.log(false)
    }
}
//hasAtLeastNVowels('uncopywriteable', 0)
//hasAtLeastNVowels('dangerous', 5)
//hasAtLeastNVowels('banana', -1)

    // #8
    // Input: an array of words
    // Output: an array of words from the original array that have at least two
    // vowels
    // Test Cases:
    // Expect wordsWithAtLeastTwoVowels(['alphabet', 'bun', 'can', 'doe', 'egg'])
    // to equal ['alphabet', 'doe']
var wordsWithAtLeastTwoVowels = (words) => {
    var twoVowelsWords = []
    
    for (i = 0; i < words.length; i ++) {
        var counter = 0
        for ( j = 0; j < words[i].length; j++) {
            if (words[i].charAt(j) == "a" || words[i].charAt(j) == "e" || words[i].charAt(j) == "i" || words[i].charAt(j) == "o" || words[i].charAt(j) == "u") {
                counter += 1
            }     
        }
        if (counter >= 2) {
            twoVowelsWords.push(words[i])
        } 
    }
    console.log(twoVowelsWords)
}
//wordsWithAtLeastTwoVowels(['alphabet', 'bun', 'can', 'doe', 'egg'])

    // #9
    // Input: an array of words
    // Output: `true` if ALL words have two or more vowels, `false` otherwise
    // Edge Case: If the array is empty, the function should return `true`.
    // Expect allHaveAtLeastTwoVowels(['apple', 'alligator', 'Arkansas']) to equal true
    // Expect allHaveAtLeastTwoVowels(['Al', 'Barbara']) to equal false
    // Expect allHaveAtLeastTwoVowels(['Al', 'buck', 'can']) to equal false
    // Expect allHaveAtLeastTwoVowels([]) to equal true
var allHaveAtLeastTwoVowels = (words) => {
    var twoVowelsWords = []
    
    for (i = 0; i < words.length; i ++) {
        var counter = 0
        for ( j = 0; j < words[i].length; j++) {
            if (words[i].charAt(j) == "a" || words[i].charAt(j) == "e" || words[i].charAt(j) == "i" || words[i].charAt(j) == "o" || words[i].charAt(j) == "u") {
                counter += 1
            }     
        }
        if (counter >= 2) {
            twoVowelsWords.push(words[i])
        } 
    }
    if (twoVowelsWords.length == words.length || words.length == 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
//allHaveAtLeastTwoVowels(['apple', 'alligator', 'Arkansas'])
//allHaveAtLeastTwoVowels(['Al', 'Barbara'])
//allHaveAtLeastTwoVowels(['Al', 'buck', 'can'])
//allHaveAtLeastTwoVowels([])

    // #10
    // Input: an array of words
    // Output: `true` if there are ANY words have two or more vowels,
    // `false` otherwise.
    // Test Cases:
    // Expect anyHaveAtLeastTwoVowels(['apple', 'alligator', 'Arkansas'])) to equal true
    // Expect anyHaveAtLeastTwoVowels(['APPLE', 'bun', 'CAT'])) to equal true
var anyHaveAtLeastTwoVowels = (words) => {
    var twoVowelsWords = []
    
    for (i = 0; i < words.length; i ++) {
        var counter = 0
        for ( j = 0; j < words[i].length; j++) {
            if (words[i].toLowerCase().charAt(j) == "a" || words[i].toLowerCase().charAt(j) == "e" || words[i].toLowerCase().charAt(j) == "i" || words[i].toLowerCase().charAt(j) == "o" || words[i].toLowerCase().charAt(j) == "u") {
                counter += 1
            }     
        }
        if (counter >= 2) {
            twoVowelsWords.push(words[i])
        } 
    }
    if (twoVowelsWords.length > 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
//anyHaveAtLeastTwoVowels(['apple', 'alligator', 'Arkansas'])
//anyHaveAtLeastTwoVowels(['APPLE', 'bun', 'CAT'])

    // #11
    // Input: an array of words
    // Output: `true` if NONE of the words have two or more vowels,
    // `false` otherwise
    // Edge Case: If the array is empty, the function should return `true`.
    // Test Cases:
    // Expect noneHaveTwoOrMoreVowels(['Al', 'buck', 'can'])) to equal true
    // Expect noneHaveTwoOrMoreVowels(['Al', 'Barbara'])) to equal false
    // Expect noneHaveTwoOrMoreVowels(['apple', 'alligator', 'Arkansas']) to equal false
    // Expect noneHaveTwoOrMoreVowels([]) to equal true
var noneHaveTwoOrMoreVowels = (words) => {
    var twoVowelsWords = [] 
    
    for (i = 0; i < words.length; i ++) {
        var counter = 0
        for ( j = 0; j < words[i].length; j++) {
            if (words[i].toLowerCase().charAt(j) == "a" || words[i].toLowerCase().charAt(j) == "e" || words[i].toLowerCase().charAt(j) == "i" || words[i].toLowerCase().charAt(j) == "o" || words[i].toLowerCase().charAt(j) == "u") {
                counter += 1
            }     
        }
        if (counter >= 2) {
            twoVowelsWords.push(words[i])
        } 
    }
    if (twoVowelsWords.length == 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
//noneHaveTwoOrMoreVowels(['Al', 'buck', 'can'])
//noneHaveTwoOrMoreVowels(['Al', 'Barbara'])
//noneHaveTwoOrMoreVowels(['apple', 'alligator', 'Arkansas'])
//noneHaveTwoOrMoreVowels([])

    // #12
    // Input: an array of words
    // Output: an object ({}) where each word in the array is a key, and the value
    // tied to that key is the length of the word.
    // e.g. given ['cat', 'horse', 'elephant'],
    // return { cat: 3, horse: 5, elephant: 8}
    // Test Cases:
    // Expect buildObjectFromWords(['apple', 'banana', 'cranberry'])
    // to equal {'apple': 5, 'banana': 6, 'cranberry': 9}
var buildObjectFromWords = (wordsArray) => {
    var fruit = {}
    for (var i = 0 ; i < wordsArray.length; i++) {    
     fruit[wordsArray[i]] = wordsArray[i].length      
    }
    console.log(fruit) 
}

buildObjectFromWords(['apple', 'banana', 'cranberry'])