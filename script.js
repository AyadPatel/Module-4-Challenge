//element by id from stlye.css
var displayBox = document.getElementById("displayBox");

var quizBoxEl = document.getElementById("quizBox");

//creating a element button in javascript
var startQuizButton = document.createElement("button");
startQuizButton.id = "btn";

var viewHighScoresEl = document.getElementById("highScoreBox");

viewHighScoresEl.textContent = "View High Scores";

var timerAndScores = document.getElementById("timerAndScores");

var runTimerEl = document.getElementById("runTimer");

var quizChoice = document.getElementById("choiceBox");
var choiceButtonA = document.createElement("button");
var choiceButtonB = document.createElement("button");
var choiceButtonC = document.createElement("button");
var choiceButtonD = document.createElement("button");

choiceButtonA.className = "choicesButton";
choiceButtonB.className = "choicesButton";
choiceButtonC.className = "choicesButton";
choiceButtonD.className = "choicesButton";

var answerLine = document.createElement("div");
answerLine.id = "answerLine";
var confirmation = "";
var confirmEl = document.createElement("h3");
confirmEl.id = "answerConfirmation";

let resultBox = document.getElementById("resultBox");
let resultMessage = document.createElement("div");
resultMessage.id = "resultMessage";
let resultScoreMessage = document.createElement("div");
resultScoreMessage.id = "resultScoreMessage";
let resultInitialsMessage = document.createElement("div");
let resultInitialTextField = document.createElement("input");
let resultSubmitButton = document.createElement("button");
resultSubmitButton.id = "submitButton";
let resultCovering = document.createElement("div");
resultCovering.id = "resultCovering";

let endOfQuizBox = document.getElementById("endOfQuiz");
let endHighScoreMessage = document.createElement("div");
endHighScoreMessage.id = "endHighScoreMessage";
let endScoresHistory = document.createElement("div");
endScoresHistory.id = "endScoresHistory";
let goBackButton = document.createElement("button");
goBackButton.className = "endScreenButton";
let clearHighScoreButton = document.createElement("button");
clearHighScoreButton.className = "endScreenButton";

var quizQuestion = document.getElementById("questionBox");
//var i = 0;
var start = 60;
var counter = 0;
var score = 0;

// Function which displays front page of quiz
var showDisplayBox = function () {
  var displayBoxTitleEl1 = document.createElement("h1");
  var displayBoxTitleEl2 = document.createElement("h2");
  var displayBoxTitleEl3 = document.createElement("h3");
  var displayBoxTitleEl5 = document.createElement("h3");
  var displayBoxTitleEl4 = document.createElement("h3");

  displayBoxTitleEl1.textContent = "Pokemon Quiz";

  displayBoxTitleEl2.textContent = "Challenge";

  displayBoxTitleEl3.textContent =
    "Checkout This Online Quiz about Pokemon.";

  displayBoxTitleEl4.textContent = "";

  displayBoxTitleEl5.textContent =
    " EVERY INCORRECT ANSWER WILL DECREASE THE TIMER BY 5 SECONDS!";

  startQuizButton.textContent = "START QUIZ";
  // appending content from javascript to html doc
  displayBox.appendChild(displayBoxTitleEl1);
  displayBox.appendChild(displayBoxTitleEl2);
  displayBox.appendChild(displayBoxTitleEl3);
  displayBox.appendChild(displayBoxTitleEl4);
  displayBox.appendChild(displayBoxTitleEl5);
  displayBox.appendChild(startQuizButton);
};
showDisplayBox();

var questions = [
  {
    question: "How Many Pokemon Are There in The First Generation?",
    choices: [
      "200", "100", "151", "152",
    ],
    correctAnswer: "151",
  },
  {
    question: "What Type is Effective Against Water Type Pokemon?",
    choices: [
        "Water", "Grass", "Fire", "Dragon"
    ],
    correctAnswer: "Grass",
  },
  {
    question:
      "What is The Region ASH KETCHUM is From",
    choices: [
        "Kanto", "Jhoto", "Unova", "Pallet Town"
    ],
    correctAnswer: "Kanto",
  },
  {
    question: "What is ASH KETCHUM'S Starter Pokemon",
    choices: [
        "Charmander", "Pikachu", "Pichu", "None of the above"
    ],
    correctAnswer: "Pikachu",
  },
  {
    question: "What Type Are Water Pokemon Effective Against?",
    choices: [
        "Rock", "Ice", "Dark", "Electric"
    ],
    correctAnswer: "Rock",
  },
];

