import GameObj from "./game";
const Game = new GameObj();

const initApp = () => {
  initAllTimeData();
  updateScoreBoard();
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

  const cpAts = document.getElementById("cp_all_time_score");
  cpAts.textContent = Game.getCpAllTime();
  cpAts.ariaLabel = `Computer Player One has ${Game.getCpAllTime()} all time wins.`;

  const p1s = document.getElementById("p1_session_score");
  p1s.textContent = Game.getP1Session();
  p1s.ariaLabel = `Computer Player has ${Game.getP1Session()} wins this session.`;

  const cps = document.getElementById("cp_session_score");
  cps.textContent = Game.getCpSession();
  cps.ariaLabel = `Computer Player has ${Game.getCpSession()} wins this session.`;
};
const listenForPlayerChoice = () => {
  const p1Images = document.querySelectorAll(
    ".playerBoard .gameboard__square img"
  );
  p1Images.forEach((img) => {
    img.addEventListener("click", (event) => {
      if (game.getActiveStatus()) return;
      Game.startGame();
      const playerChoice = event.target.parentElement.id;
      updateP1Message(playerChoice);
      p1Images.forEach((img) => {
        if (img === event.target) {
          img.parentElement.classList.add("selected");
        } else {
          img.parentElement.classList.add("not-selected");
        }
      });
      //animation sequence
    });
  });
};
const updateP1Message = (choice) => {
  let p1msg = document.getElementById("p1msg").textContent;
  p1msg += `${choice[0].toUpperCase()}${choice.slice(1)}!`;
  document.getElementById("p1msg").textContent = p1msg;
};
