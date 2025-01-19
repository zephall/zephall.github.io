


const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const progressBar = document.getElementById('progressBar');
const progress = document.getElementById('progress');

// Función para reproducir el audio
playBtn.addEventListener('click', () => {
    audio.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
});

// Función para pausar el audio
pauseBtn.addEventListener('click', () => {
    audio.pause();
    playBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
});

// Actualizar la barra de progreso
audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
});

// Hacer que se pueda interactuar con la barra de progreso
progressBar.addEventListener('click', (e) => {
    const clickPosition = e.offsetX;
    const newTime = (clickPosition / progressBar.offsetWidth) * audio.duration;
    audio.currentTime = newTime;
});