function myPrimeList(limit) {
  let primeList = [];
  let index = 0;

  for (let number = 0; number <= limit; number++) {
    let primary = 0;
    for (let i = 1; i <= limit; i++) {
      if (number % i === 0) {
        primary++;
      }
    }
    if (primary === 2) {
      primeList[index] = number;
      index++;
    }
    return primeList;
  }
}

myPrimeList(18);
