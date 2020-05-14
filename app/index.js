import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from './contexts/theme';
import Routes from './components/Routes'




class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }))
    }
  }

  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className={this.state.theme}>
          <Routes />
<<<<<<< HEAD
        </div>
=======
          {/* <div className='container'>
              <Nav />

              <Switch>
                <Route exact path='/' component={Popular} />
                <Route exact path='/battle' component={Battle} />
                <Route path='/battle/results' component={Results} />
                <Route component={NotFound} />
              </Switch> */}
        </div>
        {/* </div> */}
>>>>>>> 12edb16906a05af8523834823e961ca121083c31
      </ThemeProvider>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('app')
)