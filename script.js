document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.querySelector("[data-testid='colorBox']");
    const colorOptionsContainer = document.querySelector("[data-testid='colorOptions']");
    const gameStatus = document.querySelector("[data-testid='gameStatus']");
    const scoreElement = document.querySelector("[data-testid='score']");
    const newGameButton = document.querySelector("[data-testid='newGameButton']");
    
    let score = 0;
    let correctColor;

    // Predefined colors (can be extended)
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#A833FF", "#FF9133"];

    // Function to generate a random color
    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    // Set a new game
    const newGame = () => {
        gameStatus.textContent = "";
        correctColor = getRandomColor();
        colorBox.style.backgroundColor = correctColor;

        // Shuffle colors for options
        const shuffledColors = [...colors].sort(() => Math.random() - 0.5);
        colorOptionsContainer.innerHTML = "";

        // Create color options
        shuffledColors.forEach((color) => {
            const button = document.createElement("button");
            button.classList.add("color-option");
            button.style.backgroundColor = color;
            button.addEventListener("click", () => checkGuess(color));
            colorOptionsContainer.appendChild(button);
        });
    };

    // Check if the guess is correct
    const checkGuess = (color) => {
        if (color === correctColor) {
            score++;
            gameStatus.textContent = "Correct! Well done!";
            gameStatus.style.color = "green";
        } else {
            gameStatus.textContent = "Wrong! Try again!";
            gameStatus.style.color = "red";
        }

        scoreElement.textContent = score;
        setTimeout(newGame, 1000); // Start new game after a short delay
    };

    // Set initial game state
    newGame();

    // Event listener for the New Game button
    newGameButton.addEventListener("click", newGame);
});
