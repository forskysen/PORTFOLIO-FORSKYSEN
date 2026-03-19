
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