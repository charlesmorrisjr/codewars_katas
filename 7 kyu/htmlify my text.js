function htmlify (string) {
  let newStr = string.replace(/&/g, "&amp;");
  newStr = newStr.replace(/“/g, "&ldquo;");
  newStr = newStr.replace(/”/g, "&rdquo;");
  newStr = newStr.replace(/–/g, "&ndash;");
  newStr = newStr.replace(/’/g, "&rsquo;");
  
  return `<p>${newStr}</p>`;
}

console.log(htmlify("Simon says “Do the right thing”"));