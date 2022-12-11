function sortList (sortBy, list) {
  return [...list].sort((a, b) => b[sortBy] - a[sortBy]);
}

let input = [
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
];

console.log(sortList('a', input));

// [
//   {"a": 4, "b": 12},
//   {"a": 3, "b": 2},
//   {"a": 2, "b": 40},
//   {"a": 1, "b": 3}
// ]