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
module.exports = shuffleCharacter;
