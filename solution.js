function findLongestWordWithMostVowels(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  let maxWordLength = 0;
  let maxVowelCount = 0;

  for (const word of words) {
    // Remove non-alphabetic characters and convert to lowercase
    const cleanedWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();

    const vowelCount = (cleanedWord.match(/[aeiou]/g) || []).length;

    if (
      cleanedWord.length > maxWordLength ||
      (cleanedWord.length === maxWordLength && vowelCount > maxVowelCount)
    ) {
      longestWord = cleanedWord;
      maxWordLength = cleanedWord.length;
      maxVowelCount = vowelCount;
    }
  }

  return longestWord;
}

//Basic functionality of function
const sentence = "This is a sample sentence with multiple words of different lengths";
const longestWord = findLongestWordWithMostVowels(sentence);
console.log("It should be 'different' " + "- " + "Answer : " + longestWord);

//This scenario for same length but different vowel count
const sentence2 = "This is a test with words apple eagle";
const longestWord2 = findLongestWordWithMostVowels(sentence2);
console.log("It should be 'eagle'" + "- " + "Answer : " + longestWord2);

//This scenario checks if the function correctly ignores non-alpabetic characters
const sentence3 = "This: is a! test1 with words, apple! eagle.";
const longestWord3 = findLongestWordWithMostVowels(sentence3);
console.log("It should be 'eagle'" + "- " + "Answer : " + longestWord3);

//This scenario checks if the function correctly ignores non-alpabetic characters
const sentence4 = "";
const longestWord4 = findLongestWordWithMostVowels(sentence4);
console.log("It should be empty" + "- " + "Answer : " + longestWord4);

//This scenario checks if the function correctly ignores non-alpabetic characters
const sentence5 = "!@#$%^&*()";
const longestWord5 = findLongestWordWithMostVowels(sentence5);
console.log("It should be empty" + "- " + "Answer : " + longestWord5);
