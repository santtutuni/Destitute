import filter from '../src/filter';

describe('filter', () => {
  test('should filter elements based on the predicate', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true },
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([
      { user: 'barney', active: true },
      { user: 'pebbles', active: true },
    ]);
  });

  test('should return an empty array if no elements match', () => {
    const users = [
      { user: 'barney', active: false },
      { user: 'fred', active: false },
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([]);
  });

  test('should handle an empty array', () => {
    const result = filter([], ({ active }) => active);
    expect(result).toEqual([]);
  });

  test('should work with different data types', () => {
    const mixedArray = [1, '2', 3, '4', true, false, null, undefined];
    const result = filter(mixedArray, (value) => typeof value === 'number');
    expect(result).toEqual([1, 3]);
  });

  test('should return a new array and not mutate the original array', () => {
    const original = [1, 2, 3];
    const result = filter(original, (n) => n > 1);
    expect(result).toEqual([2, 3]);
    expect(original).toEqual([1, 2, 3]);
  });

  test('should work with predicates that return true for all elements', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = filter(numbers, () => true);
    expect(result).toEqual(numbers);
  });

  test('should work with predicates that return false for all elements', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = filter(numbers, () => false);
    expect(result).toEqual([]);
  });
});
