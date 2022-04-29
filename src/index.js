import { $ } from '@core/Dom'
import { Slider } from '@/components/slider/Slider.js'
import '@/scss/main.scss'

const slidersData = [
  {
    data: {
      file: 'text',
      zSpacing: 1,
    },
    styles: {
      background: 'rgba(0, 0, 0, 0.87)',
      position: 'text-right'
    }
  },
  {
    data: {
      file: 'video',
      zSpacing: 1,
    },
    styles: {
    }
  },
  {
    data: {
      file: 'audio',
      zSpacing: 1,
    },
    styles: {
      background: 'rgba(0, 0, 0, 0.87)',
      position: 'text-left'
    }
  },
  {
    data: {
      file: 'audio',
      zSpacing: 1,
    },
    styles: {
    }
  },
  {
    data: {
      file: 'audio',
      zSpacing: 2,
    },
    styles: {
      background: 'rgba(0, 0, 0, 0.87)',
      position: 'text-left'
    }
  },
  {
    data: {
      file: 'audio',
      zSpacing: 1,
    },
    styles: {
      position: 'text-right'

    }
  },
  {
    data: {
      file: 'audio',
      zSpacing: 3,
    },
    styles: {
      position: 'text-left'
    }
  },
  {
    data: {
      file: 'video',
      zSpacing: 1,
    },
    styles: {
      background: 'rgba(0, 0, 0, 0.87)',
      position: 'text-right'
    }
  },
  {
    data: {
      file: 'audio',
      zSpacing: 1,
    },
    styles: {
    }
  },
  {
    data: {
      file: 'audio',
      zSpacing: 1,
    },
    styles: {
    }
  }
]

const app = $('#app')
const container = $.create('div', 'container')
const slider = new Slider({ slidersData })

container.append(
    slider.getRoot()
)

app.append(container)

slider.init()
