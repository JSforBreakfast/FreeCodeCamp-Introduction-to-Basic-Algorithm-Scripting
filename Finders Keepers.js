function findElement(arr, func) {
  let num = arr.filter(func);
  if (arr.length >= 1){
    return num [0];
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
