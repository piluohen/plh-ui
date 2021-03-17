export const highlight = (str, key) => {
  let val = str
  if (str.includes(key)) {
    val = str.split(key).join(`<span class="highlight">${key}</span>`)
  }
  return val
}

export const isDef = val => {
  return val !== undefined && val !== null
}

export const isNumeric = val => {
  return /^(\d|-\d)+(\.(\d|-\d)+)?$/.test(val)
}

export const addUnit = value => {
  if (!isDef(value)) {
    return undefined
  }

  value = String(value)
  return isNumeric(value) ? `${value}px` : value
}
