const square = Array.from(document.getElementsByClassName("square"))



const O_Text = "O";
const x_Text = "X";
let currentPlayer = x_Text;
let restartbtn = document.getElementById('restart');
let playerText = document.getElementById('playerText');
console.log(playerText);
console.log(playerText.innerHTML);

let space = Array(9).fill(null);

const startGame = () => {
    square.forEach(square => square.addEventListener('click', squareClicked))
}

isXTurn = true;

function squareClicked(e) {
    const id = e.target.id;
    if (!space[id]) {
        space[id] = currentPlayer
        e.target.innerText = currentPlayer;


        if (playerHasWon() !== false) {
            // playerText = `${currentPlayer} has won!`
            playerText.innerHTML=`${currentPlayer} won the game!`;
            let winner = playerHasWon()

            winner.map(box => square[box].style.backgroundColor = "#8892b0")
            

        }

        // playerText.innerHTML=playerText;
        currentPlayer = currentPlayer == x_Text ? O_Text : x_Text;
    }

    // if(isXTurn == true){
    //     e.target.innerHTML = "X";
    //     isXTurn = false;
    // }else{
    //     e.target.innerHTML = "O"
    //     isXTurn = true;
    // }
}




restartbtn.addEventListener('click', restart)

function restart() {
    space.fill(null)

    square.forEach(square => {
        square.innerHTML = "";
        square.style.backgroundColor = ""
    })

    playerText.innerHTML = "Tic Tac Toe"

    currentPlayer = x_Text;
}



const winnerLogic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
]

function playerHasWon() {

    for (const x of winnerLogic) {
        const [a, b, c] = x;

        if (space[a] && (space[a] == space[b] && space[a] == space[c])) {

            return [a, b, c];
            // playerText = `${currentPlayer} has won!`
            

        }

    }
    return false;
}



startGame()
