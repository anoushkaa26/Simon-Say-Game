let gameSeq=[];
let userseq=[];
let btns = ["one","two","three","four"];

let level = 0;
let started = false;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (started == false){
        console.log("Game started");
        started = true;
    }
    levelUp();
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
    btn.classList.remove("gameflash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");
    }, 250);
}
function levelUp(){
userseq=[];
level++;
h2.innerText=`Level ${level}`;

//random
let random = Math.floor(Math.random()*3);
let randColor = btns[random];
let ranBtn = document.querySelector(`.${randColor}`);



// console.log(random);
// console.log(randColor);
// console.log(ranBtn);
gameSeq.push(randColor);
console.log(gameSeq);
gameFlash(ranBtn);
}
function checkAns(idx){
    // console.log("curr level - ", level);
   
    // let idx = level - 1;
    if(userseq[idx] === gameSeq[idx]){
        // console.log("same level");
        if(userseq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
       
        h2.innerHTML=`Game Over. Your score was <b>${level}</b>. <br> Press any key to restart.<br> `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = " #FFF6B3";
        },150)
    
        reset();
       
    }

}


function btnPress (){
    let btn = this;
    // console.log(this);
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started = false;
    gameSeq=[];
    userseq=[];
    level =0;
}
