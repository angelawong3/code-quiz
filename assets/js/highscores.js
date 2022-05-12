var highScore = document.getElementById("highScore");
var clear = document.getElementById("clear");
var goBack = document.getElementById("goBack");

// add event listener to clear scores
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

const scoreResults = JSON.parse(localStorage.getItem("scoreResults"));

if (scoreResults !== null) {
  for (var i = 0; i < scoreResults.length; i++) {
    var createLi = document.createElement("li");
    createLi.textContent =
      scoreResults[i].initials + " " + scoreResults[i].score;
    highScore.appendChild(createLi);
  }
}

// add event listener to go back to home page
goBack.addEventListener("click", function () {
  window.location.replace("./index.html");
});
