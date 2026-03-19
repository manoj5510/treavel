let qu=document.getElementById("qu")
let qu1=document.getElementById("qu1")
let total=document.getElementById("total")

let a=0;
let b=0;
let c=0;
let d=0
let obj={}
adprice=15000;
childprice=10000;
quantity=0
quantity1=0


function add(){

    qu.innerText=++quantity
    a=quantity*adprice
    

    da.innerText=`Adult : ${quantity}`
tot()

}

function sub(){

    qu.innerText=--quantity

    if(qu.innerText<=0){
        quantity=0
        qu.innerText=0

    }
     a=quantity*adprice

    da.innerText=`Adult : ${quantity}`
    //  console.log(a);
     tot()
}
function add1(){

    qu1.innerText=++quantity1

        b=quantity1*childprice

        // console.log(b);
 dc.innerText=`child : ${quantity1}`
        tot()
        
}
function sub1(){

    qu1.innerText=--quantity1
      if(qu1.innerText<=0){
         qu1.innerText=0
         quantity1=0

    }
    b=quantity1*childprice
      
   dc.innerText=`child : ${quantity1}`
        tot()
}



function tot(){
    c=a+b
    console.log(c)

     total.innerText=c;

          let ptt=document.getElementById("ptt")
 ptt.innerText=c
 console.log(c);
 console.log(ptt);
}

// console.log(tot("hi"))

let dn=document.getElementById("dn")
let de=document.getElementById("de")
let dp=document.getElementById("dp")
let da=document.getElementById("da")
let dc=document.getElementById("dc")
let dd=document.getElementById("dd")






let id=(z)=> document.getElementById(z);

let option=document.getElementById("option")

let classes=(classes)=> document.getElementsByClassName(classes);


let username=id("username"),
email=id("email"),
password=id("password"),
form=id("form")
number=id("number")
perfectdate=id("perfectdate")
perfecttime=id("perfecttime")
mrn=id("mrn")
option=id("option")


errorMsg=classes("error"),
successIcon=classes("succes-icon"),
failureIcon=classes("failure-icon")





form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent actual form submission (optional)

    // console.log(mano);  
    
    
     console.log(c);

 



    engine(username,0,"username can not be blank");

    engine(number,1,"number cannot be blank");

    engine(email,2,"email cannot be blank");


    engine(perfectdate,3,"perfectdate cannot be blank");

    engine(perfectdatereturn,4,"perfectdatereturn cannot be blank");

    engine(perfecttime,5,"perfecttime cannot be blank")




    obj={
        name:username.value,
        email:email.value,
        number:number.value,
        date:perfectdate.value

    }
   

  console.log(obj.name);

  dn.innerText=`Name : ${obj.name}`
   de.innerText=`Email : ${obj.email}`
    dp.innerText=`Phone : ${obj.number}`
     dd.innerText=`Date : ${obj.date}`


    
    
    
    let crt = event.submitter.value;
    console.log(crt);
    

    if(crt==="submit"){
        
    

      if(c>=1){
 
        option.style="top:20%"

    }
        else if (c==0){
            alert("plase fill min one ticket")
        }

     }

    

    

})




   


















let engine = (id, serial, message)=>{

    if(id.value.trim()===""){

        errorMsg[serial].innerText = message;


        id.style.border="2px solid red";


        console.log("if");
        


        // icon

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0"

        

    }
    // else if(c==0){
    //     alert("hello")
    //  }

     
    else if(id.value!==""){
         errorMsg[serial].innerText = "";


         console.log("else");
         

         

          id.style.border="2px solid green";



        // icon

        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";

        
        //    console.log("hello");


   
           


    }


       
}
















const card = document.getElementById("card");

card.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, ""); // remove non-digits
    
    // limit to 16 digits
    value = value.substring(0, 16);

    // add space every 4 digits
    value = value.replace(/(.{4})/g, "$1 ").trim();

    e.target.value = value;
});

const cvv = document.getElementById("cvv");

cvv.addEventListener("input", function (e) {
    // Allow numbers only
    e.target.value = e.target.value.replace(/\D/g, "");
});
let edate=document.getElementById("edate")


