// importing react router, and the required components
import {Route} from "react-router-dom";
import Homepage from './App/Pages/Homepage/Homepage'
import React, {Fragment} from 'react'
import './App.scss'
import Register from './App/Components/Auth/Register'
import Login from './App/Components/Auth/Login'
import StockPage from './App/Pages/Stock/StockPage'

const App = () => {
    return (
        <>
            <Route exact path='/'
                component={Homepage}/>
            <Route path={"/(.+)"}
                render={
                    () => (
                        <Fragment>
                            <Route exact path='/login'
                                component={Login}/>
                            <Route exact path='/register'
                                component={Register}/>
                                <Route exact path='/stock/:type/:id'
                                component={StockPage}/>
                        </Fragment>
                    )
                }/>
        </>
    )
}

export default App
