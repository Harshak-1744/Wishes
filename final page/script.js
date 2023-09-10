const phrasesAndEmojis = [
    {
        phrase: "Two bodies One soul",
        emojis: " ✌🏼 + 👥 + 1️⃣ + 👠",
    },
];

const emojiContainer = document.getElementById("emoji");
const guessInput = document.getElementById("guess-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
const gameOverImage = document.getElementById("game-over-image"); // Get the image element
const gameContainer = document.querySelector(".container"); // Get the game container element
const h1 = document.querySelector("h1"); // Get the h1 element

const audioContainer = document.getElementById("audio-container");
const birthdaySong = document.getElementById("birthdaySong");

let currentEmojiIndex = 0;

function displayNextEmoji() {
    if (currentEmojiIndex < phrasesAndEmojis.length) {
        const emojiSequence = phrasesAndEmojis[currentEmojiIndex].emojis;
        emojiContainer.textContent = emojiSequence;
        guessInput.value = "";
    } else {
        emojiContainer.textContent = "";
        guessInput.style.display = "none";
        checkBtn.style.display = "none";
        resultDiv.classList.remove("wrong-answer");
        resultDiv.classList.add("correct-answer");

        // Show the game container and image
        gameContainer.style.display = "block";
        gameOverImage.style.display = "block";

        // Change the text of the h1 tag to a cake cutting emoji
        h1.innerHTML = "🎂✨💗🎀🥂🍰";

        // Play the background music
        birthdaySong.play();
    }
}

// Add an event listener for when the page has finished loading
window.addEventListener("load", () => {
    // Play the background music when the page has loaded
    birthdaySong.play();
});

displayNextEmoji();

checkBtn.addEventListener("click", () => {
    const guessedPhrase = guessInput.value.trim().toLowerCase();
    const correctPhrase = phrasesAndEmojis[currentEmojiIndex].phrase.toLowerCase();

    if (guessedPhrase === correctPhrase) {
        resultDiv.textContent = "Correct!";
        resultDiv.classList.remove("wrong-answer");
        resultDiv.classList.add("correct-answer");
        currentEmojiIndex++;
        setTimeout(() => {
            resultDiv.textContent = "";
            displayNextEmoji();

            if (currentEmojiIndex >= phrasesAndEmojis.length) {
                // When all phrases are guessed, show the game container and image
                gameContainer.style.display = "block";
                gameOverImage.style.display = "block";

                // Change the text of the h1 tag to a cake cutting emoji
                h1.innerHTML = "🎂✨💗🎀🍰🥂";

                // Play the background music
                birthdaySong.play();
            }
        }, 1000);
    } else {
        resultDiv.textContent = "Wrong, try again!";
        resultDiv.classList.remove("correct-answer");
        resultDiv.classList.add("wrong-answer");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const hintIcon = document.getElementById("hint-icon");
    const hintText = document.getElementById("hint-text");
    const hintContent = document.getElementById("hint-content");

    hintIcon.addEventListener("click", function () {
        // Set the hint text content
        hintContent.textContent = " 👠= soul";

        // Show the hint text and apply the slide-in animation
        hintText.style.display = "block";
        hintText.style.animation = "none"; // Remove any previous animation
        void hintText.offsetWidth; // Trigger reflow
        hintText.style.animation = "slide-in 0.5s forwards"; // Reapply animation
    });
});