// image

let gpay=document.getElementById("gpay")
let paytm=document.getElementById("paytm")
let phone=document.getElementById("phone")

gpn=0
paytn=0
phonn=0
function gp(){

    gpay.style=" transform: scale(1.2);"
    paytm.style=" transform: scale(1)"
      phone.style=" transform: scale(1)"

    gpn=1
    paytn=0
phonn=0

}
function payt(){
         gpay.style=" transform: scale(1);"
    paytm.style=" transform: scale(1.2)"
      phone.style=" transform: scale(1)"
    paytn=1
    phonn=0
    gpn=0
}
function phon(){
         gpay.style=" transform: scale(1);"
    paytm.style=" transform: scale(1)"
      phone.style=" transform: scale(1.2)"
    phonn=1
    gpn=0
    paytn=0
}



let pm=document.getElementById("pm");
let pt=document.getElementById("pt")
function pa(){
    console.log(card.value);
console.log(cvv.value);
console.log(edate.value);
console.log(gpn);
console.log(paytn);
console.log(phonn);

let payment=document.getElementById("payment")



if(card.value!="" && cvv.value!="" && edate.value!="" || gpn==1 || paytn==1 || phonn==1){
    console.log("hello")
    option.style="top:-70%"
    payment.style="top:30%"

    if(card.value!="" && cvv.value!="" && edate.value!="" ){

        pm.innerText="card"
        pt.innerText="card"

    }
    else if( gpn==1 || paytn==1 || phonn==1){
        pm.innerText="upi method"
         if(gpn==1){
             pt.innerText="gpay"

    }
     else if(paytn==1){
         pt.innerText="paytm"
        
    }
     else if(phonn==1){
         pt.innerText="phonepay"
        
    }
    }
    
}


}

let gif=document.getElementById("gif")
function end(){

    gif.style="width:100%;height:720px;z-index:5"
    payment.style="top:-50%"
    
}

setInterval(function(){
    gif.style="top:-100%"
},13000)

 




// ------------------ TICKET ------------------

// let qu = document.getElementById("qu")
// let qu1 = document.getElementById("qu1")
// let total = document.getElementById("total")

// let a = 0, b = 0, c = 0

// let adprice = 15000
// let childprice = 10000
// let quantity = 0
// let quantity1 = 0

// function add(){
//     quantity++
//     qu.innerText = quantity
//     a = quantity * adprice
//     da.innerText = `Adult : ${quantity}`
//     tot()
// }

// function sub(){
//     if(quantity > 0) quantity--
//     qu.innerText = quantity
//     a = quantity * adprice
//     da.innerText = `Adult : ${quantity}`
//     tot()
// }

// function add1(){
//     quantity1++
//     qu1.innerText = quantity1
//     b = quantity1 * childprice
//     dc.innerText = `Child : ${quantity1}`
//     tot()
// }

// function sub1(){
//     if(quantity1 > 0) quantity1--
//     qu1.innerText = quantity1
//     b = quantity1 * childprice
//     dc.innerText = `Child : ${quantity1}`
//     tot()
// }

// function tot(){
//     c = a + b
//     total.innerText = c

//     let ptt = document.getElementById("ptt")
//     if(ptt) ptt.innerText = c
// }

// // ------------------ FORM ------------------

// let dn = document.getElementById("dn")
// let de = document.getElementById("de")
// let dp = document.getElementById("dp")
// let da = document.getElementById("da")
// let dc = document.getElementById("dc")
// let dd = document.getElementById("dd")

// let username = document.getElementById("username")
// let email = document.getElementById("email")
// let number = document.getElementById("number")
// let perfectdate = document.getElementById("perfectdate")
// let perfectdatereturn = document.getElementById("perfectdatereturn")
// let perfecttime = document.getElementById("perfecttime")
// let form = document.getElementById("form")
// let option = document.getElementById("option")

// let errorMsg = document.getElementsByClassName("error")
// let successIcon = document.getElementsByClassName("succes-icon")
// let failureIcon = document.getElementsByClassName("failure-icon")

// // ------------------ VALIDATION ------------------

