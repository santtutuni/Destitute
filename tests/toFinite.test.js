// toFinite.test.js
import toFinite from './toFinite'

describe('toFinite', () => {
  test('converts a finite number correctly', () => {
    expect(toFinite(3.2)).toBe(3.2)
    expect(toFinite(0)).toBe(0)
    expect(toFinite(-10)).toBe(-10)
  })

  test('handles string numbers', () => {
    expect(toFinite('3.2')).toBe(3.2)
    expect(toFinite('-10')).toBe(-10)
  })

  test('converts non-numeric strings to 0', () => {
    expect(toFinite('abc')).toBe(0)
    expect(toFinite('')).toBe(0)
  })

  test('handles Infinity and -Infinity', () => {
    expect(toFinite(Infinity)).toBe(1.7976931348623157e+308)
    expect(toFinite(-Infinity)).toBe(-1.7976931348623157e+308)
  })

  test('returns 0 for NaN and undefined', () => {
    expect(toFinite(NaN)).toBe(0)
    expect(toFinite(undefined)).toBe(0)
  })

  test('returns smallest positive number for Number.MIN_VALUE', () => {
    expect(toFinite(Number.MIN_VALUE)).toBe(5e-324)
  })

  test('returns 0 for null', () => {
    expect(toFinite(null)).toBe(0)
  })

  test('handles boolean values correctly', () => {
    expect(toFinite(true)).toBe(1)
    expect(toFinite(false)).toBe(0)
  })
})

