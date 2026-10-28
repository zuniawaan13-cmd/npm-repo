require("dotenv").config()

const { add, subtract ,multiplication} = require("./math");
const log = require("./logger");
console.log(add(2, 3));
console.log(subtract(100, 50));
console.log(multiplication(30,20,30))
console.log(process.env.EMAIL)
console.log(process.env.NAME)
console.log(process.env.API_KEY)
console.log(process.env.CLAUDE_AI)

log("server start");
log("modules are working");


