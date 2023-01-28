const prevMultOfThree = n => {
  let strNum = String(n);
  
  for (let i = strNum.length; i > 0; i--) {
    let curNum = Number(strNum.slice(0, i));
    if (!(curNum % 3)) return curNum;
  }
  
  return null;
}

console.log(prevMultOfThree(952406))  // 9