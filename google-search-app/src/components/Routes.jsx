import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Results from './Results'

const Routess = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route exact path="/">
          <Route to="/search" />
        </Route>
        <Route exact path={['/search', '/images', '/news', '/videos']}>
          <Results />
        </Route>
      </Routes>
    </div>
  )
}

export default Routess