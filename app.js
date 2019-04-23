function submit(){
    var serial=document.getElementById("serial").value;
    if(serial==="titans"){
        
         window.location.href="quiz.html";
         return false;
    }
    else{
        alert("Incorrect serial number");
    }
}
function start(){
 var fname=document.getElementById("fname");
 var lname=document.getElementById("lname");
 var email=document.getElementById("email");
var roll=document.getElementById("roll");


localStorage.setItem("fname",fname.value);
localStorage.setItem("lname",lname.value);
localStorage.setItem("roll",roll.value);
localStorage.setItem("email",email.value);
if(fname.value==="" && roll.value==="" && email.value==="" && lname.value===""){
    alert("First complete fill form ");
}
else{
    alert("Are you sure you want to start quiz...");

 window.location.href="quiz.html";

return false;

}
}

var questions = [
    {

        "question": "Q1. How to create alert box?",
        "option1": "alert='hello world'",
        "option2": "aler('hello world')",
        "option3": "alert.('hello world')",
        "option4": "alert('hello world')",
        "answer": "4"
    },
    {

        "question": "Q2.How to create variable?",
        "option1": "variable name = 'ali'",
        "option2": "var name = 'ali'",
        "option3": "variable: 'ali'",
        "option4": "variable. 'ali'",
        "answer": "2"
    },
    {

        "question": "Q3.How to create function?",
        "option1": "Function(){}",
        "option2": "function.create()",
        "option3": "function(){}",
        "option4": "function{}",
        "answer": "3"
    },
    {

        "question": "Q4.How to push value in array?",
        "option1": "arr.push(value)",
        "option2": "arr.push.value",
        "option3": "arr.(value)",
        "option4": "arr.value.push(value)",
        "answer": "1"
    },
    {

        "question": "Q5.What is javascript",
        "option1": "programming language",
        "option2": "scripting language",
        "option3": "codding language",
        "option4": "web language",
        "answer": "2"
    }

];
var question=document.getElementById("question");

var option1=document.getElementById("option1");

var option2=document.getElementById("option2");

var option3=document.getElementById("option3");
var option4=document.getElementById("option4");



question.innerHTML=questions[0].question;
option1.innerHTML=questions[0].option1;
option2.innerHTML=questions[0].option2;
option3.innerHTML=questions[0].option3;
option4.innerHTML=questions[0].option4;

var load=0;
var correct=0;
var score=0;
window.onload=function timer(){
    var timer=document.getElementById("timer");
    var min=2;
    var sec=10;
    var timerStart=setInterval(function(){
    timer.innerHTML=min + ":" + sec;
    sec--
    if(min <0){
        clearInterval(timerStart)
        alert("Time out");
        score=correct*20;
        document.getElementById("quizcontainer").style.display="none";
        document.getElementById("resultcontainer").style.display="block";
        if(score<60){
    
     document.getElementById("score").innerHTML=" Sorry You have Failed "+"\n" +"Your Score is " +score+"%" ;
     
    }
    else{
        document.getElementById("score").innerHTML="Congratulations You have Passed "+"\n" +"Your Score is " +score+"%" ;
    }
    }
    else if(sec===0){
        min--
        sec=10
    }

    },1000)
    
}

function next(){
    var val=document.querySelector("input[name='option']:checked");
    if(val===null){
        alert("Select any one option");
    
    }
    else{
          
        if(questions[load].answer===val.value){
        console.log("right");
            correct++
        }
        else{
        console.log("wrong");
        }
        if(questions.length-1===load){
             score=correct*20;
            document.getElementById("quizcontainer").style.display="none";
            document.getElementById("resultcontainer").style.display="block";
            if(score<60){
                document.getElementById("failed").innerHTML=" Sorry You have Failed " ;
               document.getElementById("score").innerHTML="Your Score is " +score+"%" ;
               
            }
               else{
                document.getElementById("passed").innerHTML=" Congratulations You have Passed " ;
                document.getElementById("score").innerHTML="Your Score is " +score+"%" ;
                
               }

            alert("questions end");
        }
        else{
    console.log(val.value);
    load++
    var val=document.querySelector("input[name='option']:checked").checked=false;
    question.innerHTML=questions[load].question;
option1.innerHTML=questions[load].option1;
option2.innerHTML=questions[load].option2;
option3.innerHTML=questions[load].option3;
option4.innerHTML=questions[load].option4;
}
}
}
function logout(){
   history.go(-2);
}
window.reload(false);



