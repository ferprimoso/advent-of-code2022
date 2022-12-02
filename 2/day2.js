let data = require('fs').readFileSync('input.txt', 'utf-8').split(/\r\n/);


function simpleElfChoise(elfChoise) {
    if (elfChoise === 'A') return 'X'
    if (elfChoise === 'B') return 'Y'
    if (elfChoise === 'C') return 'Z'
}


function playRound(elfChoise, playerChoise) {
    let points = 0;
    const elf = simpleElfChoise(elfChoise);


   if (playerChoise === elf) {
    points += 3
   }
   if (
    (playerChoise === 'X' && elf === 'Z') ||
    (playerChoise === 'Z' && elf === 'Y') ||
    (playerChoise === 'Y' && elf === 'X') 
   ) {
    points += 6
   }
   if (playerChoise === 'X') points += 1
   if (playerChoise === 'Y') points += 2
   if (playerChoise === 'Z') points += 3


   return points;
}

function newPlayerChoise(elfChoise, roundGuide) {
    // lose
    if (roundGuide === 'X') {
        if (elfChoise === 'A') return 'Z' 
        if (elfChoise === 'B') return 'X'
        if (elfChoise === 'C') return 'Y'
        //lose
    } else if (roundGuide === 'Y') {
        if (elfChoise === 'A') return 'X' 
        if (elfChoise === 'B') return 'Y'
        if (elfChoise === 'C') return 'Z'
        //win
    } else {
        if (elfChoise === 'A' )return 'Y' 
        if (elfChoise === 'B') return 'Z'
        if (elfChoise === 'C') return 'X'
    }
}


// Solve fisrt problem
function playStrategyGuide(data) {
    let totalPoints = 0
    for (let round of data) {
        totalPoints += (playRound(round[0],round[2]));
    }

    return totalPoints;
}

console.log("First problem solution: " + playStrategyGuide(data));





// Solve second problem
function playStrategyGuide2(data) {
    let totalPoints = 0
    for (let round of data) {
        totalPoints += (playRound(round[0], newPlayerChoise(round[0],round[2])));
    }

    return totalPoints;
}

console.log("Second problem solution: " + playStrategyGuide2(data));