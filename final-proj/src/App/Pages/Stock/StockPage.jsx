import {
    LinearProgress,
    Paper,
    Tabs,
    Tab,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    makeStyles,
    Divider
} from '@material-ui/core'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Chatroom from '../../Components/Chatter/Chatroom'
import {getShortInterest, getStock} from '../../Logic/API/financialActions'
import Chart from '../../Components/Charts/Chart'
import {v4 as uuidv4} from 'uuid';

function TabPanel(props) {
    const {children} = props;
    return (
        <div style={
            {margin: '2em'}
        }>
            <h1>{children}</h1>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing.unit * 3,
        backgroundColor: theme.palette.background.paper
    },
    tabRoot: {
        minWidth: 10
    }
}));

const StockPage = ({match}) => {
    const width = 100;

    const widthModifier = {
        width: `${width}px`
    };
    const classes = useStyles();
    const dispatch = useDispatch()
    const {async, auth, stocks} = useSelector(state => state)
    const {initialized, error, loading} = async
    const stock = Object.values(stocks[match.params.type]).find((e) => e.ticker === match.params.id)
    const stockID = stock.performanceId
    const {stockFinancials, stockShortInterest} = stocks
    const {incomeStatement} = stockFinancials.payload
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        dispatch(getStock(stockID))
        dispatch(getShortInterest(stockID))
    }, [dispatch])
    return (
        <div> {
            loading ? <div className='flex-panel'><LinearProgress/></div> : <div className='flex-panel'>
                <div className='left-panel' id='left-panel'>
                    <header>{
                        stock.standardName
                    }
                        ({
                        stock.ticker
                    })</header>
                    <div>
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
                    <Divider style={{marginBottom: '1em'}} light variant='fullWidth'/>
                    <Paper square>
                        <Tabs value={value}
                            fullWidth={true}
                            centered
                            className='panel'
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={handleChange}
                            aria-label="disabled tabs example">
                            {
                            incomeStatement.rows.map((row) => (
                                <Tab label={
                                        row.label
                                    }
                                    classes={
                                        {root: classes.tabRoot}
                                    }
                                    style={widthModifier}>
                                    <div>is this working?</div>
                                </Tab>
                            ))
                        } </Tabs>
                    </Paper>
                    <TabPanel><Chart labels={
                                incomeStatement.columnDefs
                            }
                            dataset={
                                {
                                    label: incomeStatement.rows[value].label,
                                    backgroundColor: 'rgba(75,192,192,1)',
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderWidth: 2,
                                    data: incomeStatement.rows[value].datum
                                }
                            }
                            footer={
                                incomeStatement.footer
                            }
                            title={
                                incomeStatement.rows[value].label
                            }/></TabPanel>
                    <TableContainer component={Paper}
                        className='table'>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Stock Short Information</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody> {
                                Object.keys(stockShortInterest.payload).map((key) => (
                                    <TableRow>
                                        <TableCell> {key} </TableCell>
                                        <TableCell> {
                                            stockShortInterest.payload[key]
                                        } </TableCell>
                                    </TableRow>
                                ))
                            } </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <Divider orientation='vertical' />
                <Chatroom ticker={
                    match.params.id
                }/></div>
        } </div>
    )
}

export default StockPage
