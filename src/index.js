import {Router} from '@core/routes/Router'
import {Dashboard} from '@/pages/Dashboard'
import {ExcelPage} from '@/pages/ExcelPage'
import './scss/index.scss'

new Router('#app', {
  dashboard: Dashboard,
  excel: ExcelPage
})
