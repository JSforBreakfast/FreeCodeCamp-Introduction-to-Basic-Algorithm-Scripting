function getIndexToIns(arr, num) {
  arr.sort(function(x,y){
    return x-y;
  })
  for (var i = 0;i < arr.length; i++){
    if (num <= arr[i]){
      return i;
    }
  }
   return arr.length;
}

getIndexToIns([40, 60], 50);
