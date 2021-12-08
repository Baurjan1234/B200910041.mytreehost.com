var display = document.getElementById("display");
var level = 1;
var time = 30;
var countSpan = document.getElementById("count");
var levelSpan = document.getElementById("level");
var timeSpan = document.getElementById("time");
var fire = document.getElementById("firework");
var btn = document.getElementById("button");
// бөмбөлгийг хөдөлгөх
var move = function () {
  var bubbles = document.getElementsByClassName("bubble");

  for (var i = 0; i < bubbles.length; i++) {
    var left = parseInt(bubbles[i].style.left);
    var top = parseInt(bubbles[i].style.top);
    if (
      left + bubbles[i].moveX > display.clientWidth - 50 ||
      left + bubbles[i].moveX < 0
    )
      bubbles[i].moveX *= -1;
    if (
      top + bubbles[i].moveY > display.clientHeight - 50 ||
      top + bubbles[i].moveY < 0
    )
      bubbles[i].moveY *= -1;
    bubbles[i].style.left = left + bubbles[i].moveX;
    bubbles[i].style.top = top + bubbles[i].moveY;
  }
};
var beginGame = function (level) {
  time = 20;
  for (var i = 0; i < level; i++) {
    var bubble = document.createElement("div");
    var light = document.createElement("div");
    bubble.className = "bubble";
    let rndWidthHeight = Math.round(Math.random() * 80) + 30;
    bubble.style.width = rndWidthHeight;
    bubble.style.height = rndWidthHeight;
    bubble.appendChild(light);
    // x тэнхлэг утгыг өөр өөрөөр өгөх ингэхдээ дэлгэцийн өргөний хэмжээгээр
    bubble.style.left = Math.round(
      Math.random() * (display.clientWidth - rndWidthHeight)
    );
    // y тэнхлэг утгыг өөр өөрөөр өгөх ингэхдээ дэлгэцийн өндөрийн хэмжээгээр
    bubble.style.top = Math.round(
      Math.random() * (display.clientHeight - rndWidthHeight)
    );

    //бөмбөлгийн өнгө өөрчлөх
    bubble.style.backgroundColor =
      "rgb(" +
      Math.round(Math.random() * 255) +
      ", " +
      Math.round(Math.random() * 255) +
      ", " +
      Math.round(Math.random() * 255) +
      ")";

    bubble.moveX = Math.random() * 9 + 1;
    bubble.moveY = Math.random() * 9 + 1;
    //дарагдсан бөмбөлгийг устгах
    //   delete
    //
    bubble.addEventListener("click", function () {
      // alert(bubble.style.top + " " + bubble.style.left);
      play();
      let x = bubble.style.left;
      let y = bubble.style.top;

      alert(x + " " + y);
      fire.innerHTML = `<div class="firework" id="firework3" style="top: ${y}; left: ${x}">
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
          <div class="explosion"></div>
      </div>`;

      display.removeChild(this);

      //mouse click хийх үед бөмбөлгийн утга өөрчлөх
      if (level == 1) {
        countSpan.innerHTML = "1";
        display.childNodes.length = 1;
      } else countSpan.innerHTML = display.childNodes.length;
      if (display.childNodes.length == 0) {
        //move function цэвэрлэх хурдыг хэт хурдан болгохгүйн тулд
        clearInterval("move()");
        if (confirm("Та яллаа дараагийн үе орох уу?")) {
          level++;
          beginGame(level);
        }
      }
    });
    display.appendChild(bubble);
  }
  //хөдөлгөх 1000 = 1 seconds
  setInterval("move()", 100);
  //бөмбөлгийн тоо
  countSpan.innerHTML = display.childNodes.length;
  levelSpan.innerHTML = level;
};
clearInterval("timingFunction()");
setInterval("timingFunction()", 1000);
if (time == 0) {
  if (confirm("GameOver. Would you like to restart?")) {
    level = 1;
    beginGame(level);
  }
}
//функцаа дуудаж ажиллуулах

beginGame(level);
timeSpan.innerHTML = time;
var timingFunction = function () {
  timeSpan.innerHTML = time;
  time--;
  if (time == 0) {
    alert("Game Over, Start again");
    level = 1;
    beginGame();
  }
};

// new game button
let newGame = function () {
  level = 1;
  // let reBubble = document.querySelectorAll("#bubble");
  // reBubble.remove(reBubble);
  // display.removeChild(this);
  // reBubble.classList.removeChild
  beginGame(level);
};
btn.addEventListener("click", newGame);

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}
