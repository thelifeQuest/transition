window.onbeforeunload = function () {
  window.scrollTo(0, 0);
} //I don't want you to see what's downthere. 
function arriving(){
    var arriv= prompt("0!=?")
    if(arriv== 1){
        document.getElementById("arrivButton").style.fontSize= "40px";
        document.getElementById("arrivButton").innerHTML="Welcome, We've been waiting on you.";
        document.getElementById("btn1").style.display ="none";
        document.getElementById("btn2").style.display ="none";
        console.log("org.x@domain?");


    } 
    }


function help(){
alert("If you just focus on the smallest details, you never get the big picture right.");

}
function secondHint(){
  alert("Maybe you should have a look around the website without a mouse?");
}

function myFunction(x) {
    if (x.matches) { 
      document.querySelector(".container").style.display="none";
      document.querySelector(".images").style.display="none";
      document.getElementById("mobile1").style.display="inline";
    } 
  }
  
  var x = window.matchMedia("(max-width: 650px)");
  myFunction(x);
  x.addListener(myFunction);


  
function mailChecker(){

var Mail = document.getElementById("emailInput").value;

if(Mail == "org.x@protonmail.com"){


  document.getElementById("output").innerText="Change the path of this Website to vita"; 

} else {
document.getElementById("output").innerText="Try again";
}

}




//Denis is a kind and loving person.