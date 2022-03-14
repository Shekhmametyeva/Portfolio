const audio = document.querySelector('.audio');
const playBtn = document.querySelector('.play');
const album = document.querySelector(".album");
const artist = document.querySelector(".artist");
const bgImg = document.querySelector(".bg-img");
const title = document.querySelector(".title");
const forward = document.querySelector(".forward");
const backward = document.querySelector(".backward");
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const timeCurrent = document.querySelector('.time-current');
const timeMusic = document.querySelector('.time-music');

const songs = ["Just the Way You Are", "Bohemian Rhapsody", "Mirror", "Grenade","The Show Must Go On", "When I Was Your Man"];
const artistChange = ["Bruno Mars", "Queen", "Lil Wayne feat. Bruno Mars", "Bruno Mars", "Queen", "Bruno Mars"];

let treck = 0;
let isPlay = false;


function preloadImages() {
  for(let i = 0; i <= 5; i++) {
      const img = new Image();
      img.src = `assets/img/${i}.jpg`;
      const bg = new Image();
      bg.src = `assets/img/${i}.${i}.jpg`;
      const aud = new Audio();
      aud.src = `assets/audio/${i}.mp3`;
    }
}
  preloadImages();

function Init () {
    title.innerHTML = songs[treck];
    artist.innerHTML = artistChange[treck];
    audio.src = `assets/audio/${treck}.mp3`;
    album.src = `assets/img/${treck}.jpg`;
    bgImg.src = `assets/img/${treck}.${treck}.jpg`;
}
Init();


function playMusic() {
    audio.play();
    playBtn.firstElementChild.href.baseVal = `assets/icon/sprite.svg#pause`;
    album.classList.add('active');
    isPlay = true;
}; 

function pauseMusic () {
    audio.pause();
    playBtn.firstElementChild.href.baseVal = `assets/icon/sprite.svg#play`;
    album.classList.remove('active');
    isPlay = false;
};

playBtn.addEventListener("click", () =>{
    if (!isPlay) {
        playMusic();
    } else {
        pauseMusic();
    }
});


function playNext() {
    treck++;
    if (treck > songs.length - 1) {
        treck = 0;
    }
    Init()
    playMusic()
};
forward.addEventListener('click', playNext);

function playPrev() {
    treck--;
    if (treck < 0) {
        treck = songs.length - 1;
    }
    Init();
    playMusic()
};
backward.addEventListener('click', playPrev);


function progressBar (event) {
    const duration = audio.duration;
    const currentTime = audio.currentTime;
    const progressShow = (currentTime / duration) * 100;
    progress.style.width = progressShow + '%';
    currentTimeShow ();
}
audio.addEventListener('timeupdate', progressBar);

function setProgress (event) {
    const width = progressContainer.clientWidth;
    const currentWidth = event.offsetX;
    const duration = audio.duration;
    audio.currentTime = (currentWidth / width) * duration;
}
progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', playNext);
audio.addEventListener('loadedmetadata', timeShow);


function timeShow () {
    let minutes = Math.floor(audio.duration/60);
    let seconds = Math.floor(audio.duration - minutes * 60);
    if (seconds < 10) seconds = `0${seconds}`;
    let time = `${minutes}:${seconds}`;
    timeMusic.textContent = time;
}

function currentTimeShow () {
    let minutes = Math.floor(audio.currentTime/60);
    let seconds = Math.floor(audio.currentTime - minutes * 60);
    if (minutes < 1) minutes = `0`;
    if (seconds < 10) seconds = `0${seconds}`;
    let time = `${minutes}:${seconds}`;
    timeCurrent.textContent = time;
} 