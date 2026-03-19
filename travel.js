
let vedio1=document.getElementById("vedio1");
let vedio2=document.getElementById("vedio2")
let vedio3=document.getElementById("vedio3")
let vedio4=document.getElementById("vedio4")
let vedio5=document.getElementById("vedio5")

let ho1=document.getElementById("ho1")
let ho2=document.getElementById("ho2")
let ho3=document.getElementById("ho3")
let ho4=document.getElementById("ho4")
let ho5=document.getElementById("ho5")

function nature(){

    vedio1.style=" z-index: 0;"
    vedio2.style=" z-index: 0;"
    vedio3.style=" z-index: 0;"
    vedio4.style=" z-index: 10;"
    vedio5.style=" z-index: 0;"
    ho1.style="color:red";
     ho2.style="color:white";
      ho3.style="color:white";
       ho4.style="color:white"
        ho5.style="color:white"
  

   
}
function ad(){
      vedio1.style=" z-index: 0;"
    vedio2.style=" z-index: 0;"
    vedio3.style=" z-index: 0;"
    vedio4.style=" z-index: 0;"
    vedio5.style=" z-index: 10;"
    ho1.style="color:white";
     ho2.style="color:red";
      ho3.style="color:white";
       ho4.style="color:white"
        ho5.style="color:white"
     
  
   

    
  
    
}
function city(){
      vedio1.style=" z-index: 10;"
    vedio2.style=" z-index: 0;"
    vedio3.style=" z-index: 0;"
    vedio4.style=" z-index: 0;"
    vedio5.style=" z-index: 0;"
    ho1.style="color:white";
     ho2.style="color:white";
      ho3.style="color:red";
       ho4.style="color:white"
        ho5.style="color:white"
    
    
    
}
function wild(){
      vedio1.style=" z-index: 0;"
    vedio2.style=" z-index: 10;"
    vedio3.style=" z-index: 0;"
    vedio4.style=" z-index: 0;"
    vedio5.style=" z-index: 0;"
    ho1.style="color:white";
     ho2.style="color:white";
      ho3.style="color:white";
       ho4.style="color:white"
        ho5.style="color:red"
     
}


function sp(){
      vedio1.style=" z-index: 0;"
    vedio2.style=" z-index: 0;"
    vedio3.style=" z-index: 10;"
    vedio4.style=" z-index: 0;"
    vedio5.style=" z-index: 0;"
    ho1.style="color:white";
     ho2.style="color:white";
      ho3.style="color:white";
       ho4.style="color:red"
        ho5.style="color:white"
     
  
}


let txt = document.getElementsByClassName("list");

// first image active
txt[0].classList.add("active");

function add(){

    if(txt.length > 1){

        let parent = txt[0].parentElement;

        let current = txt[0];
        let next = txt[1];

        // grow next
        next.classList.add("active");

        setTimeout(() => {

            // shrink current
            current.classList.remove("active");

            // move current to last
            parent.appendChild(current);

        }, 800);
        
    }
}

function sub(){

    if(txt.length > 1){

        let parent = txt[0].parentElement;

        let current = txt[0];
        let last = txt[txt.length - 1];

        // 1️⃣ shrink current
        current.classList.remove("active");

        setTimeout(() => {

            // 2️⃣ move last to front
            parent.prepend(last);

            // 3️⃣ grow new first
            txt[0].classList.add("active");

        }, 200);

    }
}


let res=document.getElementById("res")

let re=true

function  resnav(z){
        console.log(z)
        re=!re

        if(re!=true){
                 res.style="left:3%"
                 
                 
        }
        else {
             res.style="left:-100%"  
             
        }

       

}


let patta=document.getElementById("patta")

let str=true

function  pattanni(z){
        console.log(z)
        str=!str

        if(str!=true){
                 patta.style="color:red"
                 
                 
        }
        else {
             patta.style="color:black"  
             
        }

       

}
let chlid=document.getElementById("child")

let c=true

function  chil(z){
        console.log(z)
        c=!c

        if(c!=true){
                 child.style="color:red"
                 
                 
        }
        else {
             child.style="color:black"  
             
        }

       

}
let paru=document.getElementById("paru")

let pa=true

function  parumal(z){
        console.log(z)
        pa=!pa

        if(pa!=true){
                 paru.style="color:red"
                 
                 
        }
        else {
             paru.style="color:black"  
             
        }

       

}
let sak=document.getElementById("sak")

let sa=true

