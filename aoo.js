//array of object==================================================
// &&&&&&&&&&&&&&&&&& map method &&&&&&&&&&&&&&&&&&&&&&&&
// ===================array double vale======================
//   let a=[3,7,1,9,5,6]
// // let ans=a.map((e)=>{
// //     return e*2
// // })
// let ans=a.map((e)=>e*2)
// console.log(ans);
// &&&&&&&&&&&&&&&&&&&&7filter method &&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// let a=[3,7,1,9,5,6]
// let ans=a.filter((e)=>{
//     return e>5 })
// console.log(ans);
// let a=[3,7,1,9,5,6]
// let ans=a.filter((e)=>{
//     // return e%2==0
//     return e%2!==0
// })
// console.log(ans);
// &&&&&&&&&&&&&&&&& for each method &&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// let a=[3,7,1,9,5,6]
// let ans=a.forEach((e)=>{
// console.log(e*2);
// })
// ===========================array of objrct======================================
let aoo=[{ 
    Sno:1,
    class:4,
    name:"sid",
    age:25,
    city:"bopal",

},
{
    Sno:2,
    class:12,
    name:"himanshi",
    age:22,
    city:"pune",
},
{
    Sno:3,
    class:6,
    name:"shubham",
    age:25,
    city:"indore",


},
{
    Sno:4,
    class:11,
    name:"sakshi",
    age:15,
    city:"pune",
},
{
    Sno:5,
    class:7,
    name:"sonu",
    age:15,
    city:"pune",
},
{
    Sno:6,
    class:9,
    name:"pratik",
    age:15,
    city:"nagpur",
},
{
    Sno:7,
    class:10,
    name:"tushar",
    age:35,
    city:"hyderabad",
},
{
    Sno:8,
    class:8,
    name:"soumya",
    age:26,
    city:"betul",
},
{
    Sno:9,
    class:6,
    name:"khushal",
    age:45,
    city:"chennai",
},
{
    Sno:10,
    class:10,
    name:"era",
    age:36,
    city:"pune",
}]
//  ans=aoo.map((e)=>{
//     return e.name+e.age+e.city
// })
// console.log(ans);
// ==================== front screen pe object print kerne ke liye==================
// let show=document.querySelector("#show")
// let ans=aoo.map((e)=>{
// show.innerHTML+=
// `<h1>${e.name}</h1>
// <h1>${e.age}</h1>
// <h1>${e.city}</h1>
// `
// })
let show=document.querySelector("#show")
let ans=aoo.map((e)=>{
show.innerHTML+=
`
<div>
<h1 id="name">${e.Sno}</h1>
<h1>${e.class}</h1>
<h1>${e.name}</h1>
<h1>${e.age}</h1>
<h1>${e.city}</h1>
<div
`
})


