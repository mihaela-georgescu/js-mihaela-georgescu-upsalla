const { readFileSync, writeFileSync } = require('fs');
const message = readFileSync('./my-file.txt', 'utf-8');
const currentDate = new Date().toString();
const finalMessage = `${message}, azi, ${currentDate}!`;

writeFileSync('./new-file.txt', finalMessage, 'utf-8');
