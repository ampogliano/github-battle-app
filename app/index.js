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
        </div>
      </ThemeProvider>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('app')
)