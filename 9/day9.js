const data = require('fs').readFileSync('input.txt', 'utf-8').split('\r\n');


let example = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`.split('\n').map((line) => line.split(' '));


let s = [0,0];
let h = [0,0];
let t = [0,0];     
let visits = []

function countVisit(x, y) {
    if (!visits.includes([x, y])) visits.push([x, y]); 
}


function moveTail() {


    if ((Math.abs(t[0] - h[0]) < 2) && (Math.abs(t[1] - h[1]) < 2)) return

    if(t[0] === h[0]) {
        if(t[1] < h[1]){
            t[1]++
            return
        }
        if(t[1] > h[1]) {
            t[1]--;
            return 
        }
    }

    if(t[1] === h[1]) {
        if(t[0] < h[0]){
            t[0]++;
            return
        } 
        if(t[0] > h[0]) {
            t[0]--;
            return
        } 
    }

    t[0] += h[0] - t[0];
    t[1] += h[1] -  t[1];
}

function makeMove(direction, steps) {
    for (let i = 0; i < steps; i++) {
        if (direction === 'U') {
            h[0]++
        }
        if (direction === 'D') {
            h[0]--
        }
        if (direction === 'R') {
            h[1]++
        }
        if (direction === 'L') {
            h[1]--
        }

        countVisit(...t)
        moveTail();

        console.log('current Head: ' + h);
        console.log('current Tail: ' + t);
        console.log('\n\n')
    }
}

function simRope(data) {
    for (const line of data) {
        makeMove(...line);
    }
    console.log(h);
    console.log(t);
}


simRope(example);

//console.log(visits.length);
