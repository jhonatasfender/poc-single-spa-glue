import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'

export default function Routers() {
  return (
    <BrowserRouter basename="react-multiples">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  )
}