// function engine(input, index, message){
//     if(!input || input.value.trim() === ""){
//         errorMsg[index].innerText = message
//         input.style.border = "2px solid red"
//         failureIcon[index].style.opacity = "1"
//         successIcon[index].style.opacity = "0"
//         return false
//     } else {
//         errorMsg[index].innerText = ""
//         input.style.border = "2px solid green"
//         failureIcon[index].style.opacity = "0"
//         successIcon[index].style.opacity = "1"
//         return true
//     }
// }

// // ------------------ SUBMIT ------------------

// form.addEventListener("submit", function(e){
//     e.preventDefault()

//     let v1 = engine(username,0,"Enter username")
//     let v2 = engine(number,1,"Enter number")
//     let v3 = engine(email,2,"Enter email")
//     let v4 = engine(perfectdate,3,"Select date")
//     let v5 = engine(perfectdatereturn,4,"Select return date")
//     let v6 = engine(perfecttime,5,"Select time")

//     let isValid = v1 && v2 && v3 && v4 && v5 && v6
//     let hasTicket = (quantity > 0 || quantity1 > 0)

//     if(!isValid){
//         alert("❌ Please fill all fields")
//         return
//     }

//     if(!hasTicket){
//         alert("❌ Please select at least 1 ticket")
//         return
//     }

//     // SUCCESS
//     option.style.top = "20%"

//     dn.innerText = `Name : ${username.value}`
//     de.innerText = `Email : ${email.value}`
//     dp.innerText = `Phone : ${number.value}`
//     dd.innerText = `Date : ${perfectdate.value}`
// })

// // ------------------ CARD ------------------

// let card = document.getElementById("card")
// if(card){
//     card.addEventListener("input", function(e){
//         let value = e.target.value.replace(/\D/g, "")
//         value = value.substring(0,16)
//         value = value.replace(/(.{4})/g, "$1 ").trim()
//         e.target.value = value
//     })
// }

// let cvv = document.getElementById("cvv")
// if(cvv){
//     cvv.addEventListener("input", function(e){
//         e.target.value = e.target.value.replace(/\D/g, "")
//     })
// }

// let edate = document.getElementById("edate")

// // ------------------ PAYMENT METHOD ------------------

// let gpay = document.getElementById("gpay")
// let paytm = document.getElementById("paytm")
// let phone = document.getElementById("phone")

// let gpn=0, paytn=0, phonn=0

// function gp(){
//     gpay.style.transform="scale(1.2)"
//     paytm.style.transform="scale(1)"
//     phone.style.transform="scale(1)"
//     gpn=1; paytn=0; phonn=0
// }

// function payt(){
//     gpay.style.transform="scale(1)"
//     paytm.style.transform="scale(1.2)"
//     phone.style.transform="scale(1)"
//     paytn=1; gpn=0; phonn=0
// }

// function phon(){
//     gpay.style.transform="scale(1)"
//     paytm.style.transform="scale(1)"
//     phone.style.transform="scale(1.2)"
//     phonn=1; gpn=0; paytn=0
// }

// let pm = document.getElementById("pm")
// let pt = document.getElementById("pt")

// function pa(){
//     let payment = document.getElementById("payment")

//     if(
//         (card.value!=="" && cvv.value!=="" && edate.value!=="") ||
//         gpn==1 || paytn==1 || phonn==1
//     ){
//         option.style.top = "-70%"
//         payment.style.top = "30%"

//         if(card.value!=="" && cvv.value!=="" && edate.value!==""){
//             pm.innerText="card"
//             pt.innerText="card"
//         } else {
//             pm.innerText="upi"
//             if(gpn) pt.innerText="gpay"
//             else if(paytn) pt.innerText="paytm"
//             else if(phonn) pt.innerText="phonepe"
//         }
//     } else {
//         alert("❌ Enter payment details or select UPI")
//     }
// }

// // ------------------ END ------------------

// let gif = document.getElementById("gif")

// function end(){
//     let payment = document.getElementById("payment")
//     gif.style="width:100%;height:720px;z-index:5"
//     payment.style.top="-50%"
// }

// setInterval(()=>{
//     if(gif) gif.style.top="-100%"
// },13000)
