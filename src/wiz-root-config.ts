import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes({
  routes: [
    {
      type: "application",
      name: "@wiz/angular-header",
    },
    {
      type: "route",
      path: "/welcome",
      routes: [
        {
          type: "application",
          name: "@single-spa/welcome",
        },
      ],
    },
    {
      type: "route",
      path: "/angular-single",
      routes: [
        {
          type: "application",
          name: "@wiz/angular-single",
        },
      ],
    },
    {
      type: "route",
      path: "/react-form",
      routes: [
        {
          type: "application",
          name: "@wiz/react-form",
        },
      ],
    },
  ],
});

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
