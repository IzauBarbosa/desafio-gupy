export const setItem = (key, value) => {
  if (typeof value === 'object') {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    localStorage.setItem(key, value)
  }
}

export const getItem = (key) => {
  const item = localStorage.getItem(key)

  try {
    return JSON.parse(item)
  } catch (error) {
    return item
  }
}
