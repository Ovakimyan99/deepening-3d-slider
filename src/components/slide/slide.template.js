import {
  defineContentType,
  stylesToString } from '@core/utils'
import {
  Z_SPACING_SLIDES } from '@/constants'

function generateTemplate(fileType, data) {
  const { options } = data

  switch (fileType) {
    case 'string':
      return toText('html')
    case 'audio':
      return toMusic({ options })
    case 'video':
      return toVideo({ options })
    case 'image':
      return toImage({ options })
    default:
      return toText({ options })
  }
}

function createFrame(content, { styles: frameStyles }) {
  const { position, background, zSpacing } = frameStyles
  const transformZ = zSpacing * Z_SPACING_SLIDES

  const stylesParams = {
    transform: `translateZ(${transformZ}px)`
  }

  if (background) {
    stylesParams['background-color'] = background
  }

  const styles = stylesToString(stylesParams)

  return `
    <div
      class="frame ${position}"
      style="${styles}"
      data-zspace="${transformZ}"
      data-frame
    >
      <div class="frame__content">
        ${content}
      </div>
    </div>
  `
}

function toText(html) {
  return `
    <h2>${html || 'beautiful world'}</h2>
  `
}

function toVideo() {
  return `
    <video
      class="frame-media frame-media_right"
      src=""
      autoplay
      loop
      muted
    ></video>
  `
}

function toMusic() {
  return ``
}

function toImage() {
  return `
    <div
      class="frame-media frame-media_right"
      style="background-image: url();"
    ></div>
  `
}

function createTemplate(createFrame, slide) {
  const { file, options = {} } = slide.data

  const type = defineContentType(file)
  const template = generateTemplate(type, { options, file })

  return createFrame(template, { styles: slide.styles })
}

export function slideTemplate(slideOptions = {}) {
  return createTemplate(createFrame, slideOptions)
}
