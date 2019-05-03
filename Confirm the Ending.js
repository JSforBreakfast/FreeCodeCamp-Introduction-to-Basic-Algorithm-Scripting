/*function confirmEnding(str, target) {
 if (str.endsWith(target)){
   return true;
 }
  return false;
}

confirmEnding("Bastian", "n");*/

//could've been solve in one line with: return str.endswith(target); or like this: return str.substr(-target.length) === target;the splice method could've also been used.

function confirmEnding(str, target) {
if (str.substr(-target.length) === target){
  return true;
}
return false;
}

confirmEnding("Bastian", "n");
