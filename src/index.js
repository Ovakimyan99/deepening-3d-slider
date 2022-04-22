import { Slider } from '@/components/slider/Slider.js'
import '@/scss/main.scss'

const app = document.querySelector('#slider-wrapper')
const slider = new Slider()
    .getRoot()
    // в инстанс можно будет передавать id local storage
    //  с созданными данными и создавать разные страницы с таблицами

app.insertAdjacentHTML('beforeend', slider)
