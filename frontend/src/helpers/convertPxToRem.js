export const convertPxToRem = (px) => {
  return `${(px || 0) / 16}rem`
}
