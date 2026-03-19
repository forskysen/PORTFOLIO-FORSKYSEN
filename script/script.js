
document.addEventListener("DOMContentLoaded", function(){
    const video = document.getElementById('bgVideo');
    const overlay = document.getElementById('video-unlock');
    const card = document.getElementById('content-card')
    const iconMenu = document.getElementById('container__icon__menu')
    video.pause();

    overlay.addEventListener('click', () =>{
        video.muted = !video.muted;
        video.play();
        video.playbackRate = 1.0;
        overlay.classList.add('hidden');
        setTimeout (() =>{
            card.classList.add('show')
            iconMenu.classList.add('show')
        }, 200);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bgVideo');
    const volumeInput = document.getElementById('volume');
    const volumeIcon = document.querySelector('.container__volume i');
    const volumeContainer = document.querySelector('.container__volume');

    volumeInput.min = 0;
    volumeInput.max = 1;
    volumeInput.step = 0.01;
    volumeInput.value = video.muted ? 0 : video.volume;

    volumeInput.addEventListener('input', (e) => {
        const value = e.target.value;
        video.volume = value;
        
        if (value > 0) {
            video.muted = false;
        } else {
            video.muted = true;
        }
        updateIcon(value);
    });

    volumeIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        
        if (video.muted || video.volume === 0) {
            video.muted = false;
            if (video.volume === 0) video.volume = 0.5;
            volumeInput.value = video.volume;
        } else {
            video.muted = true;
            volumeInput.value = 0;
        }
        updateIcon(volumeInput.value);
    });

    function updateIcon(value) {
        volumeIcon.className = 'fa-solid';
        
        if (video.muted || value == 0) {
            volumeIcon.classList.add('fa-volume-xmark');
        } else if (value < 0.5) {
            volumeIcon.classList.add('fa-volume-low');
        } else {
            volumeIcon.classList.add('fa-volume-high');
        }
    }
});