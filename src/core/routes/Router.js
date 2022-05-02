import { $ } from '@core/Dom'
import { ActiveRoute } from '@core/routes/ActiveRoute';

export class Router {
  constructor(selector, routes) {
    if (!selector) {
      throw Error('Надо передать параметр selector')
    }

    this.$placeholder = $(selector)
    this.router = routes || {}

    this.page = null

    this.changePageHandler = this.changePageHandler.bind(this)

    this.init()
  }

  init() {
    window.addEventListener('hashchange', this.changePageHandler)
    this.changePageHandler()
  }

  changePageHandler() {
    if (this.page) {
      this.page.destroy()
    }

    this.$placeholder.clear()

    let Page = this.router[ActiveRoute.directory]
    const activeParam = ActiveRoute.param || ''

    if (!Page) {
      Page = this.router.dashboard
      ActiveRoute.navigate()
    }

    this.page = new Page(activeParam)
    this.$placeholder.append(this.page.getRoot())
    this.page.afterRender()
  }

  destroy() {
    this.page.destroy()
  }
}
