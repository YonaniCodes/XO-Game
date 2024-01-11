const Moves = [, , , , , , , , ,];
let isItTurnOfX = true;

startTheGame();
function startTheGame() {
  gameBoardHTML = `
        <div id="0" class="box corner left top"></div>
      <div id="1" class="box corner top"></div>
      <div id="2" class="box top right"></div>

      <div id="3" class="box corner left"></div>
      <div id="4" class="box"></div>
      <div id="5" class="box corner right"></div>

      <div id="6" class="box corner left bottom"></div>
      <div id="7" class="box corner bottom"></div>
      <div id="8" class="box bottom right"></div>`;
  document.querySelector(".game-board").innerHTML = gameBoardHTML;
  let boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("click", () => makeMove(box));
  });

  restoreMoves();
}

function makeMove(box) {
  box.innerHTML =
    box.innerHTML === ""
      ? isItTurnOfX
        ? "X"
        : "O"
      : box.removeEventlistner(makeMove(box));
  styleMoves(box);
  storeMoves(box);
  checkForWin();
  toggleMoveTurn();
}

function styleMoves(box) {
  console.log("styling");
  if (isItTurnOfX) box.style.color = "rgb(48, 53, 53);";
  else box.style.color = "white";
}

function storeMoves(box) {
  let index = Number(box.id);
  Moves[index] = box.innerHTML;
  console.log(Moves);
}

function toggleMoveTurn() {
  isItTurnOfX = !isItTurnOfX;
}

function checkForWin() {
  if (Moves[0] === Moves[1] && Moves[1] === Moves[2] && Moves[0] != undefined) {
    restartTheGame(0, 1, 2);

    return true;
  }
  if (Moves[3] === Moves[4] && Moves[4] === Moves[5] && Moves[3] != undefined) {
    restartTheGame(3, 4, 5);

    return true;
  }
  if (Moves[6] === Moves[7] && Moves[7] === Moves[8] && Moves[6] != undefined) {
    restartTheGame(6, 7, 8);
    return true;
  }
  if (Moves[0] === Moves[3] && Moves[3] === Moves[6] && Moves[0] != undefined) {
    restartTheGame(0, 3, 6);

    setTimeout(restartTheGame, 1000);

    return true;
  }
  if (Moves[1] === Moves[4] && Moves[4] === Moves[7] && Moves[1] != undefined) {
    restartTheGame(1, 4, 7);
    console.log("line 5 checking");

    return true;
  }
  if (Moves[2] === Moves[5] && Moves[5] === Moves[8] && Moves[2] != undefined) {
    restartTheGame(2, 5, 8);

    return true;
  }
  if (Moves[2] === Moves[4] && Moves[4] === Moves[6] && Moves[2] != undefined) {
    restartTheGame(2, 4, 6);

    return true;
  }
  if (Moves[0] === Moves[4] && Moves[4] === Moves[8] && Moves[0] != undefined) {
    restartTheGame(0, 4, 8);

    return true;
  }
  if (!Moves.includes(undefined)) {
    setTimeout(startTheGame, 1000);
  }
}

function restartTheGame(box1, box2, box3) {
  celebrateWin(box1, box2, box3);

  setTimeout(startTheGame, 1000);
}

function celebrateWin(box1, box2, box3) {
  document.getElementById(box1).style.color = "green";
  document.getElementById(box2).style.color = "green";
  document.getElementById(box3).style.color = "green";
}

function restoreMoves() {
  for (let index = 0; index < Moves.length; index++) {
    Moves[index] = undefined;
  }
}
