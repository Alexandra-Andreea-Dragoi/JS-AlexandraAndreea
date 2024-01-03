const fs = require('fs');
const data1 = fs.readFileSync('./another.txt', 'utf-8');
const data2 = fs.readFileSync('./my-file.txt', 'utf-8');
const data3 = fs.readFileSync('./dir/this-other-file.txt', 'utf-8');
console.log(`${data1} ${data2} ${data3}!`);
