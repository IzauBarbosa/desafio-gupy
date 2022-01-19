import { convertPxToRem } from './convertPxToRem'

describe('Should convert values from PX to REM', () => {
  it('Should return value at rem', () => {
    expect(convertPxToRem(16)).toBe('1rem')
  })

  it('Should return 1rem to arguments type of string', () => {
    expect(convertPxToRem('10px')).toBe('1rem')
  })
})
