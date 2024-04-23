const repl = require("repl"); 

const local = repl.start("$");

local.on('j', ()=>{
  console.log("this is justin");
})

local.on('exit', ()=>{
  console.log("youve exited the system");
  process.exit();
})