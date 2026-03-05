// reproductor principal
const playBtn = document.getElementById("playBtn");
const audio = document.getElementById("mainAudio");

playBtn.addEventListener("click", () => {

    if(audio.paused){
        audio.play();
        playBtn.textContent = "⏸ Pause";
    }else{
        audio.pause();
        playBtn.textContent = "▶ Play";
    }

});


// CREAR 20 PADS
const padsContainer = document.getElementById("pads");

for(let i=1;i<=5;i++){

    const button = document.createElement("button");
    button.classList.add("pad");
    button.innerText = "▶ Pad " + i;

    const sound = new Audio(`sounds/pad${i}.mp3`);

    button.addEventListener("click", () => {

        if(sound.paused){

            sound.play();
            button.classList.add("playing");
            button.innerText = "⏹ Pad " + i;

        }else{

            sound.pause();
            sound.currentTime = 0;

            button.classList.remove("playing");
            button.innerText = "▶ Pad " + i;
        }

    });

    sound.addEventListener("ended", () => {
        button.classList.remove("playing");
        button.innerText = "▶ Pad " + i;
    });

    padsContainer.appendChild(button);
}

const volumeSlider = document.getElementById("volumeSlider");

volumeSlider.addEventListener("input", () => {

    const volume = volumeSlider.value / 100;

    audio.volume = volume;

});