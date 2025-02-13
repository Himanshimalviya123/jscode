// let time = new Date()
// console.log(time.toString());
// console.log(time.toLocaleString()); //readable
// console.log(time.getFullYear());  //YEAR 2025
// console.log(time.getMonth());//1
// console.log(time.getDay());//3
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());
// console.log(time.getMilliseconds());
// console.log(typeof time);//object


// let btn=()=>{
// let a=["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"]
// document.querySelector("#put").innerHTML=a[time.getDay()]
// }
// let btn=()=>{
//    let a=document.querySelector=("#cat")
//     a.innerHTML=(a[time.getFullYear()]-a[time.getFullYear()])
// }
// =================================================================================
// let mycreateddate=new Date(2025,0,23)
// let mycreateddate=new Date("2025,02,12")//yy-mm-dd
// console.log(mycreateddate.toDateString());

// function btn() {
//     let birthdayYear = document.querySelector("#birthdayYear").value;
//     let currentYear = new Date().getFullYear();
//     let age = currentYear - birthdayYear;

//     document.querySelector("#age").innerHTML = "Your age is: " + age;
// // }
// let btn=()=>{
//   let a=document.querySelector("#age")
//   let display= new Date();
//   let b=display.toLocaleTimeString();
//   a.innerHTML=b;
// }
// =========================milisecond====================================
// setInterval(()=>{
    
//     let a=document.querySelector("#age")
//     let display= new Date();
//   let b=display.toLocaleTimeString(); 
//     a.innerHTML=b;
// },1000)

let btn=()=>{
    setInterval(()=>{
    
            let a=document.querySelector("#age")
            let display= new Date();
             let b=display.toLocaleTimeString(); 
             a.innerHTML=b;
         },1000)
let pvc=document.querySelector=("#time").value
         pvc.innerHTML=(display.toLocaleTimeString());
         if(b==pvc)
         {
            alert("alrm ringing")
         }
         else{
        alert("not ringing")
         }
         
}
