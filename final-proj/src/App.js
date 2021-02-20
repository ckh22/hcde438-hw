import { Route } from "react-router-dom";
import Homepage from './App/Pages/Homepage/Homepage'
import React from 'react'

const App = () => {
  return (
    <>
      <Route exact path='/' component={Homepage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <div>
            working!
          </div>
        )}
      />
    </>
  )
}

export default App