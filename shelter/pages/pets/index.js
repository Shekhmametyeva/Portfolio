const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const lightening = document.querySelector('.lightening');
const petsContainer = document.querySelector('.pets-container');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close');
const nav = document.querySelector('.nav');
const body = document.querySelector('.body-container');
const logo = document.querySelector('.logo-container');
const popupElements = document.querySelectorAll('[data-popup]');
const popupImg = document.querySelector('.popup-img');
let isMenuOpen = false;

window.addEventListener('load', () => {
  body.classList.remove('hidden')
})
// hamburger menu

hamburger.addEventListener('click', toggleMenu);
navList.addEventListener('click', removeMenu);
lightening.addEventListener('click', removeMenu);


function toggleMenu () {
    isMenuOpen = !isMenuOpen;
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    body.classList.toggle('overflow');
    logo.classList.toggle('hidden')
}

function removeMenu () {
    if (!isMenuOpen) { return }
    toggleMenu () 
  }

// popup

 petsContainer.addEventListener('click', openPopup);
lightening.addEventListener('click', (removePopup));
closeBtn.addEventListener('click', removePopup);


function openPopup (event) {
  let pet = event.target.closest('.pets-card')
   fillСard (pet) 
  if(pet) {
    body.classList.add('overflow');
    popup.classList.add('active');
  }
  console.log(pet)
}
  
function removePopup () {
  body.classList.remove('overflow');
  popup.classList.remove('active');
}

const petsCard = document.querySelectorAll('.pets-card');

 function fillСard (pet) {
  const petObj = pets[pet.id];
  popupImg.src = petObj.img;
  popupImg.alt = petObj.name;
  
  popupElements.forEach((el) =>{
    el.innerHTML = petObj[el.dataset.popup];
  })  
}

console.log(pets) 


// Pagination
let size = getSize(document.documentElement.clientWidth);

 function getSize (el) {
  if (el < 768) {
    el = 'mobilQuery';
    return el
  } else if (el >= 768 && el < 1280) {
    el = 'tabletQuery';
    return el
  } else if (el >= 1280) {
    el = 'desktopQuery';
    return el
  }
}

window.addEventListener('resize', () => {
  const windowSize = getSize(document.documentElement.clientWidth);
  if (size !== windowSize) {location.reload()}

});

const hidden = document.querySelectorAll('.hidden');
const hiddenMob = document.querySelectorAll('.hidden-mob');
let pages = 0;
let petsPages = 0;
let currentPages = 0;

if (size === 'mobilQuery') {
  pages = 16;
  petsPages = 3;
} else if (size === 'tabletQuery') {
  pages = 8;
  petsPages = 6;
} else if (size === 'desktopQuery') {
  pages = 6;
  petsPages = 8;
}


const subtitlePets = document.querySelectorAll('.subtitle-pets');
const petsImg = document.querySelectorAll('.pets-img');
const paginator = document.querySelector('.paginator');


function chooseRandomArray () {
  const RandomArray = [];
  for (let i = 0; i < petsPages; i++) {
    let randIndex = Math.floor(Math.random() * pets.length);
    
    while (RandomArray.includes(randIndex)) {
      randIndex = Math.floor(Math.random() * petsPages);
    }

    RandomArray.push(randIndex); 
  }
  return RandomArray;
}



function createArrayPets () {
  let petsRandomArray = [];
  for (let i = 0; i < pages; i++) {
    petsRandomArray.push(...chooseRandomArray())
  }
  return petsRandomArray
}


const petsRandomArray = createArrayPets();


function drawCards (currentPages) {
  let randomIndex = petsRandomArray.slice(petsPages * currentPages, petsPages * currentPages + petsPages);

  petsCard.forEach((el,index) => {
    if (size === 'tabletQuery' && el.closest('.hidden')) { return}
    if (size === 'mobilQuery' && (el.closest('.hidden') || el.closest('.hidden-mob'))) { return}
  
    const objPets = pets[randomIndex[index]];
    el.children[0].src = objPets.img;
    el.children[1].innerHTML = objPets.name;
    el.children[2].id = randomIndex[index]
  
  })

}

drawCards (currentPages);

const beginning = document.querySelector('.beginning');
const early = document.querySelector('.early');
const next = document.querySelector('.next');
const end = document.querySelector('.end'); 


beginning.addEventListener('click', changePage);
end.addEventListener('click', changePage);
early.addEventListener('click', changePage);
next.addEventListener('click', changePage);

function changePage (event) {
  
  if(event.currentTarget.classList.contains("beginning")) {
    currentPages = 0
  } else if (event.currentTarget.classList.contains("end")) {
    currentPages = pages - 1;
  } else if (event.currentTarget.classList.contains("early")) {
    currentPages = +currentPages - 1
  } else if (event.currentTarget.classList.contains("next")) {
    currentPages = +currentPages + 1
  }
  paginator.children[0].innerHTML = (+currentPages + 1);
  drawCards (currentPages)
  disableArrow ()
}

function disableArrow () {

  if (currentPages === 0) {
    beginning.disabled = true;
    early.disabled = true;
  } else {
    beginning.disabled = false;
    early.disabled = false;
  }

  if (currentPages === pages - 1) {
    end.disabled = true;
    next.disabled = true;
  } else {
    end.disabled = false;
    next.disabled = false;
  }
}





