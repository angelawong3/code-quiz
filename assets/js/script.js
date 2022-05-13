//variable declarations
var startQuiz = document.getElementById("startQuiz");
var boxDiv = document.getElementById("boxDiv");
var main = document.getElementById("mainSection");
var currentTime = document.getElementById("currentTimer");
var timerInterval;
let questionIndex = 0;
var score = 0;
var secondsLeft = 5;
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
      renderHighscores();
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
  button.addEventListener("submit", showScores);
};

// function to render highscores
const renderHighscores = () => {
  // TODO: render HS
  console.log("render hs");
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

// remove box div from page
const removeBoxDiv = () => {
  boxDiv.remove();
};

// remove previous question from page
const removeQuestion = () => {
  document.getElementById("question-container").remove();
};

const removeTimer = () => {
  document.getElementById("currentTimer").remove();
};

const timeRunOut = () => {
  const restartSection = document.createElement("section");
  restartSection.setAttribute("class", "restart-page");

  const restartOption = document.createElement("p");
  restartOption.setAttribute("class", "restart-option");
  restartOption.textContent =
    "you ran out of time, Click restart code quiz to go back to home page";

  const restartButton = document.createElement("button");
  restartButton.setAttribute("class", "restart-button");
  restartButton.innerHTML = "restart";

  restartSection.append(restartOption);
  restartSection.append(restartButton);
  main.append(restartSection);
  restartButton.addEventListener("click", finishOrRestartQuiz);
};

const finishOrRestartQuiz = () => {
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
      // call function of create message
      removeQuestion();
      removeTimer();
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

// Function to create time's up message
const timeOut = () => {
  // main.textContent = "Time's up";
  // renderForm();
  // renderHighscores();
};

// TODO: store score in LS
const setScore = () => {
  localStorage.setItem("highscore", score);
  // localStorage.setItem(
  //   "highScoreName",
  //   document.getElementById("highScore").value
  // );
  // initialiseLocalStorage();
};

// const initialiseLocalStorage = () => {
//   // get score from LS
//   const scoreFromLS = JSON.parse(localStorage.getItem("highscore"));
//   if (!scoreFromLS) {
//     localStorage.setItem("scoreResults", JSON.stringify([]));
//   }
// };

// TODO: form submittion with name and score
// TODO: store initial and score in LS
// TODO: get initial and score from LS
const showScores = (event) => {
  // get value from input
  // check if empty then render error alert with message and status
  // if not empty then create the score object
  // {
  //   fullName: "Bob Smith",
  //   score: 25
  // }
  // push score object to LS
  // render quizCompleteSection
  event.preventDefault();

  const yourInitial = document.getElementById("yourInitial").value;
  if (yourInitial) {
    removeForm();
    const scoreSection = document.createElement("section");
    scoreSection.setAttribute("class", "score-data");

    const scoreCard = document.createElement("h1");
    scoreCard.setAttribute("class", "score-card");
    scoreCard.textContent = `${yourInitial}'s score: ${secondsLeft}`;

    const notification = document.createElement("h4");
    notification.setAttribute("class", "notification");
    notification.textContent =
      "you can see the high scores by clicking on the high score link on the top left of this page";

    const finishAndRestartQuizButton = document.createElement("button");
    finishAndRestartQuizButton.setAttribute("class", "finish-quiz-button");
    finishAndRestartQuizButton.textContent = "Finish";

    scoreSection.append(scoreCard);
    scoreSection.append(notification);
    scoreSection.append(finishAndRestartQuizButton);
    main.append(scoreSection);

    const scoreResults = JSON.parse(localStorage.getItem("highscore"));

    const result = {
      yourInitial,
      score,
    };
  }
  setScore();
  window.location.replace("./highscores.html");
};

const startButtonClicks = () => {
  console.log("start clicked");

  // timer appear
  setTimer();

  // // initialise local storage
  // initialiseLocalStorage();

  // remove orgininal boxDiv
  removeBoxDiv();

  // render questions
  renderQuestion();
};

// TODO: add event listeners
// TODO: add document on load event listener

// add start button click event listener
startQuiz.addEventListener("click", startButtonClicks);
