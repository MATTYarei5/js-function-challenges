// problem 1
function longestStr(words) {
  let word = "";

  for (let i of words) {
    if (i.length > word.length) {
      word = i;
    }
  }
  return word;
}
const array = ["a", "b", "cc"];
const letters = longestStr(array);
console.log(letters);

// problem 2
function swapFirstAndLast(str) {
  const chars = str.split("");

  [chars[0], chars[str.length - 1]] = [chars[str.length - 1], chars[0]];

  const swappedStr = chars.join("");

  return swappedStr;
}

const originalStr = "matt";
const swappedStr = swapFirstAndLast(originalStr);
console.log(swappedStr);

// problem 3
function addNumber(a, b, c) {
  return a + b + c;
}

const sum = addNumber(6, 10, 3);
console.log(sum);

// problem 4
function combineArrays(arr1, arr2) {
  const combined = [];
  let i = 0,
    j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (i < arr1.length) {
      combined.push(arr1[i++]);
    }
    if (j < arr2.length) {
      combined.push(arr2[j++]);
    }
  }
  return combined;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = combineArrays(array1, array2);
console.log(combinedArray);

// problem 5
function capitalizeSentence(sentence) {
  const words = sentence.split(" ");
  let capitalizedSentence = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);

    capitalizedSentence += capitalizedWord + " ";
  }

  return capitalizedSentence;
}

const sentence = "i am a sentence";
const capitalizedSentence = capitalizeSentence(sentence);
console.log(capitalizedSentence);

// problem 6
function longestWord(str) {
  const words = str.split(" ");

  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

const inputString = "This string has several different values";
const longest = longestWord(inputString);
console.log(longest);

// problem 7
function alphabetizeString(str) {
  const characters = alphaStr.toLowerCase().split("");

  const sortedCharacters = characters.sort();

  const sortedStr = sortedCharacters.join("");

  return sortedStr;
}

const alphaStr = "Hi there";
const sortedString = alphabetizeString(inputString);
console.log(sortedString);

// problem 8
function pow(num1, num2) {
  let result = 1;

  for (let i = 0; i < num2; i++) {
    result *= num1;
  }

  return result;
}

console.log(pow(4, 2));
console.log(pow(3, 4));
console.log(pow(2, 5));
