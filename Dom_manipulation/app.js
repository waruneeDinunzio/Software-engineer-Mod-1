console.log("Working")

/* Methods
var dog ={
    breed: "Boxer",
    bark : ()=>{
        console.log("bark")
    }
}
dog.bark()

//window.alert("This is an alert")
//prompt("what is you name?")
//document.write("Hello from the DOM")


//use document.querySelector to grab HTML elements
// assign html e

var messageBox = document.querySelector("#message")
console.log(messageBox)

var showMessage = () => {
    messageBox.innerHTML = "I am Okey! Thank you for asking"
}
*/

var madPicture = document.querySelector("#mad")
// function to change the picture

var changePic = () => {
    if (madPicture.src.match("mad.jpeg")) {
        madPicture.src = "happy.png"
    } else {
        madPicture.src = "mad.jpeg"
    }
    
}
document.getElementById("changeMe").addEventListener("click", changePic);
