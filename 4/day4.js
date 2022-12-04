const data = require('fs').readFileSync('input.txt', 'utf-8').split(/\n/);

const getPairsInteger = (pair) => {
  firstPair = pair.split(',')[0].split('-');
  secondPair = pair.split(',')[1].split('-');

  return [firstPair, secondPair];
};

const fullyContain = (pair) => {
  const firstPair = pair[0];
  const secondPair = pair[1];

  if (parseInt(firstPair[0]) <= parseInt(secondPair[0])) {
    if (parseInt(firstPair[1]) >= parseInt(secondPair[1])) return 1;
  }
  if (parseInt(firstPair[0]) >= parseInt(secondPair[0])) {
    if (parseInt(firstPair[1]) <= parseInt(secondPair[1])) return 1;
  }

  return 0;
};

const fullyOverlap = (pair) => {
  const firstPair = pair[0];
  const secondPair = pair[1];

  if (
    parseInt(firstPair[0]) <= parseInt(secondPair[0]) &&
    parseInt(secondPair[0]) <= parseInt(firstPair[1])
  ) {
    return true;
  } else if (
    parseInt(secondPair[0]) <= parseInt(firstPair[0]) &&
    parseInt(firstPair[0]) <= parseInt(secondPair[1])
  ) {
    return true;
  }

  return false;
};

const partOne = (data) => {
  let sum = 0;
  for (let pair of data) {
    sum += fullyContain(getPairsInteger(pair));
  }

  return sum;
};

const partTwo = (data) => {
  let sum = 0;
  for (let pair of data) {
    sum += fullyOverlap(getPairsInteger(pair));
  }

  return sum;
};

console.log(partOne(data));
console.log(partTwo(data));
