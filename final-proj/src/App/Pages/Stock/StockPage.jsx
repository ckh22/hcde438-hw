import {LinearProgress} from '@material-ui/core'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Waterfall from '../../Components/Charts/Waterfall'
import Chatroom from '../../Components/Chatter/Chatroom'

import {getShortInterest, getStock} from '../../Logic/API/financialActions'

const StockPage = ({match}) => {
    const dispatch = useDispatch()
    const {async, auth, stocks} = useSelector(state => state)
    const {initialized, error, loading} = async
    const stock = Object.values(stocks[match.params.type]).find((e) => e.ticker === match.params.id)
    const stockID = stock.performanceId

    useEffect(() => {
        dispatch(getStock(stockID))
        dispatch(getShortInterest(stockID))
    }, [dispatch])
    return (
        <div> {
            loading ? <LinearProgress/>: <div className='flex-panel'>
                <div className='left-panel'>
                    <header>{
                        stock.standardName
                    }
                        ({
                        stock.ticker
                    })</header><div>
                        Last Price: ${
                        stock.lastPrice
                    } </div>
                    <span style={
                        {

                            color: stock.percentChange > 0 ? 'green' : 'red'
                        }

                    }>
                        {
                        stock.percentChange
                    }%</span>
                    <div>Volume: {
                        stock.volume
                    }</div>
                    <Waterfall/>
                </div><Chatroom ticker={
                    match.params.id
                }/></div>
        } </div>
    )
}

export default StockPage
