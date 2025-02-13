document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const message = document.getElementById('message');
    const container = document.querySelector('.container');

    // Confetti effect function
    function createConfetti() {
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            container.appendChild(confetti);
        }
    }

    // Yes button handler
    yesBtn.addEventListener('click', () => {
        message.classList.remove('hidden');
        createConfetti();
        yesBtn.classList.add('clicked');
        noBtn.style.display = 'none';
    });

    // No button hover effect
    noBtn.addEventListener('mouseover', () => {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    });

    // No button click handler (just in case someone manages to click it)
    noBtn.addEventListener('click', () => {
        alert("Hey! I said it's not an option! 😉");
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    });
});