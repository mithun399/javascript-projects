const minimum = 1;
const maximum = 100;

let answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

let attempts = 0;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

guessBtn.onclick = function() {

    const guess = Number(guessInput.value);

    if (isNaN(guess) || guess === 0) {
        message.textContent = "❌ Please enter a valid number.";
        return;
    }

    if (guess < minimum || guess > maximum) {
        message.textContent = `⚠️ Enter a number between ${minimum} and ${maximum}`;
        return;
    }

    attempts++;
    attemptsText.textContent = `Attempts: ${attempts}`;

    if (guess < answer) {

        message.textContent = "📉 Too Low!";

    } else if (guess > answer) {

        message.textContent = "📈 Too High!";

    } else {

        message.textContent =
            `🎉 Congratulations! You guessed it in ${attempts} attempts!`;

        guessBtn.disabled = true;
    }

    guessInput.value = "";
    guessInput.focus();
};

restartBtn.onclick = function() {

    answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

    attempts = 0;

    attemptsText.textContent = "Attempts: 0";

    message.textContent = "Good luck! 🍀";

    guessBtn.disabled = false;

    guessInput.value = "";

    guessInput.focus();

};