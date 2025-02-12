let time = new Date()

// console.log(time.toLocaleString()); //readable
// console.log(time.getFullYear());  //YEAR 2025
// console.log(time.getMonth());//1
// console.log(time.getDay());//3
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());
// console.log(time.getMilliseconds());


let btn=()=>{
let a=["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"]
document.querySelector("#put").innerHTML=a[time.getDay()]
}
