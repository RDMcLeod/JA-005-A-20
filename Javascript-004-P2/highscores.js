const highScore = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getitem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
