// import data from './data';
import { products } from './data.js'

// console.log(pro{ducts);
products.map((element)=>{
    // console.log(element.price);
    const {id , price ,brand ,category}= element
//     console.log(id , price ,brand ,category);
// //    const tbody=document.getElementsByTagName("tbody")
// //    console.log(tbody, "tbody"); 
//    const newDiv=document.getElementById("id");
//     newDiv.appendChild(id);

    // document.body.insertBefore(newDiv, currentDiv);
//   const newDiv=document.getElementById("id");
    // console.log(document.body);
    const a= document.getElementById("tbody");
    const b= document.getElementById("tr");
    console.log(b);



})