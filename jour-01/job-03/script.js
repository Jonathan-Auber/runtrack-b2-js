function myIsInString(haystack, needle) {
  for (
    haystackLength = 0;
    haystack[haystackLength] !== undefined;
    haystackLength++
  );
  for (needleLength = 0; needle[needleLength] !== undefined; needleLength++);

  for (i = 0; i <= haystackLength - needleLength; i++) {
    let strChar = "";
    for (l = 0; l < needleLength; l++) {
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
