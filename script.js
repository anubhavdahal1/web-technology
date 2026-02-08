//  let div = document.querySelector("#parentdiv");
//  let p = document.createElement("p");
//  p.innerText="This is a new paragraph added to the div.";
// //  div.append(p);
// div.appendChild(p);
// js to manupulate the attribute of any html element
let a = document.querySelector("#fblink");
// let hrefral= a.getAttribute("href");
// console.log(hrefral);
a.setAttribute("href", "https://www.youtube.com");
a.setAttribute("class", "fbclass");
