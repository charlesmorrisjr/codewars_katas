function digitalRoot(n) {
  let sum = Number(String(n).split('').reduce((total, num) => Number(total) + Number(num)));

  return sum > 9 ? sum = digitalRoot(sum) : sum;
}