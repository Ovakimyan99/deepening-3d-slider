function createSlide(slide, index, array) {
  // получаю массив с настроенными слайдами - набором опций для каждого из типа слайда
  // ввожу проверки и внедряю нужный тип шаблона сюда
  const slideOptions = array[index]
  return `
    <div class="frame">
      <div class="frame__content">
        <h2>beautiful world</h2>
      </div>
    </div>
  `.trim()
}

export function sliderTemplate(slides) {
  return slides.map(createSlide).join('')
}
