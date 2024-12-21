let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userGuess = document.getElementById('guessInput').value;
    const message = document.getElementById('message');

    if (userGuess == randomNumber) {
        message.textContent = "Selamat! Anda menebak dengan benar!";
        message.style.color = "green";
    } else if (userGuess > randomNumber) {
        message.textContent = "Terlalu tinggi! Coba lagi.";
        message.style.color = "red";
    } else {
        message.textContent = "Terlalu rendah! Coba lagi.";
        message.style.color = "red";
    }
}
