import { camelToDachCase } from '@core/utils'

class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  find(selector) {
    const $el = this.$el.querySelector(selector)
    return $el ? $($el) : null
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }

  html(str) {
    if (typeof str === 'string') {
      this.$el.insertAdjacentHTML('beforeend', str)
      return this
    }
    return this.$el.outerHTML.trim()
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }

    if (typeof node === 'string') {
      this.$el.insertAdjacentHTML('beforeend', node)
    } else {
      this.$el.insertAdjacentElement('beforeend', node)
    }
    return this
  }

  clear() {
    this.$el.textContent = ''
    return this
  }

  attr(data, value = null) {
    if (value) {
      this.$el.setAttribute(data, value)
      return this
    }
    return this.$el.getAttribute(data)
  }

  css(styles = {}) {
    for (const key in styles) {
      if (Object.hasOwnProperty.call(styles, key)) {
        this.$el.style[camelToDachCase(key)] = styles[key]

        // если была передана пустышка
        if (!styles[key] && styles[key] !== 0) {
          delete this.$el.style[key]
        }
      }
    }
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = function(tagName, classes = '') {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }

  return $(el)
}
