/*function repeatStringNumTimes(str, num) {
  if(num < 0) return "";
  return str.repeat(num);

}

repeatStringNumTimes("abc", 3);


function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);
*/

function repeatStringNumTimes(str, num) {
  var finalstr  = "";
  if (num < 0) return "";
  for (var i = 0; i < num; i++) {
    finalstr += str;
  }
return finalstr
}

repeatStringNumTimes("abc", 3);
