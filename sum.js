console.log("Hello, world");

const sum = (a, b) => a + b;

console.log(process.argv);

// console.log(sum(20, 30));

// console.log(document);
// console.log(window);

//console.log(global);

// process.argv
const [, , n1, n2] = process.argv;

console.log(sum(+n1, +n2));


