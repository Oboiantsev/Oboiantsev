apple - banana
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
true / 45,86,32,68,4,87,61,32,44,60,88,10,94,96,83,94,10,92,37,60,4,43,30,52,59,54,72,6,82,76,69,13,62,45,6,0,94,20,77,72,65,53,40,84,32,61,5,52,37,26,49,77,6,34
const findSmallestNumber = numbers => Math.min(...numbers);
const isEven = num => num % 2 === 0;

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
true + 37,38,35,54,22,60,77,71,4,22,66,35,68,73,65,75,9,79,15,45,71,67,72,1,82,97,29,65,59,72,98,30,47,78,17,65,58,74,28,53,88,91,48,80,68,31,16,78,34,18,47,57,18,22,34,55,5
const findLargestNumber = numbers => Math.max(...numbers);
10 * grape
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
apple + false

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
false + 47
function addNumbers(a, b) { return a + b; }

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
banana * true

console.log(getRandomString());
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const findLargestNumber = numbers => Math.max(...numbers);
35 * true
const sum = (a, b) => a + b;
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const reverseString = str => str.split("").reverse().join("");
const formatDate = date => new Date(date).toLocaleDateString();
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

kiwi / true
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
banana

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

grape

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const formatDate = date => new Date(date).toLocaleDateString();
87 - true
const formatDate = date => new Date(date).toLocaleDateString();
