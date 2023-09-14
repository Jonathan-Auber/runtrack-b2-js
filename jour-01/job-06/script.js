function mySquareArray(array) {
  let result = [];
  let index = 0;
  for (let element of array) {
    result[index] = element * element;
    index++;
  }
  return result;
}

mySquareArray([3, 8, 4, 2, 5]);
