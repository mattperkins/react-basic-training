import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MemoApp from './memo/MemoApp'
import About from './about/About'
require('./app.css')

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Route exact path="/" component={About} />
          <Route path="/memo" render={props => (
            <MemoApp />
          )} />
        </>
      </Router>
    )
  }
}

