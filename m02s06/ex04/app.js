const { readFileSync, read } = require('fs');
const message1 = readFileSync('./another.txt', 'utf-8');
const message2 = readFileSync('./my-file.txt', 'utf-8');
const message3 = readFileSync('./dir/this-other-file.txt', 'utf-8');
console.log(`${message1} ${message2} ${message3}!`);
