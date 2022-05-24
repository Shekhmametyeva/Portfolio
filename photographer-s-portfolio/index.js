// hamburger-menu

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const body = document.querySelector('.body');
const wraperDark = document.querySelector('.wraper-dark');
let isMenuOpen = false;

hamburger.addEventListener('click', toggleMenu);
wraperDark.addEventListener('click', removeMenu);
navList.addEventListener('click', removeMenu);

function toggleMenu (event) {
    isMenuOpen = !isMenuOpen;
    nav.classList.toggle('nav_open');
    hamburger.classList.toggle('hamburger_open')
    body.classList.toggle('hidden');
    wraperDark.classList.toggle('wraper-dark_open');
}
function removeMenu (event) {
    if (!isMenuOpen) { return }
    if (event.target.className === 'link' || event.target === wraperDark) { toggleMenu () }
     
}

// translate

const languachContainer = document.querySelector('.languach');
const languach = document.querySelectorAll('[data-translate]');
let lang = localStorage.getItem('lang') === 'ru' ? 'ru' : 'en';

languachContainer.addEventListener('click', translatePage);

function translatePage (event) {
    if (event.target.classList.contains("link") && !event.target.classList.contains("languach__link_active")) {
        lang = lang === 'ru' ? 'en' : 'ru';
        document.querySelector('.languach__link_active').classList.remove('languach__link_active');
        event.target.classList.add('languach__link_active'); 
        languach.forEach((el) => {
            if (el.placeholder) {
                el.placeholder = translateObj[lang][el.dataset.translate]
            } else {
                el.textContent = translateObj[lang][el.dataset.translate]
            }
            
        })
    }
    localStorage.setItem('lang', lang) 
}

// change images

const portfolioButton = document.querySelector('.portfolio__button__container');
const portfolioImg = document.querySelectorAll('.portfolio__img');

portfolioButton.addEventListener('click', changeImages)

function changeImages (event) {
    if (event.target.classList.contains("portfolio__button") && !event.target.classList.contains("button_active")) {
        document.querySelector('.button_active').classList.remove('button_active');
        event.target.classList.add('button_active'); 
        
        const season = event.target.dataset.translate;
        portfolioImg.forEach((el, index) => {
            el.src = `assets/img/${season}/${index + 1}.jpg`
        })
    }
}

//change tema

const sunMoon = document.querySelector('.tema__icon');
let tema = localStorage.getItem('tema') === 'light' ? 'light' : "dark";

sunMoon.addEventListener('click', changeTema)

function changeTema () {
    if (tema === "dark") {
        sunMoon.firstElementChild.href.baseVal = "assets/svg/sprite.svg#moon";
        body.classList.add('light')
        tema ="light";
    } else {
        sunMoon.firstElementChild.href.baseVal = "assets/svg/sprite.svg#sun";
        body.classList.remove('light')
        tema = "dark";
    }
    localStorage.setItem('tema', tema)
}

window.addEventListener('load', () => {
    if (tema === "light") {
        sunMoon.firstElementChild.href.baseVal = "assets/svg/sprite.svg#moon";
        body.classList.add('light')
    }

    if (lang === 'ru') {
        document.getElementById('en').classList.remove('languach__link_active');
        document.getElementById('ru').classList.add('languach__link_active'); 
        languach.forEach((el) => {
            if (el.placeholder) {
                el.placeholder = translateObj[lang][el.dataset.translate]
            } else {
                el.textContent = translateObj[lang][el.dataset.translate]
            }
            
        })
    }
})

const videoButton = document.querySelector('.video-player__icon');
const video = document.querySelector('.video');

videoButton.addEventListener('click', playVideo);

function playVideo () {
    videoButton.classList.add('hidden')
    video.play()
    video.setAttribute('controls', 'controls')

}