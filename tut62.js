let a = {
    name: "Aditya",
    age: "18",
    role: "Web Developer",
    fvrt_sabji: "Bhindi",
};


console.log(a);

let b = JSON.stringify(a);

console.log(b);
// To Parse the json
console.log(JSON.parse(b))
