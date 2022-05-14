const highScore = document.getElementById("highScore");
const clear = document.getElementById("clear");
const goBack = document.getElementById("goBack");

const scoreResults = JSON.parse(localStorage.getItem("highscore"));
if (scoreResults !== null) {
  scoreResults.sort((a, b) => b.score - a.score).slice(0, 5);
  for (let i = 0; i < scoreResults.length; i++) {
    var createLi = document.createElement("li");
    createLi.setAttribute("id", "scoreLi");
    createLi.textContent =
      scoreResults[i].yourInitial + ": " + scoreResults[i].score;
    highScore.appendChild(createLi);
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
