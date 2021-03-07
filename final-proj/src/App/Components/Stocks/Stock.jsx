import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button
} from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';


const Stock = ({active, type}) => {
    const num = active.percentChange > 0
    return (
        <Card variant='elevation' className='stock-card'>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {active.standardName}
                </Typography>
                <Typography variant="h5" component="h2">
                    {
                    active.ticker
                } </Typography>
                <Typography color="textSecondary">
                    {active.lastPrice}
                </Typography>
                <Typography variant="body2" component="p" style={{color: num ? 'green': 'red'}}>
                    {active.percentChange}
                </Typography>
            </CardContent>
            <CardActions>
                <Button component={ Link } to={`/stock/${type}/${active.ticker}`} size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default Stock
