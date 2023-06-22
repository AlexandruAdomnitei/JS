'use strict';

let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');

let currentScore0 = document.querySelector('#current--0');
let currentScore1 = document.querySelector('#current--1');

let rollBtn = document.querySelector(".btn--roll");
let newBtn = document.querySelector(".btn--new");
let holdBtn = document.querySelector(".btn--hold");

let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');

let diceElem = document.querySelector(".dice");

const switchActivePlayer = function () {
	currentScore = 0;

	document.getElementById(`current--${activePlayer}`).textContent = currentScore;

	activePlayer = activePlayer === 0 ? 1 : 0;
	player0.classList.toggle('player--active');
	player1.classList.toggle('player--active');
}

let totalScore, currentScore, activePlayer, isPlaying;

const initGame = function () {
	currentScore = 0;
	activePlayer = 0;
	isPlaying = true;
	totalScore = [0, 0];

	score0.textContent = 0;
	score1.textContent = 0;
	currentScore0.textContent = 0;
	currentScore1.textContent = 0;

	player0.classList.remove('player--winner');
	player1.classList.remove('player--winner');

	player0.classList.remove('player--active');
	player1.classList.remove('player--active');

	player0.classList.add('player--active');

	diceElem.classList.add('hidden');
}

newBtn.addEventListener('click', initGame);

rollBtn.addEventListener('click', function () {

	if (isPlaying) {

		let randomNumber = Math.floor(Math.random() * 6) + 1;

		diceElem.classList.remove('hidden');
		diceElem.src = `dice${randomNumber}.png`;

		if (randomNumber !== 1) {
			currentScore += randomNumber;
			document.getElementById(`current--${activePlayer}`).textContent = currentScore;
		}
		else {
			switchActivePlayer();
		}
	}
})

holdBtn.addEventListener('click', function () {
	if (isPlaying) {
		totalScore[activePlayer] += currentScore;
		document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer];

		if (totalScore[activePlayer] >= 20) {
			isPlaying = false;

			document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
			document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
		}
		else {
			switchActivePlayer();
		}
	}
})
