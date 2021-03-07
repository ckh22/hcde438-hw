// importing redux, and dispatch actions
import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Login from '../../Components/Formik/Login'
import Nav from '../../Components/Navbar/Nav'
import {signInUser, signOutUser} from '../../Logic/Auth/authActions'
import ReactLoading from 'react-loading';
import {fetchFinances} from '../../Logic/API/financialActions'
import {Card, CardActionArea, CardContent, Typography} from '@material-ui/core'
import Stock from '../../Components/Stocks/Stock'
import {v4 as uuidv4} from 'uuid';

const Homepage = () => {
    const dispatch = useDispatch()
    const {async, auth, stocks} = useSelector(state => state)
    function signOut(value) {
        dispatch(signOutUser())
    }
    const {actives, gainers, losers} = stocks

    useEffect(() => {
        dispatch(fetchFinances())
    }, [dispatch])

    return (
        <div>
            <Nav/>
            <header style={{textAlign: 'center', padding: '2em'}}>High Action Stocks</header>
            <div className='stocks-container'>
                {
                
                Object.values(actives).map((active) => (
                    <Stock key={
                            uuidv4()
                        }
                        active={active}
                        type='actives'
                        />
                ))
            }</div>
            <header style={{textAlign: 'center', padding: '2em'}}>High Gain Stocks</header>
            <div className='stocks-container'>
                {
                
                Object.values(gainers).map((active) => (
                    <Stock key={
                            uuidv4()
                        }
                        active={active}
                        type='gainers'
                        />
                ))
            }</div>
            <header style={{textAlign: 'center', padding: '2em'}}>High Loss Stocks</header>
            <div className='stocks-container'>
                {
                
                Object.values(losers).map((active) => (
                    <Stock key={
                            uuidv4()
                        }
                        active={active}
                        type='losers'
                        />
                ))
            }</div>
        </div>
    )
}

export default Homepage
