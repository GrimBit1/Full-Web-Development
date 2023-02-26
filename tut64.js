console.log("hi")
const fs = require("fs")

let a  = fs.readFileSync("tut63.js","utf-8") // The read file sync will return the string after reading the file
console.log(a)
a = a.replace("3000" , "5000")
console.log(a)
console.log("Content is writting")
let b  = fs.writeFileSync("tut63.js",a) // The write file sync will writether file