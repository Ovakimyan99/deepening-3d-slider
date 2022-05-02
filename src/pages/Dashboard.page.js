import {Page} from '@core/Page';

export class DashboardPage extends Page {
  constructor() {
    super();
  }

  getRoot() {
    return `<h1>dashboard</h1>`
  }

  afterRender() {}

  destroy() {}
}