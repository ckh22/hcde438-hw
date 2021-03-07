import {LinearProgress} from '@material-ui/core'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Chatroom from '../../Components/Chatter/Chatroom'

import {getShortInterest, getStock} from '../../Logic/API/financialActions'

const StockPage = ({match}) => {
    const dispatch = useDispatch()
    const {async, auth, stocks} = useSelector(state => state)
    const {initialized, error, loading} = async
    const stock = Object.values(stocks[match.params.type]).find((e) => e.ticker === match.params.id)
    const stockID = stock.performanceId

    useEffect(() => {
        dispatch(getShortInterest(stockID))
        dispatch(getStock(stockID))
    }, [dispatch])
    return (<div> {
        loading ? <LinearProgress/>: <div><Chatroom ticker={match.params.id}/></div>
    } </div>)
}

export default StockPage
