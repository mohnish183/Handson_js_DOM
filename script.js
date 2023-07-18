let text = document.getElementById("text");
// let element = documnet.getElementsByTagName("h1");
let box = document.getElementsByClassName("Box");
let hello = document.getElementById("hello");
hello.innerHTML = "Hello World";

let textChange = document.getElementById("textchange");
function changetxt() {
  if (textChange.textContent == "Hello world") {
    textChange.innerHTML = "Welcome to Elevation academy";
  } else {
    textChange.innerHTML = "Hello world";
  }
}
let changeStyle = document.getElementById("changestyle");
changeStyle.style.color = "red";
changeStyle.setAttribute("class", "democlass");

let changeDirection = document.getElementById("changedir");

function flexchange() {
  if (changeDirection.className == "flex")
    changeDirection.setAttribute("class", "new_flex");
  else changeDirection.setAttribute("class", "flex");
}
let timer = document.getElementById("timer");
let amPm;
//time
function time() {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  if (hr > 12 && min > 0) {
    hr = hr - 12;
    amPm = "PM";
  } else {
    amPm = "AM";
  }
  timer.innerHTML = `${hr} hr : ${min} mins : ${sec} sec [ ${amPm} ]`;
}
setInterval(time, 1000);
console.log(timer);
