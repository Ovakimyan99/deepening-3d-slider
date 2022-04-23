// подгрузка аудио и навешивание событий

// audio
const $soundbutton = document.querySelector('[data-soundbutton]')
const $audio = document.querySelector('[data-audio]')

$soundbutton.addEventListener('click', () => {
  $soundbutton.classList.toggle('paused')
  $audio.paused ? $audio.play() : $audio.pause()
})

window.onfocus = () => {
  $audio.paused ? $audio.pause() : $audio.play()
}

window.onblur = () => {
  $audio.pause()
}
