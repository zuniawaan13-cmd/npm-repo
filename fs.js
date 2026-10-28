const fs=require("fs")



// fs.writeFileSync("notes.txt","Hello from node")
const content=fs.readFileSync("notes.txt","utf-8")
console.log(content)
