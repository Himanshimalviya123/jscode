// let a=[{
//     Sn:1,
//     name:sonu,
//     class:3,
//     city:bhopal,
//     contact:6583275975,

// },
// {
//     Sn:2,
//     name:shubham,
//     class:9,
//     city:indore,
//     contact:6587583975,
// },
// { 
//     Sn:5,
//     name:pratik,
//     class:12,
//     city:nagpur,
//     contact:658327974710,
// }]
// let ans=a.map((e)=>{
// return e.name
// })
// console.log(ans);
let shiv=()=>{

let inputname=document.querySelector("#name").value;
let inputage=document.querySelector("#age").value
let inputcourse=document.querySelector("#course").value
let inputyear=document.querySelector("#year").value
let inputuniversity=document.querySelector("#university").value


let errname=document.querySelector("#errorname");
let errage=document.querySelector("#errorage")
let errcourse=document.querySelector("#errorcourse")
let erryear=document.querySelector("#erroryear")
let erruniversity=document.querySelector("#erroruniversity")

if(inputname=="")
{
    errname.innerHTML="please fill the name"
    errname.Style.color="red"
    return false;
}
}