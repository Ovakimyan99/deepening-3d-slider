import { VIDEO_DEFAULT_OPTIONS } from './constants'

export class Load {
  static loadImage(src) {
    return new Promise((resolve, reject) => {
      try {
        const image = new Image
        image.loading = () => resolve(image)
        image.src = src
      } catch (error) {
        reject(`Ваш файл не получилось загрузить: ${error}`)
      }
    })
  }

  static loadVideo(options = {}) {
    return new Promise((resolve, reject) => {
      try {
        const video = document.createElement('video')
        for (const option in options) {
          if (Object.prototype.hasOwnProperty.call(options, option)) {
            video.setAttribute(option, options[option])
          }
        }
        video.onload = () => resolve(video)
      } catch (error) {
        reject('Ваш файл с видео формата ')
      }
    })
  }

  load(file) {
    const imageTypes = ['jpeg', 'jpg', 'svg', 'gif', 'png', 'webp']
    const videoTypes = ['mov', 'mp4']

    const fileType = this.defineType(file)

    if (imageTypes.includes(fileType)) {
      Load.loadImage(file.src)
    }

    if (videoTypes.includes(fileType)) {
      Load.loadVideo({
        src: file.src,
        ...VIDEO_DEFAULT_OPTIONS
      })
    }
  }

  defineType(src) {
    return src.split('.').splice(-1).toLowerCase()
  }
}
