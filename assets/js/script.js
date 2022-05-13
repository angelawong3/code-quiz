//variable declarations
var startQuiz = document.getElementById("startQuiz");
var banner = document.getElementById("banner");
var main = document.getElementById("mainSection");
var currentTime = document.getElementById("currentTimer");
var timerInterval;
let questionIndex = 0;
var score = 0;
var secondsLeft = 6;
var holdInterval = 0;
var penalty = 5;

// questions and answers
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

// event handler function to handle click events in question section
const handleAnswerClick = (event) => {
  const { target } = event;

  // correct answer plus scores
  const correctAnswer = () => {
    score += 20;
  };

  // wrong answer minus seconds
  const wrongAnswer = () => {
    secondsLeft -= penalty;
  };

  // target equal to li
  if (target.tagName === "LI") {
    // remove current question
    removeQuestion();
    // if the answer if correct
    if (questions[questionIndex].answer === target.textContent) {
      // call the orrect answer funcation
      correctAnswer();
    } else {
      // call the wrong answer function
      wrongAnswer();
    }
    if (questionIndex < questions.length - 1) {
      // go to the next question
      questionIndex += 1;

      // render next question
      renderQuestion();
    } else {
      // if last question render form and highscores
      renderForm();
    }
  }
};

// function to render form
const renderForm = () => {
  const section = document.createElement("section");

  const h2 = document.createElement("h2");
  h2.textContent = "Your Score: " + score + " /100";

  const form = document.createElement("form");

  const inputDiv = document.createElement("div");
  inputDiv.setAttribute("id", "form-input-div");

  const input = document.createElement("input");
  input.setAttribute("id", "yourInitial");
  input.setAttribute("class", "form-input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Enter your initial");

  inputDiv.append(input);

  const buttonDiv = document.createElement("div");

  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("class", "btn");
  button.textContent = "Submit your initial";

  buttonDiv.append(button);

  form.append(inputDiv, buttonDiv);

  section.append(h2, form);

  main.append(section);

  // add event listener for form submition
  button.addEventListener("click", showScores);
};

// function to render questions
const renderQuestion = () => {
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

  answerList = [
    currentQuestion.choices[0],
    currentQuestion.choices[1],
    currentQuestion.choices[2],
    currentQuestion.choices[3],
  ];

  // for loop to create 4 li
  for (var i = 0; i <= answerList.length; i++) {
    var li = document.createElement("li");
    li.setAttribute("class", "answer");
    li.textContent = answerList[i];
    ul.append(li);
  }

  // loop over options
  section.append(h2, ul);
  main.append(section);

  // add event listener on question section
  section.addEventListener("click", handleAnswerClick);
};

// remove banner from page
const removeBanner = () => {
  banner.remove();
};

// remove previous question from page
const removeQuestion = () => {
  document.getElementById("question-container").remove();
};

// remove timer
const removeTimer = () => {
  document.getElementById("currentTimer").remove();
};

const removeForm = () => {
  document.querySelector("form").remove();
};

const timeRunOut = () => {
  const restartSection = document.createElement("section");
  restartSection.setAttribute("class", "restart-page");

  const restartOption = document.createElement("p");
  restartOption.setAttribute("class", "restart-option");
  restartOption.textContent = "Time's UP! You may restart the quiz";

  const restartButton = document.createElement("button");
  restartButton.setAttribute("class", "restart-button");
  restartButton.innerHTML = "restart";

  restartSection.append(restartOption);
  restartSection.append(restartButton);
  main.append(restartSection);

  restartButton.addEventListener("click", restartQuiz);
};

const restartQuiz = () => {
  window.location.reload();
};

// set timer
function setTimer() {
  // sets interval in variable
  timerInterval = setInterval(function () {
    currentTime.textContent = "Time: " + secondsLeft;

    if (secondsLeft <= 0) {
      // stops execution of action at set interval
      clearInterval(setInterval);
      // remove question
      removeQuestion();
      // remove timer
      removeTimer();
      // call time out function
      timeRunOut();
    }
    secondsLeft--;
    if (questionIndex > 4) {
      clearInterval(timerInterval);
      removeTimer();
      renderForm();
    }
  }, 1000);
}

const setScore = () => {
  const Scores = localStorage.setItem("highscore", score);
};

// TODO: store score in LS
const saveScoreInLS = (yourInitial, score) => {
  const newScore = {
    yourInitial,
    score,
  };
  const highScore = localStorage.setItem("highscore", JSON.stringify(newScore));
  if (highScore && highScore.length) {
    if (highScore.length >= 150) {
      highScore = [];
      alert("The scores is being reset!");
    }
    highScore.push(newScore);
    highScore.sort((question1, question2) => {
      return question2.score - question1.score;
    });
  } else {
    // TODO: debug
    const highScore = [];
  }
  var highScores = JSON.parse(localStorage.getItem("highscore"));
};

const showScores = (event) => {
  event.preventDefault();

  const yourInitial = document.getElementById("yourInitial").value;
  if (yourInitial) {
    removeTimer();
    removeForm();
    saveScoreInLS(yourInitial, score);
  }

  // after saving the score go to the highscore page
  window.location.replace("./highscores.html");
};

const startButtonClicks = () => {
  console.log("start clicked");

  // timer appear
  setTimer();

  // remove orgininal banner
  removeBanner();

  // render questions
  renderQuestion();
};

// add start button click event listener
startQuiz.addEventListener("click", startButtonClicks);
