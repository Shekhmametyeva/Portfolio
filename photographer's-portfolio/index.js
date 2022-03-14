const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'email': 'E-mail',
      'phone': 'Phone',
      'message': 'Message',
      'send-message': 'Send message',
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'email': 'Электронная почта',
      'phone': 'Телефон',
      'message': 'Сообщение',
      'send-message': 'Отправить',
    }
  };
  
  
    // бургер меню

const hamburger = document.querySelector('.hamburger');
const linkMenu = document.querySelector('.nav-list');
const nav = document.querySelector(".nav");

function toggleMenu () {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);

function removeMenu () {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
}
linkMenu.addEventListener('click', removeMenu);


    // смена изображений в портфолио

const portfolioImage = document.querySelectorAll('.portfolio-image');
const portfolioList = document.querySelector('.portfolio-list');

function changeImg (event) {
    let current = portfolioList.querySelector(".active");
    let seasons = event.target.dataset.season;
    if(event.target.classList.contains('button-portfolio') && 
    seasons !== current.dataset.season) {
        current.classList.remove("active");
        event.target.classList.add("active");
        portfolioImage.forEach((el,index) => el.src = `./assets/img/${seasons}/${index + 1}.jpg`);
    }
}
portfolioList.addEventListener('click', changeImg);


    // смена языка

const containerLang = document.querySelector('.language');
const lang = document.querySelectorAll('[data-i18]');

function getTranslate (event) {
    let id = event.target.id;
    let langs = containerLang.querySelector('.lang-active');
    if (event.target.classList.contains("lang")) {
        lang.forEach ((el) => {
            if (el.placeholder) {
                el.placeholder = el.textContent = i18Obj [id] [el.dataset.i18];
            } else el.textContent = i18Obj [id] [el.dataset.i18];
        });
        langs.classList.remove("lang-active");
        event.target.classList.add("lang-active");
    } 
}
containerLang.addEventListener('click', getTranslate);


// смена фона

const sunMoon = document.querySelector(".sun-moon")
const section = document.querySelectorAll(".section");
const wrapTitle = document.querySelectorAll(".wrap-title");
const secTitle = document.querySelectorAll(".section-title");
const portfolioBtn = document.querySelectorAll(".button-portfolio");
const link = document.querySelectorAll(".link");
const line = document.querySelectorAll(".line");
const body = document.querySelector(".body");
const footer = document.querySelector(".footer-list");
const arrayClassChangeAll = [section, wrapTitle, secTitle, portfolioBtn, link, line];
const arrayClassChange =[body, footer, nav];

function fuull () {
let sunOrMoon = sunMoon.firstElementChild.href.baseVal;
let tema = (sunOrMoon === "assets/svg/sprite.svg#sun") ? "dark" : "light";
    if (tema === "dark") {
    arrayClassChange.forEach((el) => el.classList.add("light"));
    arrayClassChangeAll.forEach((el) => el.forEach((em) => em.classList.add("light")));
    sunMoon.firstElementChild.href.baseVal = "assets/svg/sprite.svg#moon";
  } else {
    arrayClassChange.forEach((element) => element.classList.remove("light"));
    arrayClassChangeAll.forEach((el) => el.forEach((em) => em.classList.remove("light")));
    sunMoon.firstElementChild.href.baseVal = "assets/svg/sprite.svg#sun";
  }
};
sunMoon.addEventListener("click", fuull);


console.log(`
Score 75 / 85
✅ Смена изображений в секции portfolio (+25)
    [+] при кликах по кнопкам Winter, Spring, Summer, Autumn в секции portfolio отображаются изображения из папки с соответствующим названием (+20)
    [+] кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными (+5)
✅ Перевод страницы на два языка (+25) 
    [+] при клике по надписи ru англоязычная страница переводится на русский язык (+10)
    [+] при клике по надписи en русскоязычная страница переводится на английский язык (+10)
    [+] надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем (+5)
✅ Переключение светлой и тёмной темы (+25)
    [+] тёмная тема приложения сменяется светлой (+10)
    [+] светлая тема приложения сменяется тёмной (+10)
    [+] после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) (+5)
✅ Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы (0)
✅ Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике (0)
`);