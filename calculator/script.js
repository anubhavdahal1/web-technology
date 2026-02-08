function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  let exp = document.getElementById("display").value;
  document.getElementById("display").value = eval(exp);
}

function deleteDisplay() {
  let currentValue = document.getElementById("display").value;
  document.getElementById("display").value = currentValue.slice(0, -1);
}
let i = 0;
let colors = ["red", "green", "blue"];

setInterval(function () {
  document.body.style.backgroundColor = colors[i];
  i = (i + 1) % 3;
}, 1000);
