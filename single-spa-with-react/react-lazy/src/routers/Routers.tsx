import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Contact = lazy(() => import('../pages/Contact'))

export default function Routers() {
  return (
    <Suspense fallback={<h1>Carregando...</h1>}>
      <BrowserRouter basename="react-lazy">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}
