function generateHashtag (str) {
  if (str === '') return false;
  
  let strArray = str.split(' ');
  // console.log(strArray)
  
  let hashtagString = strArray.map(word => {
    if (word.trim() !== '') {
      return word[0].toUpperCase() + word.slice(1);
    }
  }).join('');
  
  hashtagString = '#' + hashtagString;

  if (hashtagString === '#' || hashtagString.length > 140) return false;

  return hashtagString;
}

// console.log(generateHashtag('Hello World!'));
console.log(generateHashtag("    Hello     World   "));
console.log(generateHashtag(""), false, "Expected an empty string to return false")
console.log(generateHashtag(" ".repeat(200)), false, "Still an empty string")
console.log(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
console.log(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
console.log(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
console.log(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
console.log(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"))
// console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
// console.log(generateHashtag("a".repeat(140)), false, "Too long")
