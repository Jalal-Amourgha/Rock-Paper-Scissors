let newDesign = false;
let images = document.querySelector(".image-boxs");
let playerImgPicked = document.getElementById("playerImgPicked")
let computerImgPicked = document.getElementById("computerImgPicked")
let computerMove = 0;
let result = "";
let score = document.getElementById("score");
let wins = 0;
let losses = 0;
let ties = 0;




images.onclick = function (e) {

    //Change The Design
    if (newDesign === false) {
        document.getElementsByClassName("first-design")[0].classList.add("container");
        document.getElementsByClassName("first-design")[0].classList.remove("first-design");
        document.getElementsByClassName("box-two")[0].classList.remove("display-none")
        document.getElementsByClassName("image-boxs")[0].style.flexDirection = "column";
        document.getElementsByClassName("choose")[0].remove()

        newDesign = true;
    };

    //Take The Source Of The Image Clicked
    let src;
    src = e["target"]["id"];


    //Display The Image That User Choose
    playerImgPicked.src = `images/${src}.jpg`;



    //Style The Border of The Image
    if (src == "rock") {
        playerImgPicked.style.borderColor = "var(--blue)";
    } else if (src == "paper") {
        playerImgPicked.style.borderColor = "var(--red)";
    } else {
        playerImgPicked.style.borderColor = "var(--green)";
    }


    //Call The Functio That Generate Computer Move
    computerPick();

    //Display The Computer Move
    if (computerMove == 0) {
        computerImgPicked.src = `images/rock.jpg`;
        computerImgPicked.style.borderColor = "var(--blue)";
    } else if (computerMove == 1) {
        computerImgPicked.src = `images/paper.jpg`;
        computerImgPicked.style.borderColor = "var(--red)"
    } else {
        ;
        computerImgPicked.src = `images/scissors.jpg`;
        computerImgPicked.style.borderColor = "var(--green)";
    }
    

    //Finding The Winner
    if (computerMove === 0) {
        if (computerMove == 0 && src == "rock") {
            result = "Tie!";
            ties++;
        } else if (computerMove == 0 && src == "paper") {
            result = "Win!";
            wins++;
        } else if (computerMove == 0 && src == "scissors") {
            result = "Lost!";
            losses++;
        }
    } else if (computerMove === 1) {
        if (computerMove == 1 && src == "rock") {
            result = "Lost!";
            losses++;
        } else if (computerMove == 1 && src == "paper") {
            result = "Tie!";
            ties++;
        } else if (computerMove == 1 && src == "scissors") {
            result = "Win!";
            wins++;
        }
    } else {
        if (computerMove == 2 && src == "rock") {
            result = "Win!";
            wins++;
        } else if (computerMove == 2 && src == "paper") {
            result = "Lost!";
            losses++;
        } else if (computerMove == 2 && src == "scissors") {
            result = "Tie!";
            ties++;
        }
    }
    


    //Display The Result
    if (result === "Win!") {
        document.getElementById("result").innerHTML = `You ${result}`;
    } else if (result === "Lost!") {
        document.getElementById("result").innerHTML = `You ${result}`;
    } else {
        document.getElementById("result").innerHTML = result;
    }
    

    //Display The Score
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("wins").style.color = "var(--green)";
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("losses").style.color = "var(--red)";
    document.getElementById("ties").innerHTML = ties;
    document.getElementById("ties").style.color = "var(--blue)";
};

//The Function generate The Computer Move
function computerPick() {
    
    computerMove = Math.floor(Math.random() * 3);

    return computerMove;
};

