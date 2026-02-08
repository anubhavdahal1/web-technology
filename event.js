let btn = document.querySelector("#btn");
let click = 0;
btn.addEventListener("click", ()=>{
    // alert("Button clicked");
    let result=document.querySelector("#clickresult");
    click ++;
    result.innerText = click;
    // eval();
});
