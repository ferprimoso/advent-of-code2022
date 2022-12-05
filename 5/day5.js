const data = require('fs').readFileSync('input.txt', 'utf-8').split(/\r\n/);
const stacksData = data.slice(0, 9);
const movesData = data.slice(10);

const makeMoves = (movesData) => {
  let moves = []
  for (const line of movesData) {
    let temp = line.split(' ');
   moves.push([parseInt([temp[1]]), temp[3] - 1, parseInt(temp[5] - 1)]);
  }

  return moves
}

const makeStacks = (stacksData) => {
  let stacks = []
  for (let k = 0; k < 9; k++) {
    let temp = []
    for (let i = 7; i >= 0; i--) {
      temp.push(stacksData[i].slice((k * 4) + 1, (k * 4) + 2))
    }
    stacks.push(temp.filter(char => char !== ' '));
  }
  
  return stacks
}

const moves = makeMoves(movesData);
const stacks = makeStacks(stacksData);

const moveStacks = (stacks, moves) => {
  let movingStacks = JSON.parse(JSON.stringify(stacks));

  for (const move of moves) {
    for (let i = 0; i < move[0]; i++) {
      let temp = movingStacks[move[1]].pop();
      movingStacks[move[2]].push(temp);
    }
  }

  return movingStacks;
}

const moveStacks2 = (stacks, moves) => {
  let movingStacks2 = JSON.parse(JSON.stringify(stacks));
  let temp = []

  for (const move of moves) {
      temp = movingStacks2[move[1]].splice(-move[0]);
      movingStacks2[move[2]].push(...temp);
  }

  return movingStacks2;
}


const getTopCrates = (stacks) => {
  let string = ''
  for (let stack of stacks) {
    if (stack.length === 0) string += ' ';
    string += stack.slice(-1);
  }

  return string;
}

console.log("Part one, Top crates after moves: " + getTopCrates(moveStacks(stacks, moves)));
console.log("Part two, Top crates after moves: " +  getTopCrates(moveStacks2(stacks, moves)));

