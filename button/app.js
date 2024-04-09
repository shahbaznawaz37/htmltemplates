let btns = document.querySelectorAll("button");

function printText() {
  console.log(this.innerText);
  alert("you have selected " + this.innerText);
}

for (let btn of btns) {
  btn.addEventListener("click", printText);
}
