var playing = 0;
var audio = new Audio('media/audio/water.mp3');

function play() {
    audio.loop = true;
    if (playing === 0) {
        audio.play();
        playing = 1;
    } else {
        playing = 0;
        audio.pause();
    }
}
