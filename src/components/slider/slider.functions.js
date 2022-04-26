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
  for (let index = 0; index < frames.length; index++) {
    const frame = frames[index]

    frame.setAttribute('data-zspace',
        +frame.getAttribute('data-zspace') + delta * speed
    )

    const frameSpacing = +frame.getAttribute('data-zspace')

    const translateZ = `translateZ(${frameSpacing}px)`
    const opacity = sliderHidingFactor(frameSpacing) ? 1 : 0

    const display =
        index >= activeIndex - 1 &&
        index <= activeIndex + confines - 2
        ?
        'flex' :
        'none'

    frame.setAttribute('style',
        `transform: ${translateZ};opacity: ${opacity};display: ${display};`
    )
  }

  // определяем активный слайд - текущий
  for (let index = 0; index < frames.length; index++) {
    const frameSpacing = +frames[index].getAttribute('data-zspace')

    if (sliderHidingFactor(frameSpacing)) {
      activeIndex = index
      // console.log('activeIndex: ', activeIndex)
      return
    }
  }
}
