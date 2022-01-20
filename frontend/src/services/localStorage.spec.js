import { setItem, getItem } from './localStorage'

describe('setItem', () => {
  it('Should save key and value in localStorage', () => {
    const key = 'keyString'
    const value = 'string'
    setItem(key, value)
    expect(localStorage.getItem(key)).toBe(value)
  })

  it('Should apply JSON.stringfy value when its type is an object', () => {
    const key = 'keyObject'
    const value = { items: [0, 1, 2] }
    setItem(key, value)
    expect(localStorage.getItem(key)).toBe(JSON.stringify(value))
  })
})

describe('getItem', () => {

  it('Should get value from the key', () => {
    const key = 'keyString'
    const value = 'string'
    localStorage.setItem(key, value)
    expect(getItem(key)).toBe(value)
  })

  it('Should apply JSON.parse value when its type is a Json', () => {
    const key = 'keyObject'
    const value = { items: [0, 1, 2] }
    localStorage.setItem(key, JSON.stringify(value))
    expect(getItem(key)).toMatchObject(value)
  })
})
