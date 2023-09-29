let gameSeq = [];
let userSeq = [];


let btns = ["green","yellow","red","blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function() {
    if(started == false) {
      console.log("Game is Started");
      started = true;  

      levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
   level++;
    h2.innerText = `Level ${level}`;

        let randomIndex = Math.floor(Math.random() * 3);
        let randomColor = btns[randomIndex];
        let randBtn = document.querySelector(`.${randomColor}`);
        gameSeq.push(randomColor);
        console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
   

    if (userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over !... Your Score was : <b>${level}</b> <br> Press any Key to Start again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "black";
        }, 150)
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);

    function reset() {
        started = false;
        gameSeq = [];
        userSeq = [];
        level = 0;
    }
}