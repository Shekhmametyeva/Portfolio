const btnPlayers = document.querySelector(".btn-players");
const wraper = document.querySelector(".wraper");
const playingField = document.querySelector(".playing-field");
const moveStatus = document.querySelector(".move-status");
const gameContainer = document.querySelector(".game-container");
const arrData = document.querySelectorAll("[data-cell-index]");
const displayStatus = document.querySelector(".display-status");
const winnerContainer = document.querySelector(".winner-container");
const figura = document.querySelector(".figura");
const moves = document.querySelector(".moves");
const winner = document.querySelector(".winner");
const rating = document.querySelector(".rating-tr");


let gameState = [null, null, null, null, null, null, null, null, null];
let numberPlayers = 0;
let gameActive = false;
let playerComputer = false;
let currentPlayer = "X";
let move = 0;
let winnerGame = '';

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


window.addEventListener("load", () => {

    showRating()

    btnPlayers.addEventListener('click', (event) => {
        if (event.target.className === "btn") {
            wraper.style.display = 'none';
            playingField.style.display = "flex";
            numberPlayers = event.target.dataset.players;
        }  
    })

    moveStatus.innerHTML = currentPlayer;

    gameContainer.addEventListener("click", (event) => {
        if(gameActive || playerComputer) { return }

        if (event.target.className === "cell" && 
             gameState[event.target.dataset.cellIndex] === null) {
            move++;
            const ticTac = document.createElement("img");
            ticTac.src = `assets/icon/${currentPlayer}.png`;
            ticTac.alt = `${currentPlayer}`;
            ticTac.classList.add('tic-tac');
            event.target.append(ticTac);
            gameState[event.target.dataset.cellIndex] = currentPlayer; 
        } else {
            return
        } 
    
        checWin()
        chooseParticipants ()
    })

    winnerContainer.addEventListener('click', () => {location.reload() })
})


function chooseParticipants () {
    if(gameActive) { return }

    if (numberPlayers === '1') {
        playerComputer = true;
        moveStatus.innerHTML = 'O';
        setTimeout(() => {
            botZero()
            playerComputer = false;
            moveStatus.innerHTML = 'X';
            checWin()
        }, 500)
    }
    if (numberPlayers === '2') {
        playerChange()
    }
}


function playerChange () {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    moveStatus.innerHTML = currentPlayer;
}


function concat (a, b, c) {
    let result = gameState[a] + gameState[b] + gameState[c];

    if (result === "XXX" || result === "OOO") {
        return result
    }

    switch (result) {
        case "XXnull":
            return ["X", c]
        case "XnullX":
            return ["X", b]
        case "nullXX":
            return ["X", a]
        case "OOnull":
            return ["O", c]
        case "OnullO":
            return ["O", b]  
        case "nullOO":
            return ["O", a]
    }
}


function checWin () {
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = winCondition[0];
        let b = winCondition[1];
        let c = winCondition[2];

        let result = concat(a, b, c);

        if (result === "XXX" || result === "OOO") {
            gameActive = true;
            winnerGame = result[0];
            displayStatus.innerHTML = '';
            сhangeColor (a, b, c, result);
            showTheWinner (winnerGame) 
            saveResult (winnerGame)
            return
        }
    }
        let roundDraw = !gameState.includes(null);
        if (roundDraw) {
                displayStatus.innerHTML = '';
                showTheResult ()
                saveResult (winnerGame)
                return;
        }
    
}



function сhangeColor (a, b, c, result) {
    arrData[a].firstChild.src = `assets/icon/${result[0]}win.png`;
    arrData[b].firstChild.src = `assets/icon/${result[0]}win.png`;
    arrData[c].firstChild.src = `assets/icon/${result[0]}win.png`; 
}


function showTheWinner (winnerGame) {
    winnerContainer.classList.add("active");
    confetti()
    const ticTac = document.createElement("img");
    ticTac.src = `assets/icon/${winnerGame}win.png`;
    ticTac.alt = `${winnerGame}`;
    ticTac.width = 100;
    figura.append(ticTac);
    moves.innerHTML = move; 
}


function showTheResult () {
    winner.innerHTML ="";
    winnerContainer.classList.add("active");
    const message = `Game ended in a draw!`;
    winner.innerHTML = message;    
}

function saveResult (winnerGame) {
    if (winnerGame === '') {winnerGame = 'draw'}
    const localResult = JSON.parse(localStorage.getItem('game'));
    const arrayResult = [];
    const info = [winnerGame, move];

    if (localResult === null) {
        arrayResult.push(info)
        localStorage.setItem('game', JSON.stringify(arrayResult)) 
    } else if (localResult.length > 9) {
        const arrayResult = localResult;
        arrayResult.shift()
        arrayResult.push(info)
        localStorage.setItem('game', JSON.stringify(arrayResult))
    } else {
        const arrayResult = localResult;
        arrayResult.push(info)
        localStorage.setItem('game', JSON.stringify(arrayResult))
    }

    showRating ()
}


function showRating () { 
    const localResult = JSON.parse(localStorage.getItem('game'));

    if (localResult !== null) {
        rating.innerHTML = "";
        localResult.map((el) => {
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            td.innerHTML = `${localResult.indexOf(el) + 1}`;
            tr.append(td)
                for(let i = 0; i <= 1; i++) {
                    const td = document.createElement("td");
                    td.innerHTML = el[i];
                    tr.append(td)
                }
            rating.prepend(tr)
            return rating
        }) 
    }
}


function botZero () {
    if(gameActive) { return }
    move++;
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = winCondition[0];
        let b = winCondition[1];
        let c = winCondition[2];
        let result = concat(a, b, c)

        if (typeof(result) === "object" && result[0] === "O") {
            const ticTac = document.createElement("img");
            ticTac.src = `assets/icon/O.png`;
            ticTac.alt = `0`;
            arrData[result[1]].append(ticTac);
            gameState[result[1]] = "O";
            return
        }
    }
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = winCondition[0];
        let b = winCondition[1];
        let c = winCondition[2];
        let result = concat(a, b, c)

        if (typeof(result) === "object" && result[0] === "X") {
            const ticTac = document.createElement("img");
            ticTac.src = `assets/icon/O.png`;
            ticTac.alt = `0`
            arrData[result[1]].append(ticTac);
            gameState[result[1]] = "O"
            return
        }
    }

    let tempArr = []

    for (let i = 0; i < 9; i++) {
        if (gameState[i] === null) {
            tempArr.push(i)
        }
    }

    let randIndexTempArr = Math.floor(Math.random() * tempArr.length);
    let randNull = tempArr[randIndexTempArr];

    const ticTac = document.createElement("img");
    ticTac.src = `assets/icon/O.png`;
    ticTac.alt = `0`;
    arrData[randNull].append(ticTac);
    gameState[randNull] = "O"
}