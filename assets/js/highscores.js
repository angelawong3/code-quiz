var highScore = document.getElementById("highScore");
var clear = document.getElementById("clear");
var goBack = document.getElementById("goBack");

const scoreResults = JSON.parse(localStorage.getItem("highscore".value));
if (scoreResults !== null) {
  for (var i = 0; i < scoreResults.length; i++) {
    var createLi = document.createElement("li");
    createLi.textContent =
      scoreResults[i].yourInitial + " " + scoreResults[i].score;
    highScore.appendChild(createLi);
    console.log(highScore);
  }
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
