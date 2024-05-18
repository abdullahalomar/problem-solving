// Task Number: 1
// Write A Function That Takes An Array Of Numbers And Returns The Maximum Value.

function findMaximumValues(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }

  let maximumValue = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maximumValue) {
      maximumValue = numbers[i];
    }
  }
  return maximumValue;
}

// Example usage
const Numbers = [3, 5, 7, 2, 8, -1, 4, 10, 12];
const maxValue = findMaximumValues(Numbers);
console.log(maxValue);

// Task Number: 2
// Write A Function That Counts The Number Of Vowels In A Given String.
// Example: Happy New Year

function countVowelsNumbers(str) {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;
  for (let character of str) {
    if (vowels.includes(character)) {
      vowelCount++;
    }
  }
  return vowelCount;
}

const texExample = "Happy New Year";
const numOfVowels = countVowelsNumbers(texExample);
console.log(`The number of vowels is: ${numOfVowels}`);

// Task Number: 3
// Write A Function That Determines Whether A Given Year Is A Leap Year.

function LeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 !== 0) {
      return false;
    }
    return true;
  }
  return false;
}

const year = 2025;
if (LeapYear(year)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}

// Task Number: 4
// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const actress = [
  { name: "Shakib Khan", age: 36, gender: "male" },
  { name: "Shabnur", age: 40, gender: "female" },
  { name: "Purnima", age: 43, gender: "female" },
  { name: "Riaz", age: 45, gender: "male" },
  { name: "Popi", age: 44, gender: "female" },
  { name: "Dipjol", age: 50, gender: "male" },
];

function filterAndMapNames(actressArray) {
  // Map to an array of names
  const males = actressArray.filter((person) => person.gender !== "female");
  const names = males.map((person) => person.name);
  return names;
}

const filteredNames = filterAndMapNames(actress);

console.log(filteredNames);
