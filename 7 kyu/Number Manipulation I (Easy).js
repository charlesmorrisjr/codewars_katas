function manipulate(num) { 

  let mid = Math.floor(String(num).length / 2);
  let newStr = String(num).slice(0, mid) + '0'.repeat(mid);
  
  if (String(num).length % 2) newStr += '0';

  // console.log(newStr);

  return Number(newStr);

} 

manipulate(192827764920);       // 192827000000
manipulate(838473);             // 838000
manipulate(8173648710293847);   // 8173648700000000
manipulate(817364871029384);    // 817364800000000