


export const numberArray = [1, 2, 3, 4, 5];
numberArray.push(6);

// Always avoid mutating the original array or mutating code.
const numberArray2 = [...numberArray]
numberArray2.push(7);


console.log({numberArray});
console.log({numberArray2});