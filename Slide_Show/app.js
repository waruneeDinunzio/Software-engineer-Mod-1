// source our images
var images = ['natural1.jpeg','natural2.jpeg','natural3.jpeg','natural4.jpeg','natural5.jpeg']
// variable to hold the length of the entire array
var imagesLength = images.length-1
// variable to act as a counter in our array
var counter = 0;

var slide = (x)=> {
    // varible to increase the index in the array
    counter += x
    // go back to 0 if the counter more than images lenght
    if(counter < 0){
        counter = imagesLength
    }
    if (counter > imagesLength) {
        counter = 0
    }
    // variable grab the element with the id of slideshow in our html
    var slideShow = document.querySelector("#slideShow")
    // src the slideShow image to be whatever index in the array that the counter is at
    slideShow.src = images[counter]

}
