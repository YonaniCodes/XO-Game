const Moves = [, , , , , , , , ,];
console.log(Moves.length);
let isItTurnOfX = true;
let winner;
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
  winner = undefined;
  showTheCuurentMove();
}
function showTheCuurentMove() {
  if (!winner && isItTurnOfX) {
    document.querySelector(".X").style.backgroundColor = "var(--primary-color)";
    document.querySelector(".O").style.backgroundColor =
      "var(--tertiary-color) ";
    document.querySelector(".O").style.color = "var(--secondary-color)";
  } else {
    console.log("nowinnner");
    document.querySelector(".O").style.backgroundColor = "rgb(61, 168, 168)";
    document.querySelector(".O").style.color = "var(--tertiary-color)";

    document.querySelector(".X").style.backgroundColor = "white";
  }
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
  showTheCuurentMove();
}

function styleMoves(box) {
  if (isItTurnOfX) {
    box.style.color = "var(--secondary-color)";

    return;
  }
  box.style.color = "var(--quaternary-color)";
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
    celebrateWin(0, 1, 2);

    winner = isItTurnOfX ? "X" : "O";
    setTimeout(() => renderMatchWinner(true), 500);

    return true;
  }
  if (Moves[3] === Moves[4] && Moves[4] === Moves[5] && Moves[3] != undefined) {
    celebrateWin(3, 4, 5);
    winner = isItTurnOfX ? "X" : "O";
    setTimeout(() => renderMatchWinner(true), 500);

    return true;
  }
  if (Moves[6] === Moves[7] && Moves[7] === Moves[8] && Moves[6] != undefined) {
    celebrateWin(6, 7, 8);
    winner = isItTurnOfX ? "X" : "O";
    setTimeout(() => renderMatchWinner(true), 500);

    return true;
  }
  if (Moves[0] === Moves[3] && Moves[3] === Moves[6] && Moves[0] != undefined) {
    celebrateWin(0, 3, 6);

    winner = isItTurnOfX ? "X" : "O";
    setTimeout(() => renderMatchWinner(true), 500);

    return true;
  }
  if (Moves[1] === Moves[4] && Moves[4] === Moves[7] && Moves[1] != undefined) {
    celebrateWin(1, 4, 7);
    winner = isItTurnOfX ? "X" : "O";

    setTimeout(() => renderMatchWinner(true), 500);
    return true;
  }
  if (Moves[2] === Moves[5] && Moves[5] === Moves[8] && Moves[2] != undefined) {
    celebrateWin(2, 5, 8);
    winner = isItTurnOfX ? "X" : "O";

    setTimeout(() => renderMatchWinner(true), 500);
    return true;
  }
  if (Moves[2] === Moves[4] && Moves[4] === Moves[6] && Moves[2] != undefined) {
    celebrateWin(2, 4, 6);
    winner = isItTurnOfX ? "X" : "O";
    setTimeout(() => renderMatchWinner(true), 500);

    return true;
  }
  if (Moves[0] === Moves[4] && Moves[4] === Moves[8] && Moves[0] != undefined) {
    celebrateWin(0, 4, 8);
    winner = isItTurnOfX ? "X" : "O";

    setTimeout(() => renderMatchWinner(true), 500);
    return true;
  }
  if (!Moves.includes(undefined)) {
    setTimeout(() => renderMatchWinner(false), 500);
  }
}
/* 
function removeEventHandler() {
  let boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.removeEventlistner(makeMove(box));
    console.log("removed");
  });
}
*/

function renderMatchWinner(hasWinner) {
  let ele = document.createElement("div");
  ele.className = "popup";
  let html = ` <div class="popup">
  <div class="win-notification">
  <div class="player">
 ${
   hasWinner
     ? `<span class="${winner}">${winner}</span>`
     : `<span class="X">X</span> <span class="O">O</span>`
 }
  
  </div>
  <h1>${hasWinner ? "WINS" : "DRAW"}!</h1>
</div>
<div   class="restart">Restart Game</div></div>   `;

  document.querySelector(".game-board").innerHTML = html;
  document.querySelector(".restart").addEventListener("click", startTheGame);
}
function celebrateWin(box1, box2, box3) {
  celebrateWin(box1, box2, box3);

  setTimeout(startTheGame, 500);
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
