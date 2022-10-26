function scramble(str1, str2) {
  const LETTER_A = 97;
  const LETTER_Z = 122;

  for (let letter = LETTER_A; letter <= LETTER_Z; letter++) {
    const regEx = new RegExp(String.fromCharCode(letter), 'gi');
    let str1Matches = str1.match(regEx) || [];
    let str2Matches = str2.match(regEx) || [];

    if (str2Matches.length > str1Matches.length) return false;
  }
  return true;
}