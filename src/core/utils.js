import { Z_SPACING_SLIDES } from '@/constants'

export function defineContentType(content) {
  if (typeof content === 'string') {
    return 'string'
  }

  const typeList = [
    'audio',
    'video',
    'image'
  ]

  const type = content.srcElement.files.type.split('/')[0]
  if (typeList.includes(type)) {
    return type
  }
  return 'string'
}


export function camelToDachCase(str) {
  return str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)
}

export function stylesToString(stylesObject) {
  return Object.keys(stylesObject)
      .map(key => `${camelToDachCase(key)}: ${stylesObject[key]}`)
      .join(';')
}

export function debounce(callback, wait) {
  let timeout

  return function(...args) {
    const later = () => {
      clearInterval(timeout)
      // eslint-disable-next-line no-invalid-this
      callback.apply(this, args)
    }
    clearInterval(timeout)
    timeout = setInterval(later, wait)
  }
}

export function throttle(func, ms) {
  let locked = false

  return function(...args) {
    if (locked) return

    locked = true

    setTimeout(() => {
      // eslint-disable-next-line no-invalid-this
      func.apply(this, args)
      locked = false
    }, ms)
  }
}

export function sliderHidingFactor(zSpacing) {
  return zSpacing > Math.abs(Z_SPACING_SLIDES) / 1.6 ?
  false :
  true
}
