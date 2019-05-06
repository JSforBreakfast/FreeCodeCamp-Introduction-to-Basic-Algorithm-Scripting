function confirmEnding(str, target) {
if (str.substr(-target.length) === target){
  return true;
}
  return false;
}

confirmEnding("Bastian", "n");
