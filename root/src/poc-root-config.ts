import { registerApplication, start } from 'single-spa'
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout'

// import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes({
  routes: [
    {
      type: 'route',
      path: '/',
      routes: [
        {
          type: 'application',
          name: '@single-spa/welcome',
        },
      ],
      exact: true,
    },
    {
      type: 'route',
      path: '/react-single',
      routes: [
        {
          type: 'application',
          name: '@poc/react-single',
        },
      ],
      exact: true,
    },
  ],
})
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name)
  },
})
const layoutEngine = constructLayoutEngine({ routes, applications })

applications.forEach(registerApplication)
layoutEngine.activate()
start()