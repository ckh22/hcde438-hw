// importing redux, and dispatch actions
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Nav from '../../Components/Navbar/Nav'
import {fetchFinances} from '../../Logic/API/financialActions'
import Stock from '../../Components/Stocks/Stock'
import {v4 as uuidv4} from 'uuid';
import {Divider, Paper} from '@material-ui/core'

const Homepage = () => {
    const dispatch = useDispatch()
    const {async, auth, stocks} = useSelector(state => state)
    const {actives, gainers, losers} = stocks

    useEffect(() => {
        dispatch(fetchFinances())
    }, [dispatch])

    return (
        <div className='stock'>
            <Nav/>
            <Paper square>
                <header style={
                    {
                        textAlign: 'center',
                        padding: '2em'
                    }
                }>High Action Stocks</header>
            </Paper>
            <div className='stocks-container'>
                {
                Object.values(actives).map((active) => (
                    <Stock key={
                            uuidv4()
                        }
                        active={active}
                        type='actives'/>
                ))
            }</div>
            <Paper>
                <header style={
                    {
                        textAlign: 'center',
                        padding: '2em'
                    }
                }>High Gain Stocks</header>
            </Paper>
            <div className='stocks-container'>
                {
                Object.values(gainers).map((active) => (
                    <Stock key={
                            uuidv4()
                        }
                        active={active}
                        type='gainers'/>
                ))
            }</div>
            <Paper>
                <header style={
                    {
                        textAlign: 'center',
                        padding: '2em'
                    }
                }>High Loss Stocks</header>
            </Paper>

            <div className='stocks-container'>
                {
                Object.values(losers).map((active) => (
                    <Stock key={
                            uuidv4()
                        }
                        active={active}
                        type='losers'/>
                ))
            }</div>
        </div>
    )
}

export default Homepage
