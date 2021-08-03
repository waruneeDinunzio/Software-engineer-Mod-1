/*
var electricMixer =(attachment,attachment2,attachment3)=>{
    console.log("the mixer is now : " + attachment() + ", The mixer will be :" + attachment2()+ " next and next is "+ attachment3())
}
// Attachments
var spiralizer = () => {
    return "Spiralizing" 
}
var slicing = () => {
    return "Slicing"
}
// electricMixer(spiralizer)
// electricMixer(slicing)
electricMixer(spiralizer,slicing,()=> {
    return "Kneading Dough"
})
*/


// setInterval(param1,param2)
// var setInterval =(param1,param2)=> {
//     // do this param1 for param2 amount of time
// }
// setInterval(
//     ()=>{
//     console.log("Hello")
// }, 500)
setInterval( ()=>{
    var z = 5
    z++
    console.log(z)
}, 500)