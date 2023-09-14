function myIsInString(haystack, needle) {
  let haystackLength;
  let needleLength;

  for (
    haystackLength = 0;
    haystack[haystackLength] !== undefined;
    haystackLength++
  );
  for (needleLength = 0; needle[needleLength] !== undefined; needleLength++);

  for (let i = 0; i <= haystackLength - needleLength; i++) {
    let strChar = "";
    for (let l = 0; l < needleLength; l++) {
      strChar += haystack[i + l];
    }
    if (needle === strChar) {
      return true;
    }
  }
  return false;
}

myIsInString("Hello World", "llo");
myIsInString("Hello World", "rele");
