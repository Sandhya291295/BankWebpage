

function deposit(){
    document.getElementById("amountdep").style.display="block"
    document.getElementById("amountwith").style.display="none"
    document.getElementById("table1").style.display="none"
}

function withdraw(){
    document.getElementById("amountwith").style.display="block"
    document.getElementById("amountdep").style.display="none"
    document.getElementById("table1").style.display="none"
}
function pbook(){
    document.getElementById("table1").style.display="block"
    document.getElementById("amountwith").style.display="none"
    document.getElementById("amountdep").style.display="none"
    document.getElementById("table1").style.backgroundColor="green"
}



var cb=document.getElementById("currentbalance").value
console.log(cb)

function btndep(){
    document.getElementById("successfuld1").innerHTML="Amount Deposited Successfully "
     document.getElementById("successfuld1").style.fontSize="20px";
     document.getElementById("successfuld1").style.fontWeight="Bolder";
    document.getElementById("successfuld2").innerHTML=new Date()
    document.getElementById("successfuld2").style.fontSize="18px";
    document.getElementById("successfuld2").style.fontWeight="Bolder";
    document.getElementById("successfuld3").innerHTML="Please check your Passbook for further details"
    document.getElementById("successfuld3").style.fontSize="18px";
     document.getElementById("successfuld3").style.fontWeight="Bolder";

    document.getElementById("currentbalance").value=Number(document.getElementById("depositamount").value)+Number( document.getElementById("currentbalance").value)

    var table1=document.getElementById("table1")
    var row=table1.insertRow();
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);

    var d=new Date().getDate()
    var m=new Date().getMonth()
    var y=new Date().getFullYear()
    var date=d+"/"+m+"/"+y
    var x=document.getElementById("description1").value

        cell1.innerHTML=date;

       
        cell2.innerHTML=x;
    cell3.innerHTML="-"
    cell4.innerHTML=document.getElementById("depositamount").value
    cell5.innerHTML= document.getElementById("currentbalance").value

    
 
}

function btnwith(){
    document.getElementById("successfulw1").innerHTML="Amount Withdrawn Successfully  "
    document.getElementById("successfulw1").style.fontSize="20px";
    document.getElementById("successfulw1").style.fontWeight="Bolder";
   document.getElementById("successfulw2").innerHTML=new Date()
   document.getElementById("successfulw2").style.fontSize="18px";
   document.getElementById("successfulw2").style.fontWeight="Bolder";
   document.getElementById("successfulw3").innerHTML="Please check your Passbook for further details"
   document.getElementById("successfulw3").style.fontSize="18px";
    document.getElementById("successfulw3").style.fontWeight="Bolder";

    document.getElementById("currentbalance").value=Number( document.getElementById("currentbalance").value)-Number(document.getElementById("withdrawamount").value)

    var table1=document.getElementById("table1")
    var row=table1.insertRow();
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);

    var d1=new Date().getDate()
    var m1=new Date().getMonth()
    var y1=new Date().getFullYear()
    var date1=d1+"/"+m1+"/"+y1
    var y=document.getElementById("description2").value

        cell1.innerHTML=date1;

       
        cell2.innerHTML=y;
    cell3.innerHTML=document.getElementById("withdrawamount").value
    cell4.innerHTML="-"
    cell5.innerHTML= document.getElementById("currentbalance").value
}





// function btnwith(){
//     document.getElementById("table22").style.backgroundColor="green"
//     document.getElementById("table11").style.display="none"
//     document.getElementById("currentbalance").value=Number( document.getElementById("currentbalance").value)-Number(document.getElementById("withdrawamount").value)
//     var table1=document.getElementById("table22")
//     var row=table1.insertRow();
//     var cell1=row.insertCell(0);
//     var cell2=row.insertCell(1);
//     cell1.innerHTML=document.getElementById("withdrawamount").value
//     cell2.innerHTML= document.getElementById("currentbalance").value
// }
