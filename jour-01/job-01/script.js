function myUpperCase(string) {
  const lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let length = 0;
  let upperCaseString = "";

  for (let i = 0; string[i] !== undefined; i++) {
    length++;
  }

  for (let i = 0; i < length; i++) {
    if (string[i] >= "a" && string[i] <= "z") {
      letter = string[i];

      for (let l = -1; letter !== lowerCase[l]; l++) {
        if (letter === lowerCase[l + 1]) {
          upperCaseString += upperCase[l + 1];
          break;
        }
      }
    } else if (string[i] >= "A" && string[i] <= "Z") {
      upperCaseString += string[i];
    } else {
      upperCaseString += string[i];
    }
  }
}

myUpperCase("Hello World");
