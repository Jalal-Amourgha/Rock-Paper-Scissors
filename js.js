// const score = JSON.parse(localStorage.getItem(score))

const score = {
    wins: 0,
    losses: 0,
    ties: 0
}

function resetScore() {
    document.querySelector('.js-score').innerHTML = `  Wins : ${score.wins} , Losses : ${score.losses} and Ties : ${score.ties} `;
}

function random() {
    let computerMove;
    let computerPick = Math.random();

    if (computerPick > 0 && computerPick < 1 / 3) {
        computerMove = 'rock';

    } else if (computerPick > 1 / 3 && computerPick < 2 / 3) {
        computerMove = 'paper';

    } else if (computerPick > 2 / 3) {
        computerMove = 'scissor';
    }

    return computerMove;

}

function playerGame(playerMove) {
    const computerMove = random();
    let result;

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie!';
        } else if (computerMove === 'paper') {
            result = 'You Lost!';
        } else if (computerMove === 'scissor') {
            result = 'You Win!';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'paper') {
            result = 'Tie!';
        } else if (computerMove === 'scissor') {
            result = 'You Lost!';
        } else if (computerMove === 'rock') {
            result = 'You Win!';
        }
    } else if (playerMove === 'scissor') {
        if (computerMove === 'scissor') {
            result = 'Tie!';
        } else if (computerMove === 'rock') {
            result = 'You Lost!';
        } else if (computerMove === 'paper') {
            result = 'You Win!';
        }
    }
    document.querySelector('.js-picks').innerHTML = `  You picked : ${playerMove}       and     Computer picked : ${computerMove} `;

    if (result === 'Tie!') {
        score.ties += 1;
    } else if (result === 'You Lost!') {
        score.losses += 1;
    } else if (result === 'You Win!') {
        score.wins += 1;
    }



    document.querySelector('.js-result').innerHTML = ` ${result} `;
    document.querySelector('.js-score').innerHTML = `  Wins : ${score.wins} , Losses : ${score.losses} and Ties : ${score.ties}`;

    localStorage.setItem('score', JSON.stringify(score));
}