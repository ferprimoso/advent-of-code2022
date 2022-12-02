let data = require('fs').readFileSync('input.txt', 'utf-8').split(/\r\n/);
let elfs = [];
let elfsReduced = [];
let temp = [];

for (let string of data) {
    if (string === '') {
        elfs.push(temp);
        temp = [];
    } else {
        temp.push(parseInt(string))
    }
}

for (let elf of elfs) {
    elfsReduced.push(elf.reduce((total, num) => total + num));
}

elfsSorted = elfsReduced.sort((a, b) => b - a);

topCalorieElf = elfsSorted[0];
top3CalorieElf = elfsSorted[0] + elfsSorted[1] + elfsSorted[2] 

console.log("Top calorie Elf:" + topCalorieElf);
console.log("Top 3 calories Elfs combined:", top3CalorieElf);