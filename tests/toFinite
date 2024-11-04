// tests/toFinite.test.js
import toFinite from '../src/toFinite'; // Adjust the import path to match your structure

describe('toFinite', () => {
  test('should convert finite numbers correctly', () => {
    expect(toFinite(3.2)).toBe(3.2);
    expect(toFinite(-3.2)).toBe(-3.2);
    expect(toFinite(0)).toBe(0);
  });

  test('should convert strings to finite numbers', () => {
    expect(toFinite('3.2')).toBe(3.2);
    expect(toFinite('-3.2')).toBe(-3.2);
    expect(toFinite('0')).toBe(0);
  });

  test('should handle numeric edge cases', () => {
    expect(toFinite(Number.MIN_VALUE)).toBe(5e-324);
    expect(toFinite(Infinity)).toBe(1.7976931348623157e+308);
    expect(toFinite(-Infinity)).toBe(-1.7976931348623157e+308);
  });

  test('should handle non-finite and invalid values', () => {
    expect(toFinite(NaN)).toBe(0);
    expect(toFinite(undefined)).toBe(0);
    expect(toFinite(null)).toBe(0);
    expect(toFinite('abc')).toBe(0);
    expect(toFinite('')).toBe(0);
  });

  test('should return 0 for falsey values except for 0', () => {
    expect(toFinite(false)).toBe(0);
    expect(toFinite(true)).toBe(0);
    expect(toFinite(0)).toBe(0);
  });

  test('should convert large finite numbers correctly', () => {
    expect(toFinite(1.7976931348623157e+308)).toBe(1.7976931348623157e+308);
    expect(toFinite(1e+400)).toBe(1.7976931348623157e+308);
  });
});
