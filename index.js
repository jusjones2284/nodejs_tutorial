// console.log("This is Nodjs Tutorial for beginners");
// console.log("This is the first tutorial on nodejs");
// console.log("We will cover Nodejs with command line");
// // process.exit(0)

// console.log("This is the first tutorial on nodejs");
// console.log("This is the first tutorial on nodejs");
// console.log("Where are you going");
// // process.exitCode = 1;

// const _ = require("lodash");
// const arr = [1, 4, 6, 8]
// console.log(_.first(arr));
// console.log(_.chunk(arr));

// console.log(_.filter((arr)=> arr[1] === 4));

// const cowsay = require("cowsay"); 
// console.log((cowsay.say),{
//     text: "I am learning NPM modulel",
//     e: "00",
//     t: "U"
// });

const { tesla, lexus } = require("./car");
console.log(JSON.stringify(tesla, null, 2));
console.log(JSON.stringify(lexus, null, 1));
console.log(lexus);
