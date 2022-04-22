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
