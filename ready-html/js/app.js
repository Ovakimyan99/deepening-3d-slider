'use strict';

let zSpacing = -1000
let lastPos = zSpacing / 5
const speed = -4
const frames = Array.from(document.getElementsByClassName('frame'))
const frameLength = frames.length
let zVals = []

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
    const opacity = zVals[index] < Math.abs(zSpacing) / 1.4 ? 1 : 0
 
    frame
      .setAttribute(
        'style',
        `transform: ${transform};
        opacity: ${opacity}`
      )
  })
}

window.scrollTo(0, 1)
