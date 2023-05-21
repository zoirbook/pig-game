const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const dice = document.querySelector(".dice");

const newBtn = document.querySelector(".btn--new");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

let currentScore, activePlayer, scores, playing;

const init = () => {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  dice.classList.add("hidden");

  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
};

init();

const switchPlayer = () => {
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
};

rollBtn.addEventListener("click", () => {
  if (playing) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove("hidden");

    dice.src = `dice-${diceNumber}.png`;

    currentScore += diceNumber;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    if (diceNumber === 1) switchPlayer();
  }
});

holdBtn.addEventListener("click", () => {
  // document.getElementById(`score--${activePlayer}`).textContent = currentScore;
  if (playing) {
    document.getElementById(`score--${activePlayer}`).textContent = scores[
      activePlayer
    ] += currentScore;

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    }

    switchPlayer();
  }
});

newBtn.addEventListener("click", init);
