import at from '../src/at';

describe('at', () => {
  const object = { a: [{ b: { c: 3 } }, 4] };

  test('should retrieve values for valid paths', () => {
    expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual([3, 4]);
  });

  test('should return undefined for non-existent paths', () => {
    expect(at(object, ['a[0].b.d', 'a[1].x'])).toEqual([undefined, undefined]);
  });

  test('should handle paths with multiple elements', () => {
    expect(at(object, 'a[0].b.c', 'a[1]')).toEqual([3, 4]);
  });

  test('should handle an empty object', () => {
    const emptyObject = {};
    expect(at(emptyObject, 'a[0].b.c')).toEqual([undefined]);
  });

  test('should handle paths that do not exist', () => {
    const objectWithMissingPath = { x: 10 };
    expect(at(objectWithMissingPath, 'y.z')).toEqual([undefined]);
  });

  test('should work with nested arrays and objects', () => {
    const complexObject = {
      a: [{ b: { c: 3, d: [1, 2] } }, 4],
      e: [5, { f: 6 }]
    };
    expect(at(complexObject, 'a[0].b.c', 'e[1].f')).toEqual([3, 6]);
  });

  test('should return an empty array if no paths are provided', () => {
    expect(at(object)).toEqual([]);
  });

  test('should return an empty array if paths are empty', () => {
    expect(at(object, [])).toEqual([]);
  });
});
