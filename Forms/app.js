// grab the user input from our first name
// assign it to a variable

var sayHello =()=> {
    var firstName = document.querySelector("#firstName").value
    var lastName = document.querySelector("#lastName").value
    alert("Hello " + firstName + " " + lastName)
}

var setInfo = () => {
    var userName = document.querySelector("#userName").value
    var password = document.querySelector("#userPassword").value
    if(userName.length < 8) {
        alert("User name must be longer than eight characters")
    }
}

var addition = ()=>{
    var numOne = parseInt(document.querySelector("#numOne").value)
    var numTwo = parseInt(document.querySelector("#numTwo").value)
    var sum = numOne + numTwo
    alert(sum)
}
var subtract = ()=>{
    var numOne = parseInt(document.querySelector("#numOne").value)
    var numTwo = parseInt(document.querySelector("#numTwo").value)
    var subtract = numOne - numTwo
    alert(subtract)
}
var multiply = ()=>{
    var numOne = parseInt(document.querySelector("#numOne").value)
    var numTwo = parseInt(document.querySelector("#numTwo").value)
    var multiply = numOne * numTwo
    alert(multiply)
}
var divide = ()=>{
    var numOne = parseInt(document.querySelector("#numOne").value)
    var numTwo = parseInt(document.querySelector("#numTwo").value)
    var divide = numOne - numTwo
    alert(divide)
}
var averageNum = () => {
    var numOne = parseInt(document.querySelector("#one").value)
    var numTwo = parseInt(document.querySelector("#two").value)
    var numThree = parseInt(document.querySelector("#three").value)
    var numFour = parseInt(document.querySelector("#four").value)
    var numFive = parseInt(document.querySelector("#five").value)
    var average = (numOne+numTwo+numThree+numFour+numFive)/5
    alert(average)
}