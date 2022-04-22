import {
  defineContentType,
  stylesToString
} from '@core/utils'
import { Z_SPACING_SLIDES } from '@/constants'

function toText({ spacingSummary }) {
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
    >
      <div class="frame__content">
        <h2>beautiful world</h2>
      </div>
    </div>
  `
}

function toVideo({ options }) {
  return `
    <div class="frame">
      <div class="frame__content">
        <video
          class="frame-media frame-media_right"
          src="/media/video_optimized.mp4"
          autoplay
          loop
          muted
        ></video>
      </div>
    </div>
  `
}

function toMusic({ options }) {
  return ``
}

function toImage({ options }) {
  return `
    <div class="frame frame-bg">
      <div class="frame__content">
        <div
          class="frame-media frame-media_right"
          style="background-image: url(/images/5.jpg);"
        ></div>
      </div>
    </div>
  `
}

function createTemplate(slide, index, array) {
  debugger
  const { file } = slide.data
  const type = defineContentType(file)

  let spacingSummary = 0
  for (let i = 0; i <= index; i++) {
    spacingSummary += array[i].data.zSpacing
  }

  const options = {
    ...slide,
    index,
    spacingSummary
  }

  switch (type) {
    case 'string':
      return toText(options)
    case 'audio':
      return toMusic(options)
    case 'video':
      return toVideo(options)
    case 'image':
      return toImage(options)
  }
}

export function sliderTemplate(arrayWithSlideOptions = []) {
  return arrayWithSlideOptions
      .map(createTemplate)
      .join('')
}
