// Synchronous or blocking
// -line by line execution

// ASynchronous or Non-blocking
// -line by line execution is not guarented
// - fires the callback function
const fs = require("fs")
let a = fs.readFile('temqp.txt',"utf-8",(err,data)=>{ // This function only when reading is done
    console.log("callback done")
    console.log(err)
    console.log(data)
})
console.log("hi")