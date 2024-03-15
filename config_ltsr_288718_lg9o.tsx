apple


const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
banana

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
false - 60,91,17,83,80,56,31,64
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
true / 30
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
36 - 73

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

const formatDate = date => new Date(date).toLocaleDateString();
47,47,55,75,55,49,32,83,10,34,58,99,94,61,14,4,82,81,15,40,66,96,63,46,55,63,48,72,94,93,19,82,1,62,10,48,4,25,39,5,0,74,95,2,43,84,82,2,39,72,90,99,5,29,54,23,46,18,1,48,22,30,33,38,44,27,37,43,42,21,93,8,73,8,80,7,27,8,49,10,80,71,26,99,42,77 / 24
const getRandomSubset = (array, size) => array.slice(0, size);
