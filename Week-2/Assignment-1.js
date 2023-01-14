function max(numbers) {
  numbers.sort();
  return numbers[numbers.length - 1];
}

console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7
