function orderWeight(string) {
  let weightArr = string.split(' ');
  let sortedWeights = [];

  // Calculate 'weight score' of each actual weight
  let weightScore = weightArr.map(weight => {
    if (weight !== '') {
      if (weight.length === 1) return Number(weight);
      return weight.split('').reduce((accum, cur) => Number(accum) + Number(cur));
    }
  })

  // Add weightScore to weightArr for sorting purposes
  weightArr = weightArr.map((element, idx) => {
    return [element, weightScore[idx]];
  })
 
  weightArr.sort((a, b) => a[1] - b[1]);
  weightScore = [...new Set(weightScore.sort((a, b) => a - b))];  // Sort weightScore in numerical ascending order and remove duplicates with Set object

  // If weights have the same score, sort each weight according to their Unicode code point
  for (score of weightScore) {
    let weights = weightArr.filter(element => element[1] === score);

    if (weights.length > 1) {
      weights.sort();
    }
    sortedWeights.push(...weights)
  }

  // Extract weights
  return sortedWeights.map(element => element[0]).join(' ');
}

console.dir(orderWeight("  103 123  4444  99 2000"));                      // "2000 103 123 4444 99"
console.dir(orderWeight("103 123 4444 99 2000"));                          // "2000 103 123 4444 99"
console.dir(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")); // "11 11 2000 10003 22 123 1234000 44444444 9999"
console.dir(orderWeight('299365 65 157101 127 89230 99 433367 32 131595 8 327411 78 198915 181 90219 149 78238 147 339798 152 3'));
// '3 32 152 8 127 181 65 147 149 157101 78 327411 99 90219 89230 131595 433367 78238 198915 299365 339798'