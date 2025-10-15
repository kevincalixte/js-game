const buttonFeu = document.querySelector("#buttons button:nth-child(1)");
const buttonEau = document.querySelector("#buttons button:nth-child(2)");
const buttonTerre = document.querySelector("#buttons button:nth-child(3)");

// SELECTION PAR LE PC
function powerPC() {
  const buttons = [buttonFeu, buttonEau, buttonTerre];
  const playerPC = buttons[Math.floor(Math.random() * 3)].textContent;
  return playerPC;
}

// SELECTION PAR LE JOUEUR
let selection = document.querySelector("#buttons");
selection.addEventListener("click", (event) => {
  selection = event.target;
  let playerME = selection.textContent;
  playGame(powerPC(), playerME);
});

// JEU
let playerPCscore = 0;
let playerMEscore = 0;

const gameResult = document.querySelector("#game-result p:nth-child(1)");
const gameInfos = document.querySelector("#game-result p:nth-child(2)");
const gameScore = document.querySelector("#game-result p:nth-child(3)");
function playGame(powerPC, playerMe) {
  gameInfos.textContent =
    "PC a choisi : " + powerPC + " | Joueur a choisi : " + playerMe;
  if (powerPC == "Feu" && playerMe == "Terre") {
    gameResult.textContent = "PC a gagné : Feu bat la Terre";
    playerPCscore++;
  } else if (powerPC == "Eau" && playerMe == "Feu") {
    gameResult.textContent = "PC a gagné : Eau bat le Feu";
    playerPCscore++;
  } else if (powerPC == "Terre" && playerMe == "Eau") {
    gameResult.textContent = "PC a gagné : Terre bat l'Eau";
    playerPCscore++;
  } else if (playerMe == "Feu" && powerPC == "Terre") {
    gameResult.textContent = "Joueur a gagné : Feu bat la Terre";
    playerMEscore++;
  } else if (playerMe == "Eau" && powerPC == "Feu") {
    gameResult.textContent = "Joueur a gagné : Eau bat le Feu";
    playerMEscore++;
  } else if (playerMe == "Terre" && powerPC == "Eau") {
    gameResult.textContent = "Joueur a gagné : Terre bat l'Eau";
    playerMEscore++;
  } else {
    gameResult.textContent = "Egalité";
  }
  gameScore.textContent =
    "PC : " + playerPCscore + " points | Joueur : " + playerMEscore + " points";

  if (playerPCscore == 10 || playerMEscore == 10) {
    gameResult.textContent = "Jeu terminé !";
    gameInfos.textContent = "";
    playerPCscore = 0;
    playerMEscore = 0;
    disableButtons()
  }
}

// DESACTIVATION DES BOUTONSs
function disableButtons() {
  buttonFeu.disabled = true;
  buttonEau.disabled = true;
  buttonTerre.disabled = true;
  buttonFeu.style.backgroundColor = "grey";
  buttonEau.style.backgroundColor = "grey";
  buttonTerre.style.backgroundColor = "grey";
  buttonFeu.style.cursor = "not-allowed";
  buttonEau.style.cursor = "not-allowed";
  buttonTerre.style.cursor = "not-allowed";
}
