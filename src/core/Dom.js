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

    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
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
