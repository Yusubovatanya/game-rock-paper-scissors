let btn = document.getElementById("play");
let playerDomElement_1 = document.getElementById("player_text_1");
let playerDomElement_2 = document.getElementById("player_text_2");
let playerImg_1 = document.getElementById("player1_img");
let playerImg_2 = document.getElementById("player2_img");
let result = document.getElementById("result");
let cardPlayer1 = document.getElementsByClassName("card_player_1");
let cardPlayer2 = document.getElementsByClassName("card_player_2");
let icon_player_1 = document.querySelector(".card_player_1 i")
let icon_player_2 = document.querySelector(".card_player_2 i")

function getPlayerResult() {
    return Math.floor((Math.random() * 3) + 1);
}

function getNameById(value) {
    switch (value) {
        case 1:
            value = "rock";
            break;
        case 2:
            value = "scissors";
            break;
        default:
            value = "paper";
            break;
    }
    return value;
}

function determineWinner(val1, val2) {
    var result;
    if ((val1 == 1 && val2 == 2) || (val1 == 3 && val2 == 1) || (val1 == 2 && val2 == 3)) {
        icon_player_1.classList.add('show');
        icon_player_2.classList.add('hide')
        result = "Winner:<br> <span class='winner'> First Player !</span>";
    } else if (val1 === val2) {
        icon_player_1.classList.add('hide')
        icon_player_2.classList.add('hide')
        result = "<span class='winner'>Draw <br><i class='fas fa-handshake draw'></i></span>";
    } else {
        icon_player_2.classList.add('show');
        icon_player_1.classList.add('hide')
        result = "Winner:<br>  <span class='winner'> Second Player !</span>";
    }
    return result;
}

function clearImg(domElement) {
    let list = domElement.classList;
    list.forEach(el => {
        if (el !== 'img_player')
            domElement.classList.remove(el);
    })
}

function clearIconClass(list) {
    list.forEach(domElement => {
        domElement.classList.remove("hide");
        domElement.classList.remove("show");
    })
}

function runGame() {
    clearImg(playerImg_1);
    clearImg(playerImg_2);
    clearIconClass([icon_player_1, icon_player_2])

    let value1 = getPlayerResult();
    let value2 = getPlayerResult();

    let playerName1 = getNameById(value1);
    let playerName2 = getNameById(value2);

    playerDomElement_1.innerHTML = playerName1;
    playerDomElement_2.innerHTML = playerName2;

    playerImg_1.classList.add(playerName1);
    playerImg_2.classList.add(playerName2);

    result.innerHTML = determineWinner(value1, value2);
}

btn.addEventListener("click", runGame);