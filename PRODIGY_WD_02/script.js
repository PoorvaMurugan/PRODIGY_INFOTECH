let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function makeMove(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        document.getElementById(`cell-${index}`).innerText = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const winCondition = winConditions[i];
        const a = gameBoard[winCondition[0]];
        const b = gameBoard[winCondition[1]];
        const c = gameBoard[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }

        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (!gameBoard.includes('')) {
        document.getElementById('status').innerText = 'Draw!';
        gameActive = false;
        return;
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
    document.getElementById('status').innerText = '';
}
