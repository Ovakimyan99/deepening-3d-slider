import { sliderHidingFactor } from '@core/utils'
const scrollTop = () => Math.floor(document.documentElement.scrollTop)

let lastPos = scrollTop()
let activeIndex = 0

export function sliderMovevent(frames, options = {}) {
  const { speed = -2, confines = 5 } = options
  const top = scrollTop()
  const delta = lastPos - top

  lastPos = top

  // настраиваем отображаемые слайды с актуальными значениями
  for (let index = 0, length = frames.length; index < length; index++) {
    const frame = frames[index]

    frame.attr('data-zspace',
        +frame.attr('data-zspace') + delta * speed
    )

    const frameSpacing = +frame.attr('data-zspace')

    frame.css({
      transform: `translateZ(${frameSpacing}px)`,
      opacity: sliderHidingFactor(frameSpacing) ? 1 : 0,
      display: index >= activeIndex - 1 &&
      index <= activeIndex + confines - 2
          ?
          'flex' :
          'none'
    })
  }

  // определяем активный слайд - текущий
  for (let index = 0, length = frames.length; index < length; index++) {
    const frameSpacing = +frames[index].attr('data-zspace')

    if (sliderHidingFactor(frameSpacing)) {
      activeIndex = index
      return
    }
  }
}
