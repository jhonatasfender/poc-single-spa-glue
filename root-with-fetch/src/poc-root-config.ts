import { registerApplication, start } from 'single-spa'
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout'

fetch('https://run.mocky.io/v3/fe05b498-f19a-437a-bf0f-913b0b03c28a')
  .then((res) => res.json())
  .then((res) => {
    const routes = constructRoutes(res)
    const applications = constructApplications({
      routes,
      loadApp({ name }) {
        return System.import(name)
      },
    })
    const layoutEngine = constructLayoutEngine({ routes, applications })

    applications.forEach(registerApplication)
    layoutEngine.activate()
  })
  .finally(() => {
    start()
  })
