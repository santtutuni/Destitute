import toString from '../src/toString';
import isSymbol from '../src/isSymbol';

jest.mock('../src/isSymbol'); // Mock the isSymbol function

describe('toString', () => {
  test('should convert null to an empty string', () => {
    expect(toString(null)).toBe('');
  });

  test('should convert undefined to an empty string', () => {
    expect(toString(undefined)).toBe('');
  });

  test('should convert -0 to "-0"', () => {
    expect(toString(-0)).toBe('-0');
  });

  test('should convert 0 to "0"', () => {
    expect(toString(0)).toBe('0');
  });

  test('should convert finite numbers to strings', () => {
    expect(toString(3.2)).toBe('3.2');
    expect(toString(-3.2)).toBe('-3.2');
    expect(toString(123)).toBe('123');
  });

  test('should convert arrays to strings', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
    expect(toString([null, undefined, 'hello'])).toBe(',,hello');
  });

  test('should convert symbols to strings', () => {
    const symbol = Symbol('test');
    isSymbol.mockReturnValue(true);
    expect(toString(symbol)).toBe('Symbol(test)');
    isSymbol.mockReturnValue(false); // Reset mock
  });

  test('should convert objects to strings', () => {
    const obj = { a: 1, b: 2 };
    expect(toString(obj)).toBe('[object Object]');
  });

  test('should convert boolean values to strings', () => {
    expect(toString(true)).toBe('true');
    expect(toString(false)).toBe('false');
  });

  test('should convert special numbers to strings', () => {
    expect(toString(Infinity)).toBe('Infinity');
    expect(toString(-Infinity)).toBe('-Infinity');
    expect(toString(NaN)).toBe('NaN');
  });
});
