function calc(){
    var n1 = document.getElementById("n1").value
    var n2 = document.getElementById("n2").value
    var n3 = document.getElementById("n3").value
    var op1 =n1/1.196;
    document.getElementById("result").value =op1.toFixed(2);
    if(op1<=100.99) 
    {
        var op2= document.getElementById("result1").value=(op1*200).toFixed(2);
    }
    else if(op1>=101 && op1<=300.99)
    {
        var op2=  document.getElementById("result1").value=(op1*400).toFixed(2);
    }
    else if(op1>=301 && op1<=500.99)
    {
        var op2=   document.getElementById("result1").value=(op1*600).toFixed(2);
    }
    else if(op1>=501)
    {
        var op2=   document.getElementById("result1").value=(op1*750).toFixed(2);
    }
    if(n2>=1 && n2<=3000.99)    
    {
        var op3=document.getElementById("result2").value=(op2*0.20).toFixed(2);
    }
    else if(n2>=3001 && n2<=5000.99)
    {
        var op3=document.getElementById("result2").value=(op2*0.30).toFixed(2);
    }
    else if(n2>=5001 && n2<=10000.99)
    {
        var op3=document.getElementById("result2").value=(op2*0.40).toFixed(2);
    } 
    else if(n2>=10001 && n2<=20000.99)
    {
        var op3=document.getElementById("result2").value=(op2*0.50).toFixed(2);
    } 
    else if(n2>=20001 && n2<=30000.99)
    {
        var op3=document.getElementById("result2").value=(op2*0.60).toFixed(2);
    } 
    else if(n2>=30001 && n2<=50000.99)
    {
        var op3=document.getElementById("result2").value=(op2*0.80).toFixed(2);
    } 
     else if(n2>=50001)
    {
        var op3=document.getElementById("result2").value=(op2*1).toFixed(2);
    }      
    var op4=document.getElementById("result3").value=(n1*n3*0.14).toFixed(2);
    var op5=parseFloat(+op3)+parseFloat(+op4);
    document.getElementById("result4").value=(op5).toFixed(2); 

}