import {Page} from '@core/Page';
import {$} from '@core/Dom';
import {Slider} from '@/components/slider/Slider';

const slidersData = [
  {
    data: {
      file: 'text',
    },
    styles: {
      background: 'rgba(0, 0, 0, 0.87)',
      position: 'text-right'
    }
  },
  {
    data: {
      file: 'video',
    },
    styles: {
    }
  },
  {
    data: {
      file: 'audio'
    },
    styles: {
      background: 'rgba(0, 0, 0, 0.87)',
      position: 'text-left'
    }
  },
  {
    data: {
      file: 'audio'
    },
    styles: {
    }
  },
  {
    data: {
      file: 'audio',
    },
    styles: {
      background: 'rgba(0, 0, 0, 0.87)',
      position: 'text-left',
      zSpacing: 2
    }
  },
  {
    data: {
      file: 'audio'
    },
    styles: {
      position: 'text-right'
    }
  },
  {
    data: {
      file: 'audio',
    },
    styles: {
      position: 'text-left',
      zSpacing: 3
    }
  },
  {
    data: {
      file: 'video',
    },
    styles: {
      background: 'rgba(0, 0, 0, 0.87)',
      position: 'text-right'
    }
  },
  {
    data: {
      file: 'audio',
    },
    styles: {
    }
  },
  {
    data: {
      file: 'audio',
    },
    styles: {
    }
  }
]

export class SliderPage extends Page {
  constructor() {
    super();
  }

  getRoot() {
    this.$root = $.create('div', 'container')
    this.slider = new Slider({ slidersData })
    this.$root.append(this.slider.getRoot())

    return this.$root
  }

  afterRender() {
    this.slider.init()
  }

  destroy() {
    this.slider.destroy()
  }
}