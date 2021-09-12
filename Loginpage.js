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

function val(){
    var accountnumber="5592500"
    var pinpassword="1234"

    var a=document.getElementById("acnum").value
    
    if(a!==accountnumber){
        document.getElementById("acc").innerHTML="accountnumber doesnt match";
        return false;
    }
    else{
        document.getElementById("acc").innerHTML=" ";
    }

    var p=document.getElementById("pinpwd").value
    if(p!=pinpassword){
        document.getElementById("pp").innerHTML="password doesnt match"
        return false;
    }
  }

  function showpass(){
    var x =document.getElementById("pinpwd");
    if(x.type==="password"){
      x.type="text";
    }
    else{
      x.type="password"
    }

  }
  
