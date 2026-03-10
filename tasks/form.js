let form = document.querySelector("#Signupform");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.querySelector("#username");
  let usernamevalue = username.value.trim();
  let psw = document.querySelector("#password");
  let pswvalue = psw.value.trim();

  let cpsw = document.querySelector("#cpassword");
  let cpswvalue = cpsw.value.trim();

  let usernamelength = usernamevalue.length;
  //   alert(usernamelength);
  if (usernamelength < 3 || usernamelength > 8) {
    alert("invalid username length");
  }
});