import { convertPxToRem } from './convertPxToRem'

describe('Should convert values from PX to REM', () => {
  it('Should convert PX value into rem', () => {
    expect(convertPxToRem(32)).toBe('2rem')
  })

  it('Should throw error when the type of the parameter is string', () => {
    expect(() => convertPxToRem('10px')).toThrow(
      'invalid parameter type. Should be string',
    )
  })
})
