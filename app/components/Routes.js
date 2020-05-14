import React from 'react';
import Nav from './Nav';
import Popular from './Popular';
import Battle from './Battle';
import Results from './Results';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Popular} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}