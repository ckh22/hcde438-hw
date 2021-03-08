import React, {useEffect, useState} from 'react'
import {Bar} from 'react-chartjs-2';
import {useSelector} from 'react-redux';

const Waterfall = () => {
    const {auth, async, stocks} = useSelector(state => state)
    const {columnDefs_labels, rows} = stocks.stockFinancials.payload.incomeStatement
    var labels = []
    var tables = []
    const data = {
        chartData: {
            labels: labels,
            datasets: []
        },
        length: []
    }
    const defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right',
      }
    for (let i = 0; i < columnDefs_labels.length; i++) {
        var dateString = columnDefs_labels[i]
        var year = dateString.substring(0, 4);
        var month = dateString.substring(4, 6);
        var day = dateString.substring(6, 8);
        var date = new Date(year, month - 1, day);
        labels.push(date.toLocaleDateString("en-US"))
    }
    for (let i = 0; i < rows.length; i++) {
        data['chartData'].datasets.push({label: rows[i].label, data: rows[i].datum})
        data['length'].push('bang!')
    }
    console.log(data)
    return (
        <div>
            {data.length.map((length) => {
                <>!!!!!!!!!!!!!!!!!!</>
            })}
        </div>
    )
}

export default Waterfall
