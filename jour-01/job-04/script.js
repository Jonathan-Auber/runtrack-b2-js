function myArraySum(array) {
  let sum = 0;
  for (let element of array) {
    sum += element;
  }
  return sum;
}

myArraySum([4, 24, 52, 14, 32, 56]);
