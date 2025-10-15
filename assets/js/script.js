function powerPC() {
  const buttonFeu = document.querySelector("#buttons button:nth-child(1)");
  const buttonEau = document.querySelector("#buttons button:nth-child(2)");
  const buttonTerre = document.querySelector("#buttons button:nth-child(3)");
  const buttons = [buttonFeu, buttonEau, buttonTerre];
  const playerPC = buttons[Math.floor(Math.random() * 3)].textContent;
  return playerPC;
}

let selection = document.querySelector("#buttons");
selection.addEventListener("click", (event) => {
  selection = event.target;
  let playerME = selection.textContent;
  playGame(powerPC(), playerME);
});

const gameResult = document.querySelector("#game-result p");

function playGame(powerPC, playerMe) {
  if (powerPC == "Feu" && playerMe == "Terre") {
    gameResult.textContent = "PC a gagné : Feu bat la Terre";
  } else if (powerPC == "Eau" && playerMe == "Feu") {
    gameResult.textContent = "PC a gagné : Eau bat le Feu";
  } else if (powerPC == "Terre" && playerMe == "Eau") {
    gameResult.textContent = "PC a gagné : Terre bat l'Eau";
  } else if (playerMe == "Feu" && powerPC == "Terre") {
    gameResult.textContent = "Joueur a gagné : Feu bat la Terre";
  } else if (playerMe == "Eau" && powerPC == "Feu") {
    gameResult.textContent = "Joueur a gagné : Eau bat le Feu";
  } else if (playerMe == "Terre" && powerPC == "Eau") {
    gameResult.textContent = "Joueur a gagné : Terre bat l'Eau";
  } else {
    gameResult.textContent = "Egalité";
  }
}
