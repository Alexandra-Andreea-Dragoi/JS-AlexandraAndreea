const { readFileSync } = require('fs');
const data = readFileSync('./my-file.txt', 'utf-8');

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}.${month}.${year}`;

const { writeFileSync } = require('fs');
writeFileSync('./my-new-file.txt', `${data}, azi, ${currentDate}!`, 'utf-8');
