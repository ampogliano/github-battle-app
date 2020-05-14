import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Nav from './Nav';
import Loading from './Loading';

const Popular = React.lazy(() => import('./Popular'));
const Battle = React.lazy(() => import('./Battle'));
const Results = React.lazy(() => import('./Results'));
const NotFound = React.lazy(() => import('./NotFound'));



export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path='/' component={Popular} />
              <Route exact path='/battle' component={Battle} />
              <Route path='/battle/results' component={Results} />
              <Route component={NotFound} />
            </Switch>
          </React.Suspense>
        </div>
      </Router>
    )
  }
}