function largestOfFour(arr) {
  var maxes = [];
  for (var i = 0; i < arr.length; i++){
    var numMax = arr[i][0];
    for (var ii = 0; ii < arr[i].length; ii++){
      var numElement = arr[i] [ii];
      if (numElement >= numMax){
        numMax = numElement;
     }
    }
    maxes.push(numMax);
   }
   return maxes;
  }
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
