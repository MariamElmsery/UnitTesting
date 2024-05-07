const functions = require("./functions");

test("multiplies", () => {
  expect(functions.multiply(3, 4)).toBe(12);
});

test("divides", () => {
  expect(functions.divide(6, 2)).toBe(3);
});

test("throws error when dividing by zero", () => {
  expect(() => {
    functions.divide(6, 0);
  }).toThrow();
});

test('sortArray', () => {
    expect(functions.sortArray([3, 1, 2])).toEqual([1, 2, 3]);
});

test('findMax', () => {
    expect(functions.findMax([3, 1, 5, 2])).toBe(5); 
    expect(functions.findMax([])).toBe(null); 
    expect(functions.findMax([-10, -5, -20])).toBe(-5); 
});
test('finds the minimum number in an array', () => {
    expect(functions.findMinNumber([3, 1, 4, 2])).toBe(1);
    expect(functions.findMinNumber([-3, -1, -4, -2])).toBe(-4);
   
  });
  

test("power of 3", () => {
  expect(functions.power(2, 3)).toBe(8);
});

test("square root", () => {
  expect(functions.squareRoot(16)).toBe(4);
});

test("throws an error for square root of a negative number", () => {
  expect(() => {
    functions.squareRoot(-16);
  }).toThrow();
});

test("factorial of 3", () => {
  expect(functions.factorial(3)).toBe(6);
});

test("shuffles the array", () => {
  const spy = jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(0.5)
    .mockReturnValueOnce(0.7)
    .mockReturnValueOnce(0.3);
  const arr = [1, 2, 3, 4, 5];
  const result = shuffleArray(arr);
  const expected = [4, 2, 1, 5, 3];
  expect(result).toEqual(expected);
  expect(spy).toHaveBeenCalledTimes(3);
  spy.mockRestore();
});

