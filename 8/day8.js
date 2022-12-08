const data = require('fs').readFileSync('input.txt', 'utf-8').split('\r\n');
const sData = []

for (const iterator of data) {
    sData.push(iterator.split(''));
}

const  example = `30373
25512
65332
33549
35390`.split('\n');

const sExample = []

for (const iterator of example) {
    sExample.push(iterator.split(''));
}

const getVisibleTrees = (data) => {
    let totalVisible = 0;
    for (let i = 0; i < data.length; i++) {
        console.log("Line:" + data[i])
        for (let k = 0; k < data[i].length; k++) {
            let rightVisible= true;
            let leftVisible = true
            let topVisible = true
            let bottomVisible = true;

            console.log("Current Char: "+ data[i][k]);


            //right
            if (k !== data[i].length - 1) {
                for(let right = k + 1; right < data[i].length; right++){
                    if (data[i][right] >= data[i][k]) rightVisible = false;
                }
            }
            
            //left
            if (k !== 0) {
                for(let left = k - 1; left >= 0; left--){
                    if (data[i][left] >= data[i][k]) leftVisible = false;
               }
            }
           
            //top

            for(let top = i + 1; top < data.length; top++){
                if (data[top][k] >= data[i][k]) topVisible = false;
            }
            
            //bottom
            for(let bottom = i - 1; bottom >= 0; bottom--){
                if (data[bottom][k] >= data[i][k]) bottomVisible = false;
            }

            console.log("RightVisible: " + rightVisible);
            console.log("LeftVisible: " + leftVisible);
            console.log("TopVisible: " + topVisible);
            console.log("BottomVisible: " + bottomVisible);
            console.log('\n\n')


            if ((rightVisible || leftVisible  || topVisible || bottomVisible) === true) totalVisible++;
        }
    }

    console.log(totalVisible);
}

const getHighestScenic = (data) => {
    let totalVisible = 0;
    for (let i = 0; i < data.length; i++) {
        console.log("Line:" + data[i])
        for (let k = 0; k < data[i].length; k++) {
            let rightTrees = 0;
            let leftTrees = 0;
            let topTrees = 0;
            let bottomTrees = 0;

            console.log("Current Char: "+ data[i][k]);


            //right
            if (k !== data[i].length - 1) {
                for(let right = k + 1; right < data[i].length; right++){
                    if (data[i][right] < data[i][k]) rightTrees++;
                    else {
                        rightTrees++;
                        break;
                    }
                }
            }
            
            //left
            if (k !== 0) {
                for(let left = k - 1; left >= 0; left--){
                    if (data[i][left] < data[i][k]) leftTrees++;
                    else {
                        leftTrees++;
                        break;
                    }
               }
            }
           
            //top
            if (i !== 0) {
                for(let top = i - 1; top >= 0; top--){
                    if (data[top][k] < data[i][k]) topTrees++;
                    else {
                        topTrees++;
                        break;
                    }
                }
            }

            //bottom
            if (i !== data.length - 1){
                for(let bottom = i + 1; bottom < data.length; bottom++){
                    if (data[bottom][k] < data[i][k]) bottomTrees++;
                    else {
                        bottomTrees++;
                        break;
                    }
                }
            }
            

            console.log("RightVisible: " + rightTrees);
            console.log("LeftVisible: " + leftTrees);
            console.log("TopVisible: " + topTrees);
            console.log("BottomVisible: " + bottomTrees);
            console.log('\n\n')


            let temp = (rightTrees * leftTrees * topTrees * bottomTrees);
            if(totalVisible < temp) totalVisible = temp;
        }
    }
    console.log(totalVisible);
}


getHighestScenic(sData);