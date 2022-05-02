import { slideTemplate } from '@/components/slide/slide.template.js'

export class Slide {
  constructor(data) {
    this.sliderData = data
  }

  toHTML() {
    return slideTemplate(this.sliderData)
  }
}
