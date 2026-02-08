// let paragraph = document.querySelector("#text1");
// let pvalue = paragraph.innerText;
// console.log(pvalue);
// paragraph.innerText="hello World";
// paragraph.classList.add("paraclass");
// console.log(paragraph.innerText);
// paragraph.classList.remove("removeclass");
// paragraph.classList.toggle("removeclass");
// let username=document.querySelector("#username");
// let usernamevalue=username.value;
// console.log(usernamevalue);

// function ShowData(event){
//   event.preventDefault();
//   let username = document.querySelector("#username");
//   let usernamevalue=username.value;
//   console.log(usernamevalue);
// }

// function ShowData(event) {
//   event.preventDefault();
//   let username = document.querySelector("#username");
//   let usernamevalue = username.value;
//     // console.log(usernamevalue);
//   let resulttext = document.querySelector("#result");
//   resulttext.innerText = usernamevalue;
//   username.value = " ";
// }

function radiobtn(event) {
  event.preventDefault();
  let radiobtns = document.querySelectorAll(".gender");
  // console.log(radiobtns);
  radiobtns.forEach((radio) => {
    if (radio.checked) {
      console.log(radio.value);
    }
  });
}
