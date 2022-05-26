const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const blackout = document.querySelector('.blackout');
const nav = document.querySelector('.nav');
const body = document.querySelector('.body-container');
const logo = document.querySelector('.logo-container');
const petsContainer = document.querySelector('.pets-card-container');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close');
const petsImg = document.querySelectorAll('.pets-card-img');
const petsSubtitle = document.querySelectorAll('.subtitle-pets');
const next = document.querySelector('.next');
const early = document.querySelector('.early');
const petsCard = document.querySelectorAll('.pets-card');
const popupElements = document.querySelectorAll('[data-popup]');
const popupImg = document.querySelector('.popup-img');


let isMenuOpen = false;


// бургер меню

hamburger.addEventListener('click', toggleMenu);
navList.addEventListener('click', removeMenu);
blackout.addEventListener('click', removeMenu);

function toggleMenu () {
  isMenuOpen = !isMenuOpen;
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
  body.classList.toggle('overflow');
  logo.classList.toggle('logo-hidden');
}

function removeMenu () {
  if (!isMenuOpen) { return }
  toggleMenu () 
}


// попап

petsContainer.addEventListener('click', openPopup);
blackout.addEventListener('click', removePopup);
closeBtn.addEventListener('click', removePopup);

function openPopup (event) {
  let pet = event.target.closest('.pets-card')
  fillСard (pet)
  if(pet) {
    body.classList.add('overflow');
    popup.classList.add('active');
  }
}

function removePopup () {
  body.classList.remove('overflow');
  popup.classList.remove('active');
}

function fillСard (pet) {
  const petObj = pets[pet.id];
  popupImg.src = petObj.img;
  popupImg.alt = petObj.name;
  
  popupElements.forEach((el) =>{
    el.innerHTML = petObj[el.dataset.popup];
  }) 
}


// сдайдер
let currentIndex = [0, 1, 2];
next.addEventListener('click', createСarousel);
early.addEventListener('click', createСarousel);


function chooseRandom () {
  const NewIndex = [];
  for (let i = 0; i < 3; i++) {
    let randIndex = Math.floor(Math.random() * pets.length);
    
    while (NewIndex.includes(randIndex) || currentIndex.includes(randIndex)) {
      randIndex = Math.floor(Math.random() * pets.length);
    }

    NewIndex.push(randIndex); 
  }
  currentIndex = NewIndex;
  return currentIndex;
}


function createRandomPets () {
  let random = chooseRandom ()
  const newCollection = petsContainer.cloneNode(true);
  const newContainerPets = Array.from(newCollection.children);

  newContainerPets.forEach((el, index) => {
    let petObj = pets[random[index]];
    el.id = random[index];
    el.classList.add('new-pets-card')
    el.children[0].src = petObj.img;
    el.children[0].alt = petObj.name;
    el.children[1].innerHTML = petObj.name;
  })

  return newCollection
}


function createСarousel (event) {
  const newCollection = createRandomPets () 

  document.querySelectorAll('.pets-card').forEach((el) => {
    el.classList.add('delet') 
  })

  if (event.currentTarget.className === 'arrow next') {
    petsContainer.append(newCollection.children[2]);
    petsContainer.append(newCollection.children[1]);
    petsContainer.append(newCollection.children[0]);

    petsContainer.classList.add('carusel-right');
  }

  if (event.currentTarget.className === 'arrow early') {
    petsContainer.prepend(newCollection.children[2]);
    petsContainer.prepend(newCollection.children[1]);
    petsContainer.prepend(newCollection.children[0]);

    petsContainer.classList.add('carusel-left');
  }
  

  const newCard = document.querySelectorAll('.new-pets-card');

  petsContainer.addEventListener('animationend', () => {
    document.querySelectorAll('.delet').forEach(el => { el.remove() })
    newCard.forEach((el) => el.classList.remove('new-pets-card'))
    petsContainer.classList.remove('carusel-right');
    petsContainer.classList.remove('carusel-left');
  })
}





