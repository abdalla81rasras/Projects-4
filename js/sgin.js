const form=document.getElementById("form");
const user=document.getElementById("name");
const email=document.getElementById("email");
const pas1=document.getElementById("pass1");
const pas2=document.getElementById("pass2"); 


   form.addEventListener("click" , function(e){
        e.preventDefault();
        checkInput();
   });

 function checkInput(){   

  const nameValue=   user.value.trim();
  const emailValue=  email.value.trim();
  const pass1Value=  pas1.value.trim();
  const pass2Value=  pas2.value.trim();

     if(nameValue===""){     
          setError(user,"Empty Field");
     }else{
          setCorrect(user);  }

     if(emailValue===""){    
        setError(email,"Empty Field");
     }else if(!isEmail(emailValue)){
        setError(email,"Email is not valid");
     }else{
        setCorrect(email); }

     if(pass1Value===""){    
        setError(pas1,"Empty Field");
     }else{
        setCorrect(pas1); } 
        
    if(pass2Value===""){    
        setError(pas2,"Empty Field");
     }else if(pass1Value!==pass2Value){
        setError(pas2,"Not same password");
    }else {
        setCorrect(pas2);  }
 }

 function setError(input , message){
    let FormControl = input.parentElement;  
     FormControl.className="f_control error";  

    let Small=FormControl.querySelector("small");
    Small.innerText=message; 
 }

 function setCorrect(input){
   let FormControl=input.parentElement;
   FormControl.className="f_control correct";
   
 }

 function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 }

