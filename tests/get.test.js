import get from '../src/get'; // Adjust the import path as necessary

describe('get', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] };

  test('should get the value at the specified path as a string', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  test('should get the value at the specified path as an array', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('should return default value if the path does not exist', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });

  test('should return default value if object is null', () => {
    expect(get(null, 'a[0].b.c', 'default')).toBe('default');
  });

  test('should return default value if object is undefined', () => {
    expect(get(undefined, 'a[0].b.c', 'default')).toBe('default');
  });

  test('should return default value if path is invalid', () => {
    expect(get(object, 'a[0].b.x', 'default')).toBe('default');
  });

  test('should return the default value when no arguments are passed', () => {
    expect(get({}, 'path', 'default')).toBe('default');
  });

  test('should return undefined when the default value is not provided', () => {
    expect(get(object, 'a[0].b.x')).toBeUndefined();
  });
});
