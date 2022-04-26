import { $ } from '@core/Dom'
import { sliderTemplate } from '@/components/slider/slider.template.js'
import { sliderMovevent } from '@/components/slider/slider.functions.js'

export class Slider {
  constructor(options) {
    this.frames = []
    this.slidersData = options.slidersData || []
  }

  toHTML() {
    return sliderTemplate(this.slidersData)
  }

  getRoot() {
    const $root = $.create('div', 'gallery')
    $root.html(this.toHTML())

    return $root
  }

  init() {
    this.frames = Array.from(document.querySelectorAll('[data-frame]'))
    window.addEventListener('scroll', () => sliderMovevent(this.frames))
  }
}
