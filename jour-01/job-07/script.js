function myNearZero(array) {
  let negNumber;
  let highNumber = 0;

  for (let element of array) {
    if (element > highNumber) {
      highNumber = element;
    }
  }
  let nearZero = highNumber;
  for (let element of array) {
    if (element > 0 && element < nearZero) {
      nearZero = element;
    }
    if (element < 0 && element < nearZero) {
      negNumber = -element;
      if (negNumber < nearZero) {
        nearZero = negNumber;
      }
    }
    if (negNumber === nearZero) {
      nearZero = -negNumber;
    }
  }
  console.log(nearZero);
  return nearZero;
}

myNearZero([3, 8, 4, 2, 5]);
myNearZero([-1, -4, 2, 5, 6, 9]);
