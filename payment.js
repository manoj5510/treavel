var id=(m)=> document.getElementById(m);

var clas=(clas)=> document.getElementsByClassName(clas);

var card=id("card"),
cvv=id("cvv"),
edate=id("edate")
payform=id("payform")


errorMsg=classes("er"),
successIcon=classes("succes"),
failureIcon=classes("failure")

payform.addEventListener('submit',function(pay){
    pay.preventDefault();

        detxils(username,0,"card can not be blank");

    details(number,1,"cvv cannot be blank");

    details(email,2,"email cannot be blank");

})

let details = (id, serial, message)=>{

    if(id.value.trim()===""){

        errorMsg[serial].innerText = message;


        id.style.border="2px solid red";


        console.log("if");
        


        // icon

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0"

        

    }

     
    else if(id.value!==""){
         errorMsg[serial].innerText = "";


         console.log("else");
         

         

          id.style.border="2px solid green";



        // icon

        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";

    }    
}
