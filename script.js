window.onload = function () {
    $("#startButton").on("click", timer.start);
    $("#done").on("click", timer.stop);
   }
   
   var totalquestions = 4;
   var score = 0;
   var correctAnswer = ["a", "a", "a", "a"];
   var results = 0;
   var runningClock = false;
   var timer = 45;
   

   
   
   function userAnswers() {
    var q1 = document.forms["a"]["q1"].value;
    var q2 = document.forms["a"]["q2"].value;
    var q3 = document.forms["a"]["q3"].value;
    var q4 = document.forms["a"]["q4"].value;
    console.log(q1, q2, q3, q4);
   }
   
   
   
   //starting the timer
     function startButton() {
     $("timerCount").text("Time Remaing: " + timer);
     setInterval(timerCount, 1000);
    }
   
   
     //decrement timer and stop at 0
     function countDown() {
     timer--;
     $("timerCount").text("Time Remaining: " + timer);
     if (time>= 0) {
     stopTimer(0);
      $("timer").empty();
     }
     } ​
   
    if(q1 === null || q1 === "") {
    alert("You didn't answer question 1");
   return false;
    }
   
   
   for(i=1; i <= totalQuestions; i++) {
   if(eval("q"+i) === null || eval("q"+i) === "") {
   alert("You didn't answer question " + i);
   return false;    
   }
   
   
    if (q1 === null || q1 === "") {
     alert("You didn't answer question 1");
    return false;
    }
    if (q2 === null || q2 === "") {
     alert("You didn't answer question 2");
     return false;
    }
    if (q3 === null || q3 === "") {
     alert("You didn't answer question 3");
     return false;
    }
    if (q4 === null || q4 === "") {
     alert("You didn't answer question 4");
     //return false;
    }
   
   
   
    if(q1 === correctAnswers[0]) {
    score++;
    }
    if(q2 === correctAnswers[1]) {
    score++;
    }
    if(q3 === correctAnswers[2]) {
    score++;
    }
    if(q4 === correctAnswers[3]) {
     score++;
    }
   
   
   
    for (i = 1; i <= totalQuestions; i++) {
    if (eval("q" + i) === correctAnswers[i - 1]) {
      score++;
     }
    }
   
   alert("You scored " + score + " out of " + totalQuestions);
   
   var results = document.getElementById("results");
   results.innerHTML = "<h3> You scored <span>" + score + " out of " + totalQuestions + "</span></h3>";
   
   ​
   }