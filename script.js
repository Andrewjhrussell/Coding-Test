$("#startGame").on("click", init);
// $("#done").on("click", timer.stop);


var totalquestions = 4;
var score = 0;
var correctAnswer = ["a", "a", "a", "a"];
var results = 0;
var runningClock = false;
var timer = 45;
var theTimer
var questions =[
  {
    question: "Magic comes from your heart?",
    answer: true
  },
  {
    question: "With Magic you can move objects with your mind and heart?",
    answer: true
  },
  {
    question: "In Magic salt keeps negativity away?",
    answer: true
  },
  {
    question: "In Magic pepper is a weapon ",
    answer: true
  }
]
count= 0
function gameover(){
  $("#questionsArea").attr("hidden",true)
  clearInterval(theTimer)
  $("#gameover").removeAttr('hidden')
}
function check(answer){

  if(answer !== questions[count].answer){
    timer = timer - 10
  }
  count++
  if(count === questions.length){
    gameover()
  }else{

    showQuestion()
  }
}
function showQuestion(){
  $("#theQuestion").text(questions[count].question)
}

function init(){
  console.log("started")
  $("#startGame").attr("hidden", true)
  $("#questionsArea").removeAttr('hidden')
  theTimer = setInterval(countDown, 1000);
  showQuestion()
}


// function userAnswers() {
//   var q1 = document.forms["a"]["q1"].value;
//   var q2 = document.forms["a"]["q2"].value;
//   var q3 = document.forms["a"]["q3"].value;
//   var q4 = document.forms["a"]["q4"].value;
//   console.log(q1, q2, q3, q4);
// }



//starting the timer
function startButton() {
  $("timerCount").text("Time Remaing: " + timer);
  setInterval(timerCount, 1000);
}


//decrement timer and stop at 0
function countDown() {
  timer--;
  $("#time").text(timer + " seconds");
  if (timer <= 0) {
    gameover()
  }
}

// if (q1 === null || q1 === "") {
//   alert("You didn't answer question 1");
//   return false;
// }


// for (i = 1; i <= totalQuestions; i++) {
//   if (eval("q" + i) === null || eval("q" + i) === "") {
//     alert("You didn't answer question " + i);
//     return false;
//   }


//   if (q1 === null || q1 === "") {
//     alert("You didn't answer question 1");
//     return false;
//   }
//   if (q2 === null || q2 === "") {
//     alert("You didn't answer question 2");
//     return false;
//   }
//   if (q3 === null || q3 === "") {
//     alert("You didn't answer question 3");
//     return false;
//   }
//   if (q4 === null || q4 === "") {
//     alert("You didn't answer question 4");
//     //return false;
//   }



//   if (q1 === correctAnswers[0]) {
//     score++;
//   }
//   if (q2 === correctAnswers[1]) {
//     score++;
//   }
//   if (q3 === correctAnswers[2]) {
//     score++;
//   }
//   if (q4 === correctAnswers[3]) {
//     score++;
//   }



//   for (i = 1; i <= totalQuestions; i++) {
//     if (eval("q" + i) === correctAnswers[i - 1]) {
//       score++;
//     }
//   }

//   alert("You scored " + score + " out of " + totalQuestions);

//   var results = document.getElementById("results");
//   results.innerHTML = "<h3> You scored <span>" + score + " out of " + totalQuestions + "</span></h3>";


// }