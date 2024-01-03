console.log(process.argv);
// A= pi * r * r
const pi = 3.14;
let [, , radius = 1] = process.argv;
radius = Number(radius);

console.log(pi * radius ** 2);
