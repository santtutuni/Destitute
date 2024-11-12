import toNumber from '../src/toNumber'; // Adjust the path to where your toNumber function is located.

describe('toNumber', () => {
  test('should return the number itself when input is a number', () => {
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(0)).toBe(0);
    expect(toNumber(-5)).toBe(-5);
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  test('should convert numeric strings to numbers', () => {
    expect(toNumber('3.2')).toBe(3.2);
    expect(toNumber('0')).toBe(0);
    expect(toNumber('-5')).toBe(-5);
    expect(toNumber('  42  ')).toBe(42); // with leading/trailing whitespace
  });

  test('should return NaN for symbols', () => {
    const symbol = Symbol('test');
    expect(toNumber(symbol)).toBeNaN();
  });

  test('should handle objects properly', () => {
    const objWithValueOf = { valueOf: () => 5 };
    expect(toNumber(objWithValueOf)).toBe(5);
    
    const objWithToString = { toString: () => '3.5' };
    expect(toNumber(objWithToString)).toBe(3.5);

    const complexObject = { valueOf: () => ({ toString: () => '10' }) };
    expect(toNumber(complexObject)).toBe(10);
    
    const nestedObject = { valueOf: () => ({}) };
    expect(toNumber(nestedObject)).toBeNaN(); // Object that doesn't convert to a number
  });

  test('should parse hexadecimal, binary, and octal strings', () => {
    expect(toNumber('0x1A')).toBe(26); // Hexadecimal
    expect(toNumber('0b1101')).toBe(13); // Binary
    expect(toNumber('0o755')).toBe(493); // Octal
  });

  test('should return NaN for invalid hex strings', () => {
    expect(toNumber('-0x1G')).toBeNaN(); // Invalid hexadecimal
    expect(toNumber('0x')).toBeNaN(); // Incomplete hex
  });

  test('should return NaN for non-convertible strings', () => {
    expect(toNumber('Hello')).toBeNaN();
    expect(toNumber('')).toBeNaN(); // Empty string
  });

  test('should return NaN for empty plain object', () => {
    const plainObject = {};
    expect(toNumber(plainObject)).toBeNaN();
  });

  test('should handle binary, octal, and hex with whitespace', () => {
    expect(toNumber('  0b1101  ')).toBe(13);  // Binary with whitespace
    expect(toNumber('  0o755  ')).toBe(493);  // Octal with whitespace
    expect(toNumber('  0x1A  ')).toBe(26);    // Hexadecimal with whitespace
  });

  test('should return NaN for invalid binary, octal, and hex strings', () => {
    expect(toNumber('0b1201')).toBeNaN();  // Invalid binary
    expect(toNumber('0o758')).toBeNaN();   // Invalid octal
    expect(toNumber('0x1G')).toBeNaN();    // Invalid hexadecimal
    expect(toNumber('0xZZ')).toBeNaN();    // Invalid hexadecimal
  });

  test('should return NaN for non-numeric, non-object, and non-string inputs', () => {
    expect(toNumber(null)).toBeNaN();
    expect(toNumber(undefined)).toBeNaN();
    expect(toNumber(NaN)).toBeNaN();
  });
  
  test('should return NaN for a function input', () => {
    const fn = () => {};
    expect(toNumber(fn)).toBeNaN();
  });
});

describe('toNumber - testing object conversion logic', () => {
  test('should convert object with numeric valueOf to its number', () => {
    const objWithValueOf = { valueOf: () => 42 };
    expect(toNumber(objWithValueOf)).toBe(42);
  });

  test('should convert object with string toString to a number', () => {
    const objWithToString = { toString: () => '3.5' };
    expect(toNumber(objWithToString)).toBe(3.5);
  });

  test('should return NaN for objects that cannot convert to number', () => {
    const nonConvertibleObject = { foo: 'bar' };
    expect(toNumber(nonConvertibleObject)).toBeNaN();
  });

  test('should return NaN for functions', () => {
    const fn = () => {};
    expect(toNumber(fn)).toBeNaN();
  });

  test('should handle objects with nested valueOf returning non-primitive', () => {
    const complexObject = { valueOf: () => ({ toString: () => '10' }) };
    expect(toNumber(complexObject)).toBe(10);
  });

  test('should handle objects with valueOf returning another object without toString', () => {
    const nestedObject = { valueOf: () => ({}) };
    expect(toNumber(nestedObject)).toBeNaN(); // Non-convertible nested object
  });
});