const generateSq = (numOfSq)=>{
    for (let i = 0; i<=numOfSq; i++){
        //create a new html element
        //have the class of .square
        let $square = $("<div>").addClass("square") 
        //append it to the body
        $("body").append($square)
        //add css property color in Square
        $square.css("background-color",randomColorRGB())
    }
}
//create random color function to generate number 1-256 for red, green and blue
const randomColorRGB = () => {
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)
    return "rgb(" + red + "," + green + "," +blue+  ")"
}
//console.log(randomColorRGB())