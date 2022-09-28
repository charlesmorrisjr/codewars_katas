/*

input: two strings
  - First string contains beginning IPv4 address
  - Second string contains ending IPv4 address

output: an integer
  - The number of IPv4 addresses between the two input addresses


Implicit requirements:
  - Each 8-bit integer within the given IP addresses are integers ranging from 0-255


* Data Structure *

Structure of IPv4 address:

- An IPv4 address uses 32-bit addressing
- An IPv4 address consists of 4 8-bit integers (octets) separated by periods
- Each of the 4 numbers in an IPv4 address is an integer ranging from 0-255


* Example *

("50.0.0.0", "50.1.1.1") => 65793

"50.0.0.0" => (50 * (2 ^ 24)) + (0  * (2 ^ 16)) +  (0 * (2 ^ 8)) +  0 = 838,860,800
"50.1.1.1" => (50 * (2 ^ 24)) + (1  * (2 ^ 16)) +  (1 * (2 ^ 8)) +  1 = 838,926,593

838,926,593 - 838,860,800 = 65,793


* Algorithm *

- Define constant 'OCTET_MULTIPLIER' to an array
  - Index 0 contains value 2 ^ 24
  - Index 1 contains value 2 ^ 16
  - Index 2 contains value 2 ^ 8
  - Index 3 contains value 1
- Declare and initialize an empty array 'startAddress'
- Declare and initialize an empty array 'endAddress'
- Declare an integer number variable 'numOfAddresses' and initialize it to 0
- Separate the given start IP address into its 4 octet components and assign each octet to a separate index within 'startAddress'
- Separate the given end IP address into its 4 octet components and assign each octet to a separate index within 'endAddress'
- For each index of 'startAddress'
  - Coerce the value of each element at the current indexes in 'startAddress' and 'endAddress' to numbers
  - Subtract the value in the corresponding index of 'startAddress' from the value at the same index in 'endAddress'
  - Multiply the difference by the octet multiplier based on which octet we are currently calculating
  - Add the result to 'numOfAddresses'
- Return 'numOfAddresses'

*/

function ipsBetween(start, end) {
  const OCTET_MULTIPLIER = [ 2 ** 24, 2 ** 16, 2 ** 8, 1 ];
  
  let startAddress = [];
  let endAddress = []
  let numOfAddresses = 0;

  startAddress = start.split('.');
  endAddress = end.split('.');

  startAddress.forEach((octet, idx) => {
    numOfAddresses += (Number(endAddress[idx]) - Number(octet)) * OCTET_MULTIPLIER[idx];
  });

  return numOfAddresses;
}

console.log(ipsBetween("150.0.0.0", "150.0.0.1")) // 1));
console.log(ipsBetween("10.0.0.0", "10.0.0.50")) // 50));
console.log(ipsBetween("20.0.0.10", "20.0.1.0")) // 246));
console.log(ipsBetween("10.11.12.13", "10.11.13.0")) // 243));
console.log(ipsBetween("160.0.0.0", "160.0.1.0")) // 256));
console.log(ipsBetween("170.0.0.0", "170.1.0.0")) // 65536));
console.log(ipsBetween("50.0.0.0", "50.1.1.1")) // 65793));
console.log(ipsBetween("180.0.0.0", "181.0.0.0")) // 16777216));
console.log(ipsBetween("1.2.3.4", "5.6.7.8")) // 67372036));
console.log(ipsBetween("0.0.0.0", "255.255.255.255")) // 2 ** 32 - 1));