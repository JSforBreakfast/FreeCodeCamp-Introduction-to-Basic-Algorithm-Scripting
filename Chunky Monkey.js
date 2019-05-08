function chunkArrayInGroups(arr, size) {
  var newArray = [];

  while(arr.length > 0){
    newArray.push(arr.slice(0, size));
    arr = arr.slice(size);
  }
 return newArray
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
