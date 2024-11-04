// tests/upperFirst.test.js
import upperFirst from '../src/upperFirst.js';

describe('upperFirst', () => {
  test('should convert the first character to uppercase', () => {
    expect(upperFirst('fred')).toBe('Fred');
  });

  test('should not change the original string if it starts with an uppercase letter', () => {
    expect(upperFirst('FRED')).toBe('FRED');
  });

  test('should handle an empty string', () => {
    expect(upperFirst('')).toBe('');
  });

  test('should convert the first character of a string with leading whitespace', () => {
    expect(upperFirst(' hello')).toBe(' Hello');
  });

  test('should handle strings with only whitespace', () => {
    expect(upperFirst('   ')).toBe('   ');
  });

  test('should not modify non-alphabetic characters at the start', () => {
    expect(upperFirst('1hello')).toBe('1hello');
    expect(upperFirst('$hello')).toBe('$hello');
  });
});
