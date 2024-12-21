const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
let isJumping = false;
let gravity = 0.9;

document.addEventListener('keydown', (event) => {
    if (event.key === ' ' && !isJumping) {
        jump();
    }
});

function jump() {
    isJumping = true;
    let position = 0;
    const interval = setInterval(() => {
        if (position >= 150) {
            clearInterval(interval);
            const downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                position -= 5;
                position *= gravity;
                dino.style.bottom = `${position}px`;
            }, 20);
        } else {
            position += 30;
            dino.style.bottom = `${position}px`;
        }
    }, 20);
}

function checkCollision() {
    const dinoRect = dino.getBoundingClientRect();
    const cactusRect = cactus.getBoundingClientRect();

    if (
        dinoRect.right > cactusRect.left &&
        dinoRect.left < cactusRect.right &&
        dinoRect.bottom > cactusRect.top
    ) {
        alert('Game Over');
        window.location.reload();
    }
}

setInterval(checkCollision, 10);
