let sub=()=>{
    let inpname=document.querySelector("#name").value
    let inpnumber=document.querySelector("#number").value
    let inpemail=document.querySelector("#email").value
    let inppassword=document.querySelector("#pass").value
    let inpcpass=document.querySelector("#cpass").value

    let errname=document.querySelector("#errorname")
    let errnumber=document.querySelector("#errornumber")
    let erremail=document.querySelector("#erroremail")
    let errpassword=document.querySelector("#errorpass")
    let errcpass=document.querySelector("#errorcpass")

// if(inpname=="")
// {
//     errname.innerHTML="please fill the name field"
//     errname.style.color="red"

//     return false;
// }

// if(inpnumber=="")
//     {
//         errnumber.innerHTML="please fill the name field"
//         errnumber.style.color="red"

//         return false;
//     }
//     if(inpemail=="")
//         {
//             erremail.innerHTML="please fill the name field"
//             erremail.style.color="red"
    
//             return false;
// }
// if(inppassword=="")
// {
// errpassword.innerHTML="please fill the name field"
// errpassword.style.color="red"
// return false;
//  }           
//if(inpcpass=="")
//{
//errcpass.innerHTML="please fill the name field"
//errcpass.style.color="red"
            
//return false;
//                 }
// if(inppassword==inpcpass)
// {
//     return true;
// }
// else{
//     errorcpass.innerHTML="passord incorrect"
//     errorcpass.style.color="red"
//     return false;
// }

if(inpname=="") {
    errname.innerHTML="please fill the name field"
errname.style.color="red"
 return false;
 }
else if(isNaN(inpnumber))
{
errnumber.innerHTML="please enter the no.only"
errname.style.color="red"
 return false;
 }
else if(inpnumber.length!==10)
 {
errnumber.innerHTML="please enter 10 digit only"
errname.style.color="red"
return false;
                        
}
// *************************string method(includes)**********************************
 else if(!(inpemail.includes('@') && inpemail.includes('.com')))
{
 erremail.innerHTML="enter valid email"
erremail.style.color="red"
return false;
 }
//  ****************************(match) method**********************************
 else if(!(inppassword.(match([/123456789/])
 {
&& inppassword.match([/!@$#%^&*()/])
&& inppassword.match([/!@/])
&& inppassword.match([/a-z/])
 
 }
)) 
}
