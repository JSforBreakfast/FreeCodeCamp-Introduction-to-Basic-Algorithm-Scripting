function findLongestWordLength(str) {
  var word = str.split(' ');
  var longestWord = 0;

  for (var i = 0; i < word.length; i++) {
    if (word[i].length > longestWord) {
      longestWord = word[i].length;
    }
  }

  return longestWord;
}
