//variable declarations
// target start button
var startQuiz = document.getElementById("startQuiz");
// target boxDiv
var boxDiv = document.getElementById("boxDiv");
// target main section
var main = document.getElementById("main");
// taget current timer
var currentTime = document.getElementById("currentTimer");
// current question index
let questionIndex = 0;
// current score
var score = 0;
// time for answering questions
var secondsLeft = 61;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var penalty = 10;

const questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    question: "Arrays in Javascript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },
  {
    question:
      "A very useful tool for used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal / bash", "for loops", "console log"],
    answer: "console log",
  },
];

const handleAnswerClick = (event) => {
  console.log("clicked");

  const currentTarget = event.currentTarget;
  const target = event.target;

  if (target.tagName === "LI") {
    // get the option the user clicked on
    const value = target.getAttribute("data-value");
    const userChoice = questions[questionIndex].text;
    const userAnswer = { value };
    console.log(userAnswer);
    // TODO: check the correct answer
    // TODO: minus time if the answer is wrong
    // TODO: store score in LS

    // remove question
    removeQuestion();
    if (questionIndex < questions.length - 1) {
      // go to the next question
      questionIndex += 1;

      // render next question
      renderQuestion();
    } else {
      // remove last question

      // if last question render form and highscores
      renderForm();
      renderHighscores();
    }
  }
};

// function to render form
const renderForm = () => {
  console.log("render form");
};

// function to render highscores
const renderHighscores = () => {
  console.log("render hs");
};

// function to render questions
const renderQuestion = () => {
  console.log("render q");

  // get current question
  const currentQuestion = questions[questionIndex];

  // create section
  const section = document.createElement("section");
  section.setAttribute("class", "questionsDiv");
  section.setAttribute("id", "question-container");

  // create h2
  const h2 = document.createElement("h2");
  h2.textContent = currentQuestion.question;

  // create ul
  const ul = document.createElement("ul");

  // create 4 li
  const li1 = document.createElement("li");
  li1.setAttribute("data-value", currentQuestion.choices[0]);
  li1.textContent = currentQuestion.choices[0];

  const li2 = document.createElement("li");
  li2.setAttribute("data-value", currentQuestion.choices[1]);
  li2.textContent = currentQuestion.choices[1];

  const li3 = document.createElement("li");
  li3.setAttribute("data-value", currentQuestion.choices[2]);
  li3.textContent = currentQuestion.choices[2];

  const li4 = document.createElement("li");
  li4.setAttribute("data-value", currentQuestion.choices[3]);
  li4.textContent = currentQuestion.choices[3];

  ul.append(li1, li2, li3, li4);

  // loop over options
  section.append(h2, ul);
  main.append(section);

  // add event listener on question section
  section.addEventListener("click", handleAnswerClick);
};

// remove box div from page
const removeBoxDiv = () => {
  boxDiv.remove();
};

// remove previous question from page
const removeQuestion = () => {
  document.getElementById("question-container").remove();
};

function setTime() {
  // sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    currentTime.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0) {
      // stops execution of action at set interval
      clearInterval(timerInterval);
      // call function of create message
      gameOver();
    }
  }, 1000);
}

// Function to create time's up message
function gameOver() {
  main.textContent = "Time's up";
}

const initialiseLocalStorage = () => {
  // get score from LS
  const scoreFromLS = JSON.parse(localStorage.getItem("scoreResults"));
  if (!scoreFromLS) {
    localStorage.setItem("scoreResults", JSON.stringify([]));
  }
  console.log(scoreFromLS);
};

const startButtonClicks = () => {
  console.log("start clicked");

  // timer appear
  setTime();

  // initialise local storage
  initialiseLocalStorage();

  // remove orgininal boxDiv
  removeBoxDiv();

  // render questions
  renderQuestion();
};

// add event listeners
// add document on load event listener
// add start button click event listener
startQuiz.addEventListener("click", startButtonClicks);
