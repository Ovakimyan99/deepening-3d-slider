import { $ } from '@core/Dom'
import { throttle } from '@core/utils'
import { sliderTemplate } from '@/components/slider/slider.template.js'
import { sliderMovevent } from '@/components/slider/slider.functions.js'

export class Slider {
  constructor(options) {
    this.slidersData = options.slidersData || []
    this.$root = null
  }

  toHTML() {
    return sliderTemplate(this.slidersData)
  }

  getRoot() {
    this.$root = $.create('div', 'gallery')
    this.$root.html(this.toHTML())

    return this.$root
  }

  init() {
    this.frames = Array.from(this.$root.findAll('[data-frame]'))


    const movementListener = throttle(() => {
      sliderMovevent(this.frames)
    }, 70)
    window.addEventListener('scroll', movementListener)
  }
}
