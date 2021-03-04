const userScore = 0
const computerScore = 0
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

function getComputerChoice() {
    const choice = ['r', 'p', 's']
    //console.log(Math.floor(Math.random() * 3))
    const randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber]
}

function game(userChoice) {
    console.log("This is your choice: " + userChoice)
}

function main() {

    rock_div.addEventListener('click', function () {
        //  console.log('you clicked on rock')
        game('r')
    })


    paper_div.addEventListener('click', function () {
        //  console.log('you clicked on paper')
        game('p')
    })

    scissors_div.addEventListener('click', function () {
        // console.log('you clicked on scissors')
        game('s')
    })
}


main()