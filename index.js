//for string
const shuffleCharacter = (string) => {
  if (!string) throw new Error("No value provided.");
  if (typeof string !== "string") throw new Error("The provided value is not an string.");
  let randomizedString = [];
  let strLen = string.length;
  for (let i = 0; i < strLen; i++) {
    let randomNum = Math.floor(Math.random() * string.length);
    randomizedString.push(string[randomNum]);
    string = string.slice(0, randomNum) + string.slice(randomNum + 1);
  }
  return randomizedString.join("");
};

//for numbers
const validNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const shuffleNumber = (number) => {
  if (!number) throw new Error("No value provided.");
  if (typeof number !== "number") throw new Error("The provided value is not an number.");
  let randomizedNumber = [];
  number = eval(number).toString();
  let numLen = number.length;
  for (let i = 0; i < numLen; i++) {
    let randomNum = Math.floor(Math.random() * number.length);
    if (!validNumbers.includes(number[randomNum])) throw new Error("A number can only contain " + validNumbers.join(", "));
    randomizedNumber.push(number[randomNum]);
    number = number.slice(0, randomNum) + number.slice(randomNum + 1);
  }
  return Number(randomizedNumber.join(""));
};
module.exports = { shuffleCharacter, shuffleNumber };
