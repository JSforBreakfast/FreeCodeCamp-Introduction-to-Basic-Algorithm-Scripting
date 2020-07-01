//Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {

  if (endNum <= startNum) {

    return [startNum];

  } else {

    var number = rangeOfNumbers(startNum + 1, endNum);

    number.unshift(startNum);

    return number;

  }

}
