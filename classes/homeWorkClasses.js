/*
OOP: Classes

Let's create shaped objects

1. Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
    1. Write a function called circle_area that returns the area of the object. 
    2. Write a function total_sides that returns the number of sides of the object.*/

class Circle{
    constructor(name,radius){
        this.name = name,
        this.radius = radius
        this.pi = 3.14
    }
    circle_area() {
    console.log(this.name + "'s area is " + this.pi*(this.radius*this.radius))
    }
    total_sides(){
        console.log(this.name + "'s circumference is " +this.pi*(this.radius*2))
    }
}
var ball = new Circle("basketball", 5)
console.log(ball)
ball.circle_area()
ball.total_sides()
var wheel = new Circle("Bike wheel", 3)
console.log(wheel)
wheel.circle_area()
wheel.total_sides()

/*
2. Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
    1. Write a function called rectangle_area that returns the area of the given object.
    2. Write a function total_sides that returns the number of sides of the object.*/
class Rectangle{
    constructor(name,width,length){
        this.name = name,
        this.width = width,
        this.length = length
    }
    rectangle_area() {
        console.log(this.name + "'s area is " + this.width*this.length)
    }
    total_sides(){
        console.log(this.name + "'s perimeter is " + 2*(this.width+this.length))
    }
}
var door = new Rectangle("Door",2,4)
door.rectangle_area()
door.total_sides()
var bed = new Rectangle("Bed",12,10)
bed.rectangle_area()
bed.total_sides()
/*
3. Define a new class called Square with appropriate attributes and instantiate a few Square objects.
    1.Write a function called square_area that returns the area of the given object.
    2. Write a function total_sides that returns the number of sides of the object.
*/
class Square{
    constructor(name,side){
        this.name = name,
        this.side = side
    }
    rectangle_area() {
        console.log(this.name + "'s area is " + this.side*this.side)
    }
    total_sides(){
        console.log(this.name + "'s perimeter is " + 4*this.side)
    }
}
var window = new Square("Window",20)
window.rectangle_area()
window.total_sides()
var cheeseSlice = new Square("Cheese Slice",3)
cheeseSlice.rectangle_area()
cheeseSlice.total_sides()
