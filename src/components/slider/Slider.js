import {$} from '@core/Dom'
import {throttle} from '@core/utils'
import {sliderMovevent} from '@/components/slider/slider.functions.js'
import {Slide} from '@/components/slide/Slide.js'

export class Slider {
  constructor(options) {
    this.slidersData = options.slidersData || []
  }

  getRoot() {
    this.$root = $.create('div', 'gallery')
    let spacingSummary = 0

    this.slidersData.forEach(slideData => {
      spacingSummary += slideData.styles['zSpacing'] || 1

      const slide = new Slide({
        ...slideData,
        styles: {
          ...slideData.styles,
          zSpacing: spacingSummary
        }
      })

      this.$root.html(slide.toHTML())
    })


    return this.$root
  }

  init() {
    this.frames = Array.from(this.$root.findAll('[data-frame]'))
        .map(slide => $(slide))

    this.movementListener = throttle(() => {
      sliderMovevent(this.frames)
    }, 70)

    window.addEventListener('scroll', this.movementListener)
  }

  destroy() {
    window.removeEventListener('scroll', this.movementListener)
  }
}
