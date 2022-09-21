import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Contact from './views/contact'
import Miscallaneous from './views/miscallaneous'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Miscallaneous} exact path="/miscallaneous" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
