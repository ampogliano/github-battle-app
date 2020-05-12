import React from 'react';

export default function NotFound() {
  return (
    <React.Fragment>
      <h1 className='not-found'>
        I'm not the page you were looking for.
    </h1>

      <p className='tiny'>
        (... and it doesn't exist.)
      </p>
    </React.Fragment>
  )
}

