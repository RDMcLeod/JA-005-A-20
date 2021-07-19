import GameObj from "./game";
const Game = new GameObj();

const initApp = () => {
  initAllTimeData();
  //update scoreboard
  // listen for player choice
  //listen for enter key
  //listen for the play again choice
  // lock the gameboard height
  //set focus to start new game
};
document.addEventListener("DOMContentLoaded", initApp);

const initAllTimeData = () => {
  Game.setP1AllTime(parseInt(localStorage.getItem("P1AllTime")) || 0);
  Game.setCpAllTime(parseInt(localStorage.getItem("cpAllTime")) || 0);
};
const updateScoreBoard = () => {
  const p1Ats = document.getElementById("p1_all_time_score");
  p1Ats.textContent = Game.getP1AllTime();
  p1Ats.ariaLabel = `Player One has ${Game.getP1AllTime()} all time wins.`;
};
