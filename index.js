let resultText = document.querySelector("h1");


function rollDice() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let diceImg1 = document.querySelector(".img1");
    let diceImg2 = document.querySelector(".img2");

    function setDiceImage(randomNumber, diceImg) {
        diceImg.setAttribute("src", `images/dice${randomNumber}.png`);
    }

    setDiceImage(randomNumber1, diceImg1);
    setDiceImage(randomNumber2, diceImg2);

    if (randomNumber1 === randomNumber2) {
        resultText.innerHTML = "Draw!";
    } else if (randomNumber1 > randomNumber2) {
        resultText.innerHTML = "Player 1 Wins!";
    } else {
        resultText.innerHTML = "Player 2 Wins!";
    }
}

resultText.addEventListener("click", rollDice);
