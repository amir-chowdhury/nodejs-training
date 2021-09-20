function reverseString(str) {
  if (!str) {
    return "";
  }
  return str.split("").reverse().join("");
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const getInput = () => {
  readline.question("Reverse string: ", entered => {
    if (entered === "") {
      console.log("Nothing entered!");
    } else if (entered === "exit") {
      return readline.close();
    }
    console.log(reverseString(entered));
    getInput();
  });
}

getInput();