var theTimer;
//Start timer for quiz
function startTimer() {
  function doThis() {
    var end = 0;
    start--;
    runTimerEl.textContent = "Time Left:" + start.toString();
    if (start <= end) {
      window.clearInterval(theTimer);

      showResultBox();
    }
  }
  theTimer = window.setInterval(doThis, 1000);
  console.log("startTime");
}
//Checking the answer if it is correct or incorrect
function checkAnswer(event) {
  var choiceClick = event.target.textContent;
  //console.log(buttonClicked);
  if (choiceClick === questions[counter].correctAnswer) {
    console.log(
      "inside if statement ",
      questions[counter].correctAnswer,
      " ",
      counter
    );
    score++;
    confirmation = "Correct!";
    //decreases timer by 5 seconds for every incorrect answer
  } else {
    start = start - 5;
    confirmation = "Incorrect!";
  }
  confirmEl.textContent = confirmation;
  quizBoxEl.appendChild(answerLine);
  quizBoxEl.appendChild(confirmEl);
  counter++;

  if (start <= 0 || counter > questions.length - 1) {
    console.log("checking condition");
    confirmEl.textContent = confirmation;

    showResultBox();
  } else {
    showQuestion();
  }
}

//displays the questions
function showQuestion() {
  console.log("gdfg");

  {
    quizQuestion.textContent = questions[counter].question;
    showChoices();
  }
}

//shows choices for question
function showChoices() {

  choiceButtonA.textContent = questions[counter].choices[0];
  choiceButtonB.textContent = questions[counter].choices[1];
  choiceButtonC.textContent = questions[counter].choices[2];
  choiceButtonD.textContent = questions[counter].choices[3];
  
  quizChoice.appendChild(choiceButtonA);
  quizChoice.appendChild(choiceButtonB);
  quizChoice.appendChild(choiceButtonC);
  quizChoice.appendChild(choiceButtonD);
}

//Next question
function nextQuestion() {
  //counter++

  if (counter >= questions.length) {
  }
  startQuizBox();
}

function highScoreBox() {}

function stopTimer() {}

function somthing() {}


function startQuizBox() {
  displayBox.style.visibility = "visible";

  showQuestion();
  showChoices();


}


function hideDisplayBox() {
  displayBox.style.visibility = "hidden";
  displayBox.style.display = "none";
}


function startQuiz() {
  console.log(" Start Quiz");
  hideDisplayBox();
  startQuizBox();
  startTimer();
}


function showResultBox() {
  console.log("inside result box function");

  window.clearInterval(theTimer);
  quizBoxEl.style.display = "none";

  resultMessage.textContent = "All Done!";
  resultScoreMessage.textContent = "Your final score is: " + start.toString();
  resultInitialsMessage.textContent = "Enter Name: ";
  resultSubmitButton.textContent = "Submit";

  resultBox.appendChild(resultMessage);
  resultBox.appendChild(resultScoreMessage);
  resultCovering.appendChild(resultInitialsMessage);
  resultCovering.appendChild(resultInitialTextField);
  resultCovering.appendChild(resultSubmitButton);
  resultBox.appendChild(resultCovering);
}

//Ends quiz
function endOfQuiz() {
  resultBox.style.visibility = "hidden";
  resultBox.style.display = "none";

  localStorage.setItem(resultInitialTextField.value, start.toString());

  endHighScoreMessage.textContent = "High Scores";
  goBackButton.textContent = "Go Back";
  clearHighScoreButton.textContent = "Clear High Score";

  endOfQuizBox.appendChild(endHighScoreMessage);

  for (var i = 0; i < localStorage.length; i++) {
    var newPTag = document.createElement("p");
    newPTag.textContent = `${i + 1}. ${localStorage.key(
      i
    )}: ${localStorage.getItem(localStorage.key(i))}`;
    console.log(localStorage.key(i));

    endScoresHistory.appendChild(newPTag);
  }

  endOfQuizBox.appendChild(endScoresHistory);
  endOfQuizBox.appendChild(goBackButton);
  endOfQuizBox.appendChild(clearHighScoreButton);
}

//Deletes data from local storage
function clearHighScorefunction() {
  localStorage.clear();
}

//restarts the quiz
var goBackToDisplayBox = function () {
  location.reload();
};


quizChoice.addEventListener("click", checkAnswer);

choiceButtonA.addEventListener("click", nextQuestion);

choiceButtonB.addEventListener("click", nextQuestion);

choiceButtonC.addEventListener("click", nextQuestion);

choiceButtonD.addEventListener("click", nextQuestion);

resultSubmitButton.addEventListener("click", endOfQuiz);

goBackButton.addEventListener("click", goBackToDisplayBox);

startQuizButton.addEventListener("click", startQuiz);

clearHighScoreButton.addEventListener("click", clearHighScorefunction);