
// For MOdal opening and closing
document.getElementById("contact").addEventListener("click",function display(){
    var m=document.getElementById("myModal")
  m.style.display="block"
  m.classList.add('open')
  event.preventDefault();
})
document.getElementsByClassName("close")[0].addEventListener("click",function display(){
   document.getElementById("myModal").style.display="none";
})


function validate(){

    var firstname=document.getElementById("fn").value
    if(firstname.length==0){
        document.getElementById("name1").innerHTML="please enter your first name";
        document.getElementById("name1").style.color="black";
        return false;
    }
    else if(firstname.length<3 || firstname.length>15){
        document.getElementById("name1").innerHTML="firstname should have 3-15 characters";
        document.getElementById("name1").style.color="black";
        return false;
    }
    else{
        document.getElementById("name1").innerHTML=" ";
  
    }

    var lastname=document.getElementById("ln").value
    if (lastname.length == "")                                  
    { 
        document.getElementById("name2").innerHTML="Please enter your last name"
        document.getElementById("name2").style.color="black";
        return false; 
    }
    else if(lastname.length>10){
        document.getElementById("name2").innerHTML="lastname should have 1-10 characters"
        document.getElementById("name2").style.color="black";
        return false
    }
    else{
        document.getElementById("name2").innerHTML=" ";
  
    }

    var mobile=document.getElementById("mob").value
     if (mobile.length == "")                                  
    { 
        document.getElementById("phone").innerHTML="Please enter your phone number"
        document.getElementById("phone").style.color="black";
        return false; 
    }
    else if(mobile.length<10){
        document.getElementById("phone").innerHTML="phone number should contain 10digits excluding +91"
        document.getElementById("phone").style.color="black";
        return false
    }
    else if(mobile.length>10){
        document.getElementById("phone").innerHTML="phone number should contain 10digits excluding +91"
        document.getElementById("phone").style.color="black";
        return false
    }
    else if(mobile.charAt(0)<7){
        document.getElementById("phone").innerHTML="the phone number should start from 7 , 8  and 9"
        document.getElementById("phone").style.color="black";
        return false;
    }
    else{
        document.getElementById("phone").innerHTML=" ";
    }

    
    
    var boolean=false;
    var f=document.getElementsByName("gender")
    
    for (var i =0; i<f.length; i++) 
    {
        if (f[i].checked==true)
        {
           boolean=true;
        }
    }

    if (!boolean)
    {
        alert("No option selected for Gender")
        return false;
    }
    // else
    // {
    //     document.getElementById("span").innerHTML = "";
    // }
    

    var cc=document.getElementById("agree1")
    if(!cc.checked){
      alert("Please accept terms and conditions")
      return false
     }
     else{
      document.getElementById("chk").innerHTML=" "
      }

        var password=document.getElementById("pwd").value
        var confirmpassword=document.getElementById("cpwd").value
        var p=/^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{3,16}$/
        if(p.test(password)){
            document.getElementById("password1").innerHTML=" "
        }
        else{
            document.getElementById("password1").innerHTML="Password should contains atleast 1 number,1 charadter and 8-16 length"
            return false;
        }

        if(password==confirmpassword){
            document.getElementById("password2").innerHTML=" "
                       return true
        }
        else{
            document.getElementById("password2").innerHTML="Password is not matching"
                       document.getElementById("password2").style.color="black";
                       return false
        }

    //    if(password.length>3 && password.length<=15) {
    //         if(password==confirmpassword){
    //             document.getElementById("password2").innerHTML=" "
    //            return true
    //        }
    //        else{
    //            document.getElementById("password2").innerHTML="Password is not matching"
    //            document.getElementById("password2").style.color="black";
    //            return false
    //         }
    //    }
    //    else{
    //       document.getElementById("password1").innerHTML="Password must contain uppercase,lowercase and numbers and length must be less than 15"
    //       document.getElementById("password1").style.color="black";
    //        return false;
    //         }
      

        
}



function changecolor(){
      
    document.getElementById("btn").style.backgroundColor="blue"
  
}    





