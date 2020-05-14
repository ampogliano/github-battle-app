<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Nav from './Nav';
import Loading from './Loading';

const Popular = React.lazy(() => import('./Popular'));
const Battle = React.lazy(() => import('./Battle'));
const Results = React.lazy(() => import('./Results'));
const NotFound = React.lazy(() => import('./NotFound'));
=======
import React from 'react';
import Nav from './Nav';
import Popular from './Popular';
import Battle from './Battle';
import Results from './Results';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
>>>>>>> 12edb16906a05af8523834823e961ca121083c31



export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
<<<<<<< HEAD
          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path='/' component={Popular} />
              <Route exact path='/battle' component={Battle} />
              <Route path='/battle/results' component={Results} />
              <Route component={NotFound} />
            </Switch>
          </React.Suspense>
=======
          <Switch>
            <Route exact path='/' component={Popular} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route component={NotFound} />
          </Switch>
>>>>>>> 12edb16906a05af8523834823e961ca121083c31
        </div>
      </Router>
    )
  }
}