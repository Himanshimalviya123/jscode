// let clickme=document.querySelector("#btn")
// clickme.addEventListener("click",()=>{
//     alert("hello")
// })
// let abd=document.querySelector("#btn")
// let abc=document.querySelector("#okk")
// abd.addEventListener("click",()=>{
// abc.style.backgroundColor=="red"
// })
// let show=document.querySelector("#inp")
// let see=document.querySelector("#head")
// show.addEventListener("keydown",(e)=>{
//     see.innerHTML=(e.key)
let show=document.querySelector("#head")
 let see=document.querySelector("#inp")
see.addEventListener("input",(e)=>{
    show.innerHTML=(see.value)
 })