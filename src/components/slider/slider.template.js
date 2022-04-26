import {
  defineContentType,
  stylesToString
} from '@core/utils'
import { Z_SPACING_SLIDES } from '@/constants'

function createFrame(content, { spacingSummary }) {
  const transformZ = spacingSummary * Z_SPACING_SLIDES

  const styles =
    stylesToString({
      transform: `translateZ(${transformZ}px)`
    })

  return `
    <div
      class="frame"
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
    <h2>beautiful world</h2>
  `
}

function toVideo({ options }) {
  return `
    <video
      class="frame-media frame-media_right"
      src="/media/video_optimized.mp4"
      autoplay
      loop
      muted
    ></video>
  `
}

function toMusic({ options }) {
  return ``
}

function toImage({ options }) {
  return `
    <div
      class="frame-media frame-media_right"
      style="background-image: url(/images/5.jpg);"
    ></div>
  `
}

function createTemplate(createFrame) {
  return function(slide, index, array) {
    const { file, options } = slide.data
    const type = defineContentType(file)

    let spacingSummary = 0
    for (let i = 0; i <= index; i++) {
      spacingSummary += array[i].data.zSpacing
    }


    let template
    switch (type) {
      case 'string':
        template = toText('html')
        break
      case 'audio':
        template = toMusic({ options })
        break
      case 'video':
        template = toVideo({ options })
        break
      case 'image':
        template = toImage({ options })
        break
      default:
        template = toText({})
        break
    }

    return createFrame(template, {spacingSummary})
  }
}

export function sliderTemplate(arrayWithSlideOptions = []) {
  return arrayWithSlideOptions
      .map(createTemplate(createFrame))
      .join('')
}
