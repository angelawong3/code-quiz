// global declarations
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

// var currentTimer = document.getElementById("currentTimer");
// var questionsDiv = document.getElementById("questionsDiv");
var startQuiz = document.getElementById("startQuiz");
var boxDiv = document.getElementById("boxDiv");

const renderQuestion = () => {
  console.log("render q");
};

const removeBoxDiv = () => {
  console.log("remove d");
  boxDiv.remove();
};

const startButtonClicks = () => {
  console.log("start clicked");

  // remove orgininal boxDiv
  removeBoxDiv();
  // render questions
  renderQuestion();
};

// add event listeners
startQuiz.addEventListener("click", startButtonClicks);
// add document on load event listener
// add start button click event listener
