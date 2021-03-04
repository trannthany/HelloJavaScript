let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sup();

function getComputerChoice() {
    const choice = ['r', 'p', 's']
    //console.log(Math.floor(Math.random() * 3))
    const randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber]
}

function convertToWord(letter) {
    switch (letter) {
        case 'r':
            return 'Rock'
        case 's':
            return 'Scissors'
        default:
            return 'Paper'
    }
}

function animationEffect(user, classSelector) {
    const userChoice_div = document.getElementById(user)
    userChoice_div.classList.add(classSelector)
    // setTimeout(function () { document.getElementById(user).classList.remove(classSelector) }, 300)

    //for one liner inner function
    setTimeout(() => document.getElementById(user).classList.remove(classSelector), 300)
}

function win(user, computer) {
    userScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You win!`
    animationEffect(user, 'green-glow')

}

function lose(user, computer) {
    computerScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(computer)}${smallCompWord}. You lose!`
    animationEffect(user, 'red-glow')
}

function draw(user, computer) {
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} is the same as ${convertToWord(computer)}${smallCompWord}. Draw!`
    animationEffect(user, 'grey-glow')
}

function game(userChoice) {
    // console.log("This is your choice: " + userChoice)
    const computerChoice = getComputerChoice()

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            //console.log("USER WINS.")
            win(userChoice, computerChoice)
            break
        case "rp":
        case "ps":
        case "sr":
            //console.log("USER LOSES.")
            lose(userChoice, computerChoice)
            break
        case "pp":
        case "ss":
        case "rr":
            //console.log("IT'S a DRAW.")
            draw(userChoice, computerChoice)
            break
    }

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