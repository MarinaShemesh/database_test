  
 function validateform(){
   const name=document.myform.name.value;
   const re = /^[A-Z]+$/i;
   const email=document.myform.email.value;  
   const phone=document.myform.phone.value; 
   const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   // const num_test = /^[0-9]*$/; 
    
      

 if (name==null || name==""){  
      alert("Name cannot be blank");
      name.focus();
      return false;
   }

   if(!re.test(name)){
      alert("Please use alphabetic characters");
      name.focus();
      return false;
   }
 
   if (email==null ||email ==""){  
      alert("Email cannot be blank");
      email.focus();
      return false;
   }


   if (!filter.test(email)) {
      alert('Please provide a valid email address');
      email.focus;
      return false;
  }

// +++++++This code is not working for me+++++++
   //   if (email.indexOf("@") != -1)                 
   // { 
   //     alert("You did not enter a valid email address"); 
   //     email.focus();
   //     return false; 
   // } 

   //indexOf will return -1 if item does not exist. 0 is the item's first postion

   if (email.indexOf(".", 0) < 0)                 
    { 
        alert("Please enter a valid e-mail address"); 
        email.focus(); 
        return false; 
    } 

      
   if (phone==null || phone ==""){  
      alert("Phone cannot be blank");
      phone.focus();
      return false;
   }

   // if(!num_test.test(phone)){
   //    alert("Only use numeric values");
   //    phone.focus();
   //    return false;
   // }


// validation was successful
return true;
   
 }

 //https://www.javatpoint.com/javascript-form-validation
   
   //document.getElementById("message").hidden = true;
