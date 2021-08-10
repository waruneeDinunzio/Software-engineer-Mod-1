var helloButton = document.querySelector("#hello")
console.log(helloButton)
document.querySelector(".goodbye").innerHTML = "GoodBye"

//jQuery is javaScrip shothand. it makes thing easier to write for example:
$(".goodbye").html("See you later!") //$ = using jQuery .html("") = jQuery method 

const sayHello = () => {
    // create an h2 element
    let h2 = $("<h2>").text("Hello")
    console.log(h2)
    $("body").append(h2)
}
sayHello()

