import isEmpty from '../src/isEmpty';

describe('isEmpty', () => {
  test('should return true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  test('should return true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  test('should return true for boolean values', () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
  });

  test('should return true for numbers', () => {
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty(-1)).toBe(true);
  });

  test('should return false for non-empty arrays', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty(['a', 'b', 'c'])).toBe(false);
  });

  test('should return false for non-empty strings', () => {
    expect(isEmpty('')).toBe(false);
    expect(isEmpty('abc')).toBe(false);
  });

  test('should return false for non-empty objects', () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty({ a: 1, b: 2 })).toBe(false);
  });

  test('should return false for non-empty maps', () => {
    const map = new Map();
    expect(isEmpty(map)).toBe(true);
    map.set('key', 'value');
    expect(isEmpty(map)).toBe(false);
  });

  test('should return false for non-empty sets', () => {
    const set = new Set();
    expect(isEmpty(set)).toBe(true);
    set.add('value');
    expect(isEmpty(set)).toBe(false);
  });

  test('should return true for empty arguments', () => {
    (function() {
      expect(isEmpty(arguments)).toBe(true);
    })();
  });

  test('should return false for non-empty typed arrays', () => {
    const typedArray = new Uint8Array([1, 2, 3]);
    expect(isEmpty(typedArray)).toBe(false);
  });

  test('should return true for empty buffer', () => {
    const buffer = Buffer.from([]);
    expect(isEmpty(buffer)).toBe(true);
  });
});

test('should return true for Object.prototype', () => {
  expect(isEmpty(Object.prototype)).toBe(true);
});

test('should return true for Object.prototype', () => {
  expect(isEmpty(Object.prototype)).toBe(true);
});

test('should return false for objects with enumerable own properties', () => {
  const objWithOneProp = { a: 1 };
  const objWithMultipleProps = { a: 1, b: 2, c: 3 };
  
  expect(isEmpty(objWithOneProp)).toBe(false);
  expect(isEmpty(objWithMultipleProps)).toBe(false);
});

test('should return false for an object with an own property, no prototype', () => {
  const obj = Object.create(null);
  obj.a = 1;
  expect(isEmpty(obj)).toBe(false);
});

test('should return true for an empty plain object', () => {
  const obj = {};
  expect(isEmpty(obj)).toBe(true);
});
