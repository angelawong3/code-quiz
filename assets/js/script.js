// var currentTimer = document.getElementById("currentTimer");

// target start button
var startQuiz = document.getElementById("startQuiz");
// target boxDiv
var boxDiv = document.getElementById("boxDiv");
// target main section
var main = document.getElementById("main");
// current question index
let questionIndex = 0;

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

const renderQuestion = () => {
  console.log("render q");

  // get current question
  const currentQuestion = questions[questionIndex];

  // create section
  const section = document.createElement("section");
  section.setAttribute("class", "questionsDiv");

  // create h2
  const h2 = document.createElement("h2");
  h2.textContent = currentQuestion.question;

  // create ul
  const ul = document.createElement("ul");

  // create 4 li
  const li1 = document.createElement("li");
  li1.textContent = currentQuestion.choices[0];
  const li2 = document.createElement("li");
  li2.textContent = currentQuestion.choices[1];
  const li3 = document.createElement("li");
  li3.textContent = currentQuestion.choices[2];
  const li4 = document.createElement("li");
  li4.textContent = currentQuestion.choices[3];

  ul.append(li1, li2, li3, li4);

  // loop over options
  section.append(h2, ul);
  main.append(section);
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
