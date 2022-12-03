let data = require('fs').readFileSync('input.txt', 'utf-8').split(/\n/);

const getPriority = (char) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const priorityValue = 1 + parseInt(alphabet.indexOf(char));

  return priorityValue;
};

const getRepeatedChar = (string) => {
  const firstPart = string.slice(0, string.length / 2);
  const secondPart = string.slice(string.length / 2);

  for (let char of firstPart) {
    for (let char2 of secondPart) {
      if (char === char2) return char;
    }
  }
};

const sumOfProprieties = (data) => {
  let sum = 0;
  for (let rucksack of data) {
    sum += getPriority(getRepeatedChar(rucksack));
  }

  return sum;
};

console.log('Total sum of proprieties ' + sumOfProprieties(data));

// part 2

const createElfGroups = (data) => {
  const elfGroups = [];
  for (let i = 0; i < data.length; i += 3) {
    elfGroups.push([data[i], data[i + 1], data[i + 2]]);
  }

  return elfGroups;
};

const getElfBadge = (elfGroup) => {
  const firstElf = elfGroup[0];
  const secondElf = elfGroup[1];
  const thirdElf = elfGroup[2];

  for (let char of firstElf) {
    for (let char2 of secondElf) {
      for (let char3 of thirdElf) {
        if (char === char2 && char2 === char3) return char;
      }
    }
  }
};

const sumOfBadge = (elfGroups) => {
  let sum = 0;
  for (let elfGroup of elfGroups) {
    sum += getPriority(getElfBadge(elfGroup));
  }

  return sum;
};

const elfGroups = createElfGroups(data);

console.log('Total of elf groups priority: ' + sumOfBadge(elfGroups));
