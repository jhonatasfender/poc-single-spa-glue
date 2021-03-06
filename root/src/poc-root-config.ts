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
          name: '@poc/react-header',
        },
      ],
    },
    {
      type: 'route',
      path: '/welcome',
      routes: [
        {
          type: 'application',
          name: '@single-spa/welcome',
        },
      ],
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
    },
    {
      type: 'route',
      path: '/react-multiples',
      routes: [
        {
          type: 'application',
          name: '@poc/react-multiples',
        },
      ],
    },
    {
      type: 'route',
      path: '/react-lazy',
      routes: [
        {
          type: 'application',
          name: '@poc/react-lazy',
        },
      ],
    },
    {
      type: 'route',
      path: '/react-form',
      routes: [
        {
          type: 'application',
          name: '@poc/react-form',
        },
      ],
      exact: true,
    },
    {
      type: 'route',
      path: '/react-form-with-utility-model',
      routes: [
        {
          type: 'application',
          name: '@poc/react-form-with-utility-model',
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
