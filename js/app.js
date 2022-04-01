'use strict';

/*
  Что тут можно оптимизировать и что надо оптимизировать?

  при наличии большого количества фреймов, все начинает тормозить.
  Мощности даже ноутбука даже не выдерживают.

  Этот проект - мини разработку, было бы здорово использовать на сайте - конструкторе,
  поэтому по сути:

  1) свести к динамическому добавлению контента
  2) динамическому определению последовательности left / right
  3) добавление фона
     автопроверка:
     если идет картинка - текст - каринка, то перед
     текстом нужен фон, иначе будет сливаться
     
     так продумать ситуации, либо сделать на усмотрение пользователя

  4) добавить возможность регулировать расположение контента:
    center / left or right

  5) продумать систему отступов (увеличенных - пустой фрейм - избежать),
    сделать иначе.

  -- оптимизация permormance
    (проблему описал выше:
      1456 ms  Scripting
      3476 ms  Rendering
      656 ms  Painting
    )

    решение:
  5) отображать максимум 5 элементов за раз
      3 видно и еще по одному с краев, чтобы выдавать готовые
      отрендеренные, а остальные добавлять или удалять динамически

  6) регулируя скорость скролла, выдавать какие - то
    слайды "через - через", чтобы быстро перелистывать эту
    секцию при надобности

  7) сделать высоту враппера по принципу
      бесконечной прокрутки до тех пор, пока..
      пока не дойдем до последнего элемента.
      Фиксировать высоту, а потом уменьшать при надобности

*/

// 3D scroll
let zSpacing = -1000
let lastPos = zSpacing / 5
const speed = -3
const frames = Array.from(document.getElementsByClassName('frame'))
const frameLength = frames.length
let zVals = []

const $dom = document.documentElement

frames.forEach((_, index) => {
  zVals.push(index * zSpacing + zSpacing)
})

window.onscroll = () => {
  const top = Math.floor(document.documentElement.scrollTop)
  const delta = lastPos - top

  lastPos = top

  frames.forEach((frame, index) => {
    zVals[index] += delta * speed

    const transform = `translateZ(${zVals[index]}px)`
    const opacity = zVals[index] < Math.abs(zSpacing) / 1.6 ? 1 : 0
 
    frame
      .setAttribute(
        'style',
        `transform: ${transform};
        opacity: ${opacity}`
      )
  })
}

window.scrollTo(0, 1)

// audio

const $soundbutton = document.querySelector('[data-soundbutton]')
const $audio = document.querySelector('[data-audio]')

$soundbutton.addEventListener('click', () => {
  $soundbutton.classList.toggle('paused')
  $audio.pasused ? $audio.play() : $audio.pause()
})

window.onfocus = () => {
  $audio.pasused ? $audio.pause() : $audio.play()
}

window.onblur = () => {
  $audio.pause()
}
