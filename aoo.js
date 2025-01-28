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
    name:"sid",
    age:25,
    city:"bopal",
},
{
    name:"himanshi",
    age:20,
    city:"indore",
},
{
    name:"sakshi",
    age:15,
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
<h1 id="name">${e.name}</h1>
<h1>${e.age}</h1>
<h1>${e.city}</h1>
<div
`
})


