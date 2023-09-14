function myCountChar(haystack, needle) {
  let length;
  for (length = 0; haystack[length] !== undefined; length++);
  let occurences = 0;
  for (let i = 0; i < length; i++) {
    if (haystack[i] === needle) {
      occurences++;
    }
  }
  return occurences;
}

myCountChar("Hello World", "o");
