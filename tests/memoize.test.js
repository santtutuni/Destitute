import memoize from '../src/memoize.js';

describe('memoize', () => {
  const add = (a, b) => a + b;
  const memoizedAdd = memoize(add);

  test('should return the correct result for a new set of arguments', () => {
    expect(memoizedAdd(1, 2)).toBe(3);
  });

  test('should return the cached result for the same arguments', () => {
    memoizedAdd(1, 2); 
    expect(memoizedAdd(1, 2)).toBe(3); 

  test('should return correct result for different arguments', () => {
    expect(memoizedAdd(2, 3)).toBe(5); 
    expect(memoizedAdd(2, 3)).toBe(5); 
  });

  test('should handle custom resolver function', () => {
    const customResolver = (a, b) => a; 
    const memoizedWithResolver = memoize(add, customResolver);
    
    expect(memoizedWithResolver(1, 2)).toBe(3); 
    expect(memoizedWithResolver(1, 3)).toBe(3);
    expect(memoizedWithResolver(2, 2)).toBe(4); 
  });

  test('should throw a TypeError when the first argument is not a function', () => {
    expect(() => memoize(null)).toThrow(TypeError);
    expect(() => memoize(123)).toThrow(TypeError);
    expect(() => memoize({})).toThrow(TypeError);
  });

  test('should throw a TypeError when the resolver is not a function', () => {
    expect(() => memoize(add, null)).toThrow(TypeError);
    expect(() => memoize(add, 123)).toThrow(TypeError);
    expect(() => memoize(add, {})).toThrow(TypeError);
  });

  test('should expose the cache property', () => {
    expect(memoizedAdd.cache).toBeInstanceOf(Map);
    expect(memoizedAdd.cache.has(1)).toBe(false); 
    memoizedAdd(1, 2); 
    expect(memoizedAdd.cache.has(1)).toBe(true); 

  test('should allow manual modification of the cache', () => {
    memoizedAdd(1, 2); 
    memoizedAdd.cache.set(1, 'cached value'); 
    expect(memoizedAdd(1, 2)).toBe('cached value'); 
});
