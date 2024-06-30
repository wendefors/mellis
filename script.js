document.getElementById('spin-button').addEventListener('click', () => {
    const wheel = document.getElementById('wheel');
    const degrees = Math.floor(Math.random() * 360);
    wheel.style.transform = `rotate(${degrees}deg)`;

    setTimeout(() => {
        const selectedSnack = Math.floor(degrees / (360 / 5)) + 1;
        document.getElementById('snack-image').src = `images/mellis${selectedSnack}.jpg`;
        document.getElementById('popup').classList.remove('hidden');
    }, 2000);
});

document.getElementById('popup').addEventListener('click', () => {
    document.getElementById('popup').classList.add('hidden');
});
