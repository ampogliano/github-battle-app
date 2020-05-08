import React from 'react';
import PropTypes from 'prop-types';
import Hover from './Hover';
import { ThemeConsumer } from '../contexts/theme';

const styles = {
  container: {
    position: 'relative',
    display: 'flex'
  },
  tooltip: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
    padding: '7px',
    marginBottom: '5px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px'
  },
  tooltipDark: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '160px',
    bottom: '100%',
    left: '50%',
    marginLeft: '-80px',
    borderRadius: '3px',
    padding: '7px',
    marginBottom: '5px',
    textAlign: 'center',
    fontSize: '14px',
    backgroundColor: 'hsla(0, 0%, 85%, 0.9)',
    color: '#000'
  }
}

export default function Tooltip({ text, children }) {
  return (
    <Hover>
      {(hovering) => (
        <ThemeConsumer>
          {({ theme }) => (
            <div style={styles.container}>
              {hovering === true && <div style={theme === 'dark' ? styles.tooltipDark : styles.tooltip}>{text}</div>}
              {children}
            </div>
          )}
        </ThemeConsumer>

      )}
    </Hover>
  )
}

Tooltip.propTypes = {
  text: PropTypes.string.isRequired
}