
let text = "";
let high = "";
let mid = "";
let low = "";
let highsep = "";
let midsep = "";
let lowsep = "";
function main(){
    var ele=document.getElementById("cars").value;
    if(ele=="h")
    {
        highp();
    }
    else if(ele=="m")
    {
        midp();
    }
    else 
    {
        lowp();
    }
}
function highp(){
 var message=document.getElementById("name").value;
//  var myp=document.getElementById("demoo");
  
    // var highbackground=document.getElementById("demo");
    
if(message!=="")
 { 
    // highbackground.className="red";
    text += message+"<br>" ;
    high += message+"<span>(high)</span>"+"<br>" ;
    highsep += message+"<br>" ;

    
    // var adi = document.createTextNode(text);
    // myp.appendChild(adi);
    document.getElementById("demohigh").innerHTML =high;
 }

}
function midp(){
 var message=document.getElementById("name").value;
 
if(message!=="")
{ 
    
    //  var midbackground=document.getElementById("demo");
    //  midbackground.className="blue"; 
    text += message + "<br>";
    mid += message+"<span>(mid)</span>"+"<br>";
    midsep += message+"<br>" ;
    
    document.getElementById("demomid").innerHTML = mid;
}


}
function lowp(){
 
var message=document.getElementById("name").value;
if(message!=="")
{    
    // var lowbackground=document.getElementById("demo");
    // lowbackground.className="green";
    text += message + "<br>";
    low += message +"<span>(low)</span>"+ "<br>";
    lowsep += message+"<br>" ;

    document.getElementById("demolow").innerHTML =low;
}


} function highshow(){
 
 
 var highbackground=document.getElementById("dem");
 highbackground.className="red";
 // document.getElementById("dem")
 highbackground.innerHTML = highsep;

}
function midshow(){
    var highbackground=document.getElementById("dem");
    highbackground.className="blue";
 
 document.getElementById("dem").innerHTML = midsep;



}
function lowshow(){
    var highbackground=document.getElementById("dem");
    highbackground.className="green";
 document.getElementById("dem").innerHTML = lowsep;
}