var highScore = document.getElementById("highScore");
var clear = document.getElementById("clear");
var goBack = document.getElementById("goBack");

// add event listener to clear scores
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
  for (var i = 0; i < allScores.length; i++) {
    var createLi = document.createElement("li");
    createLi.textContent = allScores[i].initials + " " + allScores[i].score;
    highScore.appendChild(createLi);
  }
}

// add event listener to go to home page
goBack.addEventListener("click", function () {
  window.location.replace("./index.html");
});
