let innerCircle=document.querySelector(".innerCircle");
//for the lap lists
let ul=document.querySelector("ul");
let laps=document.querySelector(".lap-item");
let number=document.querySelector(".number");
let timeStamp=document.querySelector(".time-stamp");
let num=0;
//buttons-B
let resetB=document.querySelector(".reset");
let playB=document.querySelector(".play");
let lapB=document.querySelector(".lap");
isplay=false;

//spans of the timer display
let 
msecf;
let secf;
let minf;
msecCountrer=0;
secCountrer=0;
minCountrer=0;
let min=document.querySelector(".min")
let sec=document.querySelector(".sec")
let msec=document.querySelector(".msec")
msec.innerText=` : ${msecCountrer}`;
sec.innerText= ` : ${secCountrer}`;
min.innerText=`${minCountrer}`;
let ting= new Audio("tingy.mp3");

lap=()=>{
    ting.play(); //making lists for laps attached
    li=document.createElement("li");
    number.innerHTML=`# ${++num}&nbsp;&nbsp;`;
    timeStamp.innerHTML= innerCircle.innerText;
    li.innerHTML=laps.innerHTML;
    ul.append(li); //done
}

reset=()=>{
    isplay=true;
    msecCountrer=0;
    msec.innerText=` : 0`;
    secCountrer=0;
    sec.innerText=` : 0`;
    minCountrer=0;
    min.innerText=`0`;
   play();
    cleary();
    resetB.classList.add("hidden");
    lapB.classList.add("hidden");
    
}

const toggleB=()=>{
    resetB.classList.remove("hidden");
    lapB.classList.remove("hidden");
}
play=()=>{
    
    if (isplay==false){
    ting.play();
   playB.innerText="Pause";
   msecf=setInterval(()=>{
    msec.innerText=` : ${msecCountrer++}`;
    if(msecCountrer==100){
        msecCountrer=0;
    }
   },10)
   secf=setInterval(()=>{
    sec.innerText=` : ${++secCountrer}`;
    if(secCountrer==60){
        secCountrer=0;
    }
   },1000);
  
   minf=setInterval(()=>{
    min.innerText=`${++minCountrer}`;
    
   },1000*60)
    isplay=true;
}else{
        isplay=false;
 playB.innerText="Play"
 clearInterval(msecf);
 clearInterval(secf);
 clearInterval(minf);
    }
    toggleB();

}

cleary=()=>{
    ting.play();
ul.innerHTML="";
num=0;
}
