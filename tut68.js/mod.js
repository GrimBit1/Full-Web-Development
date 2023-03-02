console.log("Hi, This is mod.js");

let average = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum/arr.length;
};

module.exports = {
    average : average,
    name : 'aditya',
    age : 18,
}