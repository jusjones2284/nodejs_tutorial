// const x = "1";
// const y = "39"; 

// console.log(x, y);

// //%s format variable to string
// //%d format number
// //%i 
// //%o

// console.log("I am %s and my age is %d", "Justin", y);
// console.clear()

// console.count("I am Justin");
// console.count("I am Justin");
// console.count("I am Justin Mickal");
// console.countReset("I am Justin")

// const function1 = ()=> console.trace();
// const function2 = ()=> function1();

// function2(); 

// const sum = ()=> console.log(`The sum of 2 and 3 is: ${2 + 3}`);
// const multiply = ()=> console.log(`The multiplication of 2 and 3 is: ${2 * 3}`);

// const measureTime = ()=>{
//   console.time("sum()");
//   sum();
//   console.timeEnd("sum()");
//   console.time("multiply()");
//   multiply();
//   console.timeEnd("multiply()"); 
// }

// measureTime();

const ProgressBar = require("progress")

const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", {
  total: 20, 

})

const timer = setInterval(()=> {
  bar.tick();
  if(bar.complete){
    clearInterval(timer)
  }
}, 1000)

const chalk = require("chalk");
console.log(chalk.green("This is nodejs tuitorial"));

// console.log(chalk.green("This is nodejs tutorial"));