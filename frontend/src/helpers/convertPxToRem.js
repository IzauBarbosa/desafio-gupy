export const convertPxToRem = (px) => {
  if (isNaN(px)) {
    throw new Error('invalid parameter type. Should be string')
  }

  return `${(px || 0) / 16}rem`
}
