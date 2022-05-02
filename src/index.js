import { Router } from '@core/routes/Router'
import {SliderPage} from '@/pages/Slider.page'
import {DashboardPage} from '@/pages/Dashboard.page'
import '@/scss/main.scss'
import '@/scss/dashboard/dashboard.scss'

const router = new Router('#app', {
  slider: SliderPage,
  dashboard: DashboardPage
})
router.getRoot()

router.init()
