import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
/* document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
}); */

// Kodlar buraya gelecek!
//mouseover
document.querySelector(".intro img").addEventListener("mouseover", (event) => {
  alert("çabuk o pis fareyi üzerimden çek !!!");
});
//keydown
var input = document.getElementById("myInput");
var length = document.getElementById("length");

input.addEventListener("keydown", function () {
  length.innerHTML = input.value.length;
});

//wheel
document.getElementById("sDIV").addEventListener("wheel", gfunc);

function gfunc() {
  this.style.fontSize = "35px";
}

//load
window.addEventListener("load", (a) =>
  alert("yüklenme hızı: ışık hızından biraz yavaş")
);

//focus
document.getElementById("demo").onkeydown = function () {
  myFunction();
};

function myFunction() {
  document.getElementById("demo").style.backgroundColor = "red";
}
//resize

window.addEventListener("resize", agabe);

let x = 0;
function agabe() {
  let txt = (x += 1);
  document.getElementById("agabe").innerHTML = txt;
}
//scroll
document.getElementById("myDIV").addEventListener("scroll", func2);

function func2() {
  document.getElementById("deneme").innerHTML = "You scrolled in div.";
}

//Select

document.getElementById("myText").addEventListener("select", element);

function element() {
  document.getElementById("memo").innerHTML = "You selected some text!";
}

//dblclick
document.getElementById("aga").addEventListener("dblclick", mg);

function mg() {
  document.getElementById("aga").innerHTML =
    "Double-click me dedik öldür demedik, yavaş bas bilader !";
}
// Drag
/* Events fired on the drag target */
document.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("Text", event.target.id);
});

document.addEventListener("drag", function (event) {
  document.getElementById("gemi").innerHTML = "The text is being dragged";
});

/* Events fired on the drop target */
document.addEventListener("dragover", function (event) {
  event.preventDefault();
});

document.addEventListener("drop", function (event) {
  event.preventDefault();
  if (event.target.className == "droptarget") {
    const data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("gemi").innerHTML = "The text was dropped";
  }
});
