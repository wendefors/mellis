window.onload = () => {
    document.getElementById('popup').classList.add('hidden');
    document.getElementById('wheel').style.transform = 'rotate(0deg)';
};

document.getElementById('spin-button').addEventListener('click', () => {
    const wheel = document.getElementById('wheel');
    const degrees = Math.floor(Math.random() * 360);
    wheel.style.transform = `rotate(${degrees}deg)`;

    setTimeout(() => {
        // Använd en placeholder-bild eller färgad ruta
        document.getElementById('snack-image').src = 'placeholder.jpg';
        document.getElementById('popup').classList.remove('hidden');
    }, 2000);
});

document.getElementById('popup').addEventListener('click', () => {
    document.getElementById('popup').classList.add('hidden');
});
