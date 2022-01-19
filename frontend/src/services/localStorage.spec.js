import { setItem, getItem } from './localStorage'

describe('Should setItem and getItem using localStorage', () => {
  it('Should key type of string', () => {
    expect(setItem('keyString', 'string')).toBe(true)
  })

  it('Should return the string from the key', () => {
    expect(getItem('keyString')).toBe('string')
  })

  it('Should value type of object', () => {
    expect(setItem('keyObject', { items: [0, 1, 2] })).toBe(true)
  })

  it('Should return the object from the key', () => {
    expect(getItem('keyObject')).toMatchObject({ items: [0, 1, 2] })
  })
})
