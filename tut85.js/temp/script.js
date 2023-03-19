let input = document.getElementById("input");
console.log(input);
const try_catch = () => {
  try {
    if (typeof input.value == "string") {
      if (isNaN(input.value)) throw "Not a Number";
      else{
          console.log(input.value)
      }
    }
  } catch (error) {
  }
};
