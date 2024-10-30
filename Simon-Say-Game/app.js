
let gameseq=[];
let userseq=[];

let btns = ["yellow", "red","purple","green"];

let started = false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if( started == false ) {
     console.log("game is started");
     started = true;

     levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash")
    setTimeout(function(){
btn.classList.remove("flash");
    }, 250);
}
function userflash(btn) {
    btn.classList.add("userflash")
    setTimeout(function(){
btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userseq =[];
    level++;
    h2.innerText = `level ${level}`;

 let randIdx = Math.floor(Math.random() * 3);
 let randColor =btns[randIdx];
 let randBtn =document.querySelector(`.${randColor}`);
 //console.log(randIdx);
 //console.log(randColor);
 //console.log(randBtn);
 gameseq.push(randColor);
 console.log(gameseq);
 gameflash(randBtn);
}

function checkAns(idx) {
   if(userseq[idx] == gameseq[idx]){
    if (userseq.length == gameseq.length){
        setTimeout(levelup,1000);
    }
   }else{
    h2.innerHTML = `Game over! your score was <b>${level}</b>  <br>press any key to start.`;
    document.querySelector("body").style.backgroundColor ="red";
    setTimeout(function (){
        document.querySelector("body").style.color ="white";
    },150);
    reset();
}
}
function btnPress () {
    
    let btn =this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click" , btnPress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq =[];
    level = 0;
}