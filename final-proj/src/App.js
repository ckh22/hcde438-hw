import { Route } from "react-router-dom";
import Homepage from './App/Pages/Homepage/Homepage'
import React from 'react'
import Nav from "./App/Components/Navbar/Nav";
import './App.scss'

const App = () => {
  return (
    <>
      <Route path='/' component={Nav} />
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