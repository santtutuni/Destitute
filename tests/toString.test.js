// ../src/__tests__/toString.test.js
import toString from '../src/toString'
import isSymbol from '../src/isSymbol'

describe('toString', () => {
  test('converts string input to itself', () => {
    expect(toString('hello')).toBe('hello')
  })

  test('converts null and undefined to an empty string', () => {
    expect(toString(null)).toBe('')
    expect(toString(undefined)).toBe('')
  })

  test('preserves the sign of -0', () => {
    expect(toString(-0)).toBe('-0')
    expect(toString(0)).toBe('0')
  })

  test('converts array values to a comma-separated string', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3')
    expect(toString([null, undefined, 3])).toBe(',,3')
    expect(toString([1, [2, 3], 4])).toBe('1,2,3,4') // Nested array check
  })

  test('converts symbols using their description', () => {
    const symbol = Symbol('test')
    // Directly check if the value is a symbol instead of mocking isSymbol
    expect(toString(symbol)).toBe('Symbol(test)')
  })

  test('converts numbers to strings', () => {
    expect(toString(42)).toBe('42')
    expect(toString(-5.6)).toBe('-5.6')
    expect(toString(Number.MAX_VALUE)).toBe('1.7976931348623157e+308')
  })

  test('converts objects to "[object Object]"', () => {
    expect(toString({ a: 1 })).toBe('[object Object]')
    expect(toString({})).toBe('[object Object]')
  })

  test('converts booleans to strings', () => {
    expect(toString(true)).toBe('true')
    expect(toString(false)).toBe('false')
  })
})
