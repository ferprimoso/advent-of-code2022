//const data = require('fs').readFileSync('input.txt', 'utf-8').split('\r\n');
//console.log(data);

example = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`.split('\n');



const root = {
    name: 'root',
    type: 'dir',
    dirs: [],
}


let cwd = root;

const createFilesystem = (data) => {
    let runningList = false;
    for (const line of data) {
        let sLine = line.split(' ');

        if (runningList === true) {
            if (sLine[0] === 'dir') {
                console.log(cwd.dirs);
                console.log(sLine);
                if (!cwd.dirs.some(item => item.name === sLine[1] && item.type === 'dir')) {
                    cwd.dirs.push(sLine[1] = {name: sLine[1], type:'dir', dirs: [], parent: cwd})
                }
            } else {
                if (!cwd.dirs.some(item => item.name === sLine[1] && item.type === 'file')) {
                    cwd.dirs.push(sLine[1] = {name: sLine[1], type:'file', size: parseInt(sLine[0])})
                }
            }
        }

        if (sLine[0] === '$') {
            if (sLine[1] === 'cd') {
                changeDirectory(sLine[2]);
                runningList = false;
            } 
            if (sLine[1] === 'ls') {
                runningList = true
            }
        }
    }
}

const changeDirectory = (directory) => {
    if (directory === '/') {
        cwd = root;
    } else if (directory === '..') {
        cwd = cwd.parent;
    } else {
        cwd = cwd.dirs.filter(dir => {
            return dir.name === directory && dir.type === 'dir'
        })
    }
}

createFilesystem(example);