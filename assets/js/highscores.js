var highScore = document.getElementById("highScore");
var clear = document.getElementById("clear");
var goBack = document.getElementById("goBack");

console.log(JSON.parse(localStorage.getItem("highscore")));

const scoreResults = JSON.parse(localStorage.getItem("highscore"));
if (scoreResults !== null) {
  var createLi = document.createElement("li");
  createLi.setAttribute("id", "scoreLi");
  createLi.textContent = scoreResults.yourInitial + " " + scoreResults.score;
  highScore.appendChild(createLi);
}

// add event listener to clear scores
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

// add event listener to go back to home page
goBack.addEventListener("click", function () {
  window.location.replace("./index.html");
});
