import React from 'react';
import { ThemeConsumer } from '../contexts/theme';
import { NavLink } from 'react-router-dom';



const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='row space-between'>
          <ul className='row nav'>
            <li>
              <NavLink
                className='nav-link'
                activeStyle={activeStyle}
                exact to='/'>Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                className='nav-link'
                activeStyle={activeStyle}
                to='/battle'>Battle
              </NavLink>
            </li>
          </ul>
          <button
            className='btn-clear'
            style={{ fontSize: 30 }}
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🔦' : '💡'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  )
}