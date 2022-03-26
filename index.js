const inputs = [
  { 2.9: 40, 3.1: 30 },
  [{ 2.9: 40 }],
  {},
  { 2.9: 40, null: 30 },
  { undefined: 40, 3.1: 30 },
  { 2.9: 40, "": 30 },
  { "2.9x": 40, 3.1: 30 },
  { 2.9: 40, "-3.1": 30 },
  { 2.9: null, 3.1: 30 },
  { 2.9: 40, 3.1: -30 },
  { 2.9: 71, 3.1: 30 },
];

function solution(input) {
  const minKey = 0;
  const maxKey = 5;

  const minValue = 0;
  const maxValue = 100;

  const maxPercentage = 100;

  if (Array.isArray(input)) {
    throw new Error("Not an object");
  }

  if (Object.keys(input).length === 0) {
    throw new Error("Object is empty");
  }

  for (const key of Object.keys(input)) {
    if (isNaN(parseInt(key))) {
      throw new Error("Some key is not a number");
    }

    const keyNum = parseFloat(key);

    if (keyNum < minKey || keyNum > maxKey) {
      throw new Error("Some key is out of range");
    }

    if (isNaN(parseInt(input[key])) || input[key] % 1) {
      throw new Error("Some value is not an integer");
    }

    const valueNum = parseInt(input[key]);

    if (valueNum <= minValue || valueNum > maxValue) {
      throw new Error("Some value is out of range");
    }
  }

  const accumulatedPercentage = Object.values(input).reduce(
    (prevValue, currValue) => prevValue + currValue,
    0
  );

  if (accumulatedPercentage > maxPercentage) {
    throw new Error("Total sum of percentage values exceeds the maximum");
  }

  const accumulatedNote = Object.keys(input).reduce(
    (prevValue, currValue) => prevValue + (currValue * input[currValue]) / 100,
    0
  );

  return { accumulatedPercentage, accumulatedNote };
}

for (const input of inputs) {
  console.log(solution(input));
}
