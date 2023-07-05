#### A simple package that can shuffle the characters in the string
## Download
```npm i shuffle-characters```
### Example:
```JavaScript
const shuffle = require("shuffle-characters");

//String
let a = shuffle.shuffleCharacter("Hello");
console.log(a);

//Numbers
let b = shuffle.shuffleNumber(20230705); 
//Remember that if the 0 is randomly shuffled to the start of the number it gets removed, 
// For example 20230705 can be shuffled randomly into 03700252, In this case function will only return 3700252 and not 03700252
console.log(b);
```
