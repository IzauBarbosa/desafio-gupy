export const convertPxToRem = (px) => {
  if (isNaN(px)) {
    return '1rem'
  }

  return `${(px || 0) / 16}rem`
}
