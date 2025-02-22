Email=document.getElementById("Email");
password=document.getElementById("password");
phone=document.getElementById("phone");
Age=document.getElementById("Age");
button=document.getElementById("button");
 button.addEventListener('blur',()=>{
    if(Email.value==""){
        Email.style.border="1px solid red";
        
         alert("Email is required")
    }
   
    
    else{
        Email.style.border="1px solid green";
       
      
    }
 });
  button.addEventListener('blur',()=>{
    if(password.value==""){
    password.style.border='1px solid red';
    alert("password is required");

    }
    else{
        password.style.border='1px solid green';
    }
  });
  button.addEventListener('blur',()=>{
    if(phone.value==""){
   phone.style.border='1px solid red';
    alert("PhoneNumber is required");

    }
    else{
        phone.style.border='1px solid green';
    }
  });

  button.addEventListener('blur',()=>{
    if(Age.value==""){
    Age.style.border='1px solid red';
    alert("Age is required");

    }
    else{
        Age.style.border='1px solid green';
    }
  });