function  sakthi(z){
        console.log(z)
        sa=!sa

        if(sa!=true){
                 sak.style="color:red"
                 
                 
        }
        else {
             sak.style="color:black"  
             
        }

       

}
let go=document.getElementById("go")

let g=true

function  gopal(z){
        console.log(z)
        g=!g

        if(g!=true){
                 go.style="color:red"
                 
                 
        }
        else {
             go.style="color:black"  
             
        }

       

      }

      let ved=document.getElementById("ved")

let ve=true

function  vedha(z){
        console.log(z)
        ve=!ve

        if(ve!=true){
                 ved.style="color:red"
                 
                 
        }
        else {
             ved.style="color:black"  
             
        }

       

}

   let dh=document.getElementById("dh")

let d=true

function  dha(z){
        console.log(z)
        d=!d

        if(d!=true){
                 dh.style="color:red"
                 
                 
        }
        else {
             dh.style="color:black"  
             
        }

       

}

 let gir=document.getElementById("gir")

let gi=true

function  giri(z){
        console.log(z)
        gi=!gi

        if(gi!=true){
                 gir.style="color:red"
                 
                 
        }
        else {
             gir.style="color:black"  
             
        }

       

}







let lname=document.getElementById("lname")
let lemail=document.getElementById("lemail")
let lpass=document.getElementById("lpass")
let loginbox=document.getElementById("loginbox")
let signu=document.getElementById("signup")
let semail=document.getElementById("semail")
let spass=document.getElementById("spass")






  
function signup(){

        signu.style="top:30%"
        loginbox.style="top:-50%"
        
        

}


function  singwrong(){
         signu.style="top:-40%"

         
         
}


function logwrong(){

        loginbox.style="top:-50%"

}

function upsign(){


        console.log(semail.value);
        console.log(spass.value);

        
        if(semail.value!=="" && spass.value!==""){
                signu.style="top:-50%"
        }


        else{
                alert("fill signup")
        }
         
}

function login(){
        loginbox.style="top:40%"
        signu.style="top:-50%"



}

function inlogin(){
         

        if(lname!=="" && lemail!=="" && lpass!==""){

                console.log("hello");


                if(lemail.value === semail.value && lpass.value === spass.value){

                        alert("login successful")

                     loginbox.style="top:-50%"

                }
                

             else  if (lemail.value !== semail.value) {
    console.log("lemail");
} 
else if (lpass.value !== spass.value) {
    console.log("lpass");
}



                
        }

}





// slider

// destination
  const slider = document.getElementById("slider");
  const leftBtn = document.getElementById("left");
  const rightBtn = document.getElementById("right");
//   const boxes = document.querySelectorAll(".box");

  let index = 0;
  const boxWidth = 205; // width + margin

  rightBtn.addEventListener("click", () => {

  slider.style.transition = "transform 1s ease";
  slider.style.transform = `translateX(-${boxWidth}px)`;

  setTimeout(() => {
    const firstBox = slider.firstElementChild;
    slider.appendChild(firstBox);

    slider.style.transition = "none";
    slider.style.transform = "translateX(0)";
  }, 1000);

});


leftBtn.addEventListener("click", () => {

  const lastBox = slider.lastElementChild;
  slider.prepend(lastBox);

  slider.style.transition = "none";
  slider.style.transform = `translateX(-${boxWidth}px)`;

  setTimeout(() => {
    slider.style.transition = "transform 1s ease";
    slider.style.transform = "translateX(0)";
  }, 50);

});







const opt = document.getElementById("option");
  const leftB = document.getElementById("leftbutton");
  const rightB = document.getElementById("rightbutton");
  const boxes = document.querySelectorAll(".box");

//   let cuindex = 0;
  const minboxWidth = 100; // width + margin

  rightB.addEventListener("click", () => {

  opt.style.transition = "transform 1s ease";
  opt.style.transform = `translateX(-${minboxWidth}%)`;

  setTimeout(() => {
    const firstBox = opt.firstElementChild;
    opt.appendChild(firstBox);

    opt.style.transition = "none";
    opt.style.transform = "translateX(0)";
  }, 1000);

});


leftB.addEventListener("click", () => {

  const lastBox = opt.lastElementChild;
  opt.prepend(lastBox);

  opt.style.transition = "none";
  opt.style.transform = `translateX(-${minboxWidth}%)`;

  setTimeout(() => {
    opt.style.transition = "transform 1s ease";
    opt.style.transform = "translateX(0)";
  }, 50);

});
