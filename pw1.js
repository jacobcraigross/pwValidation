const fs = require('fs').promises;

const readLines = async () => {
    const data = await fs.readFile('./pw.txt', {encoding: 'utf-8'});
    return data.split('\n');
}

const solve = async () => {
    const lines = await readLines();
    console.log(lines);
}

const createObj = (line) => {
    const [rangeSeg, charSeg, password] = line.split(' ');
    const [min, max] = rangeSeg.split('-').map(Number);
    const char = charSeg[0];

    return {
        min, 
        max, 
        char, 
        password
    };
};

const charCount = (target, str) => {
    let count = 0;
    for(let char of str) {
        if(char === target) {
            count += 1;
        }
    }
    return count;
}

console.log(charCount('p', 'popping'));
console.log(charCount('t', 'tualatin'));


//solve().then(console.log);
