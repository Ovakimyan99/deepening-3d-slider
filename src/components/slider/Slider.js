import { sliderTemplate } from '@/components/slider/slider.template.js'

export class Slider {
  constructor(selector, options) {
    this.selector = selector
    // this.files = options.files
  }

  getRoot() {
    return sliderTemplate([
      {
        data: {
          file: 'text',
          zSpacing: 1
        }
      },
      {
        data: {
          file: 'video',
          zSpacing: 3
        }
      },
      {
        data: {
          file: 'audio',
          zSpacing: 1
        }
      }
    ])
  }
}
