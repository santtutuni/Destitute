import add from './add';

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('adds a positive and a negative number', () => {
    expect(add(6, -4)).toBe(2);
  });

  test('adds two negative numbers', () => {
    expect(add(-3, -5)).toBe(-8);
  });

  test('adds zero to a number', () => {
    expect(add(7, 0)).toBe(7);
    expect(add(0, 7)).toBe(7);
  });

  test('adds non-numeric values (e.g., strings or undefined)', () => {
    // Assuming `createMathOperation` handles non-numeric values by returning a fallback, such as 0
    expect(add('5', 3)).toBe(8); // Handles numeric strings as numbers
    expect(add(5, '3')).toBe(8); // Handles numeric strings as numbers
    expect(add('a', 3)).toBe(3); // Non-numeric string falls back to 0
    expect(add(3, undefined)).toBe(3); // undefined falls back to 0
  });

  test('adds no arguments and returns fallback value', () => {
    expect(add()).toBe(0); // If both arguments are missing, the fallback is 0
  });
});
