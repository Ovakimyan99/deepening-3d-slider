export class Page {
  constructor(param) {
    this.param = param
  }

  getRoot() {
    throw new Error('Необходимо вывести шаблон')
  }

  afterRender() {}

  destroy() {}
}
