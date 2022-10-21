//return the total number of smiling faces in the array
function countSmileys(arr) {
  const EYES = [':', ';'];
  const NOSE = ['-', '~'];
  const MOUTH = [')', 'D'];
  
  let numSmileys = 0;
  
  arr.forEach(face => {
    if (face[0] === EYES[0] || face[0] === EYES[1]) {
      if (face[1] === NOSE[0] || face[1] === NOSE[1]) {
        if (face[2] === MOUTH[0] || face[2] === MOUTH[1]) {
          numSmileys += 1;
        }
      } else if (face[1] === MOUTH[0] || face[1] === MOUTH[1]) {
        numSmileys += 1;
      }
    }
  })
  return numSmileys;
}