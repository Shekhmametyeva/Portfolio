const wrapImg = document.querySelector(".wrap-img");
const wrapError = document.querySelector(".wrap-error");
const input = document.querySelector(".search");
const btnSearch = document.querySelector(".search-button");
const btnCancel = document.querySelector(".cancel-button");
const openDiv = document.querySelector(".open");
const openImg = document.querySelector(".open-img");
const body = document.querySelector('body');

let query = "car";

async function getData() {
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=18&orientation=landscape&client_id=f07CFie4eeyOJe--kIHt9mGuFiRG8eqztFboajhvmUo`;  
    const res = await fetch(url);
    const data = await res.json();
    showData (data)
} 

function showData (data) {
    canselImg();
    wrapError.classList.remove('active');
    if (data.results.length !== 0) {
        data.results.map(el => {
            const img = document.createElement('img');
            img.classList.add('gallery-img');
            img.src = `${el.urls.regular}`;
            img.alt = `image`;
            wrapImg.append(img);
            return wrapImg
        })
    }  else {
        wrapError.classList.add('active');
    } 
} 

function canselImg () {
    wrapImg.innerHTML = '';
    wrapImg.classList.remove('errors');
} 

function canselQuery () {
    input.value = '';
}

function imagesOpen (event) {
    if (event.target.className === 'gallery-img') {
        openDiv.classList.add('active')
        openImg.src = event.target.src;
        body.classList.add('hidden')
    } 
} 

function imagesClose () {
    openDiv.classList.remove('active');
    body.classList.remove('hidden')
}

window.addEventListener("load", () => {
    getData();

    btnSearch.addEventListener('click', () => {
        if (input.value !== '') {
            query = input.value;
            getData()
        } 
    });

    input.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && input.value !== '') {
            query = input.value;
            getData()
        } else if (event.key === 'Escape'){
            canselQuery()
        }
    });

    btnCancel.addEventListener('click', canselQuery);

    wrapImg.addEventListener("click", imagesOpen);

    openDiv.addEventListener('click', imagesClose);
})