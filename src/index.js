import { $ } from '@core/Dom'
import { Slider } from '@/components/slider/Slider.js'
import '@/scss/main.scss'

const slidersData = [
  {
    data: {
      file: 'text',
      zSpacing: 1
    }
  },
  {
    data: {
      file: 'video',
      zSpacing: 1
    }
  },
  {
    data: {
      file: 'audio',
      zSpacing: 1
    }
  },
  {
    data: {
      file: 'audio',
      zSpacing: 1
    }
  },
  {
    data: {
      file: 'audio',
      zSpacing: 2
    }
  },
  {
    data: {
      file: 'audio',
      zSpacing: 1
    }
  },
  {
    data: {
      file: 'audio',
      zSpacing: 3
    }
  },
  {
    data: {
      file: 'video',
      zSpacing: 1
    }
  },
  {
    data: {
      file: 'audio',
      zSpacing: 1
    }
  },
  {
    data: {
      file: 'audio',
      zSpacing: 1
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

/*
192 ms  Scripting
233 ms  Rendering
44 ms  Painting
*/

/*
862 ms  Scripting
457 ms  Rendering
65 ms  Painting
*/

/*
1027 ms  Scripting
575 ms  Rendering
72 ms  Painting
*/

/*
207 ms  Scripting
403 ms  Rendering
82 ms  Painting - абсолютная оптимизация
*/