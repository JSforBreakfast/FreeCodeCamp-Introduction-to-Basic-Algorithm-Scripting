function titleCase(str) {
  var words = str.toLowerCase().split(" ");
  for(var i = 0; i < words.length; i++) {
    var letters = words[i].split("");
    letters[0] = letters[0].toUpperCase();
    words[i] = letters.join("");
  }
  return words.join(" ");
}

titleCase("I'm a little tea pot");
