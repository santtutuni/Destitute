import words from '../src/words';

describe('words', () => {
  test('should split a string into words using default behavior', () => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  });

  test('should return an empty array for an empty string', () => {
    expect(words('')).toEqual([]);
  });

  test('should handle strings with only delimiters', () => {
    expect(words(',,,')).toEqual([]);
    expect(words('   ')).toEqual([]);
  });

  test('should split words with different delimiters using a custom pattern', () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
  });

  test('should handle strings with Unicode words', () => {
    const unicodeString = 'Café, résumé, naïve, jalapeño';
    expect(words(unicodeString)).toEqual(['Café', 'résumé', 'naïve', 'jalapeño']);
  });

  test('should handle mixed strings with ASCII and Unicode', () => {
    const mixedString = 'hello, Café, world!';
    expect(words(mixedString)).toEqual(['hello', 'Café', 'world']);
  });

  test('should return words matching a specific regex pattern', () => {
    expect(words('one two three 123', /\S+/g)).toEqual(['one', 'two', 'three', '123']);
  });

  test('should return an empty array when no matches are found with the pattern', () => {
    expect(words('abc', /[0-9]+/g)).toEqual([]); // No numeric matches
  });

  test('should handle strings with numbers and symbols', () => {
    expect(words('hello 123 world!')).toEqual(['hello', '123', 'world']);
  });

  test('should return words when using a regex pattern', () => {
    expect(words('cat, dog; fish', /[^,; ]+/g)).toEqual(['cat', 'dog', 'fish']);
  });
});
