import capitalize from '../src/capitalize';

describe('capitalize', () => {
  test('should capitalize the first character and lower the rest', () => {
    expect(capitalize('FRED')).toBe('Fred');
    expect(capitalize('frED')).toBe('Fred');
    expect(capitalize('fRED')).toBe('Fred');
    expect(capitalize('FrEd')).toBe('Fred');
  });

  test('should handle an already capitalized string', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  test('should handle an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('should handle strings with leading whitespace', () => {
    expect(capitalize('  hello')).toBe('  hello');
  });

  test('should handle strings with only whitespace', () => {
    expect(capitalize('   ')).toBe('   ');
  });

  test('should handle numeric strings', () => {
    expect(capitalize('123abc')).toBe('123abc');
    expect(capitalize('1hello')).toBe('1hello');
  });

  test('should convert special characters', () => {
    expect(capitalize('!hello')).toBe('!hello');
    expect(capitalize('@world')).toBe('@world');
  });

  test('should return the same string for single character strings', () => {
    expect(capitalize('h')).toBe('H');
    expect(capitalize('H')).toBe('H');
    expect(capitalize('1')).toBe('1');
    expect(capitalize('!')).toBe('!');
  });

  test('should convert mixed case strings', () => {
    expect(capitalize('mIXed')).toBe('Mixed');
  });
});
