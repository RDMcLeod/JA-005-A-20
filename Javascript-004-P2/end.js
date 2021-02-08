const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");

// testing with console.log

username.addEventListener("keyup", () => {
  console.log(username.value);

  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  console.log("cliekced the save button!");
  e.preventDefault();
};
