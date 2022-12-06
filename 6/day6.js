const data = require('fs').readFileSync('input.txt', 'utf-8')

//part one
const containEqual = (string) => {
    let temp = '';
    for (let i = 0; i < string.length; i++) {
        temp = string.replaceAll(string[i], '');
        if (temp.length < 3) return true;
    }

    return false;
}


const processMarker = (data) => {
    for (let i = 0; i < data.length - 3; i++) {
        if(!containEqual(data.slice(i, i+4))) return i+4;
    }
}

console.log(processMarker(data));

//part two

const containEqual2 = (string) => {
    let temp = '';
    for (let i = 0; i < string.length; i++) {
        temp = string.replaceAll(string[i], '');
        if (temp.length < 13) return true;
    }

    return false;
}


const processMarker2 = (data) => {
    for (let i = 0; i < data.length - 13; i++) {
        if(!containEqual2(data.slice(i, i+14))) return i+14;
    }
}

console.log(processMarker2(data));
