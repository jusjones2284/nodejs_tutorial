const minimist = require("minimist")
// ;
// console.log(process.argv);
// console.log(process.argv.slice(1)[1]);

// process.argv.forEach((a, b)=>{
//   console.log(`${b}:${a}`);
// })

const argNew = minimist(process.argv.slice(2), process.argv.slice(3));
console.log(argNew.name,"\n", argNew.color);
// comand line: node argument.js --name=jusmickal --color=black 
console.log(process.argv.slice(2));