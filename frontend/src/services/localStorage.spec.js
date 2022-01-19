import { setItem, getItem } from './localStorage'

describe('setItem', () => {
  it('Should save passed value on the passed key on localStorage', () => {
    setItem('keyString', 'string')
    expect(localStorage.getItem('keyString')).toBe('string')
  })

  it('Should stringfy value when its type is an object', () => {
    const obj = { items: [0, 1, 2] }
    setItem('keyObject', obj)
    expect(localStorage.getItem('keyObject')).toBe(JSON.stringify(obj))
  })
})

describe('getItem', () => {

  it('Should get value from the key', () => {
    setItem('keyString', 'string')
    expect(getItem('keyString')).toBe('string')
  })

  it('Should get parsed value when its type is a Json string', () => {
    const obj = { items: [0, 1, 2] }
    setItem('keyObject', obj)
    expect(getItem('keyObject')).toMatchObject(obj)
  })
})
