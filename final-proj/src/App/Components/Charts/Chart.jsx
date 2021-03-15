import React from 'react'
import {Bar} from 'react-chartjs-2';



const Chart = ({labels, dataset, title, footer}) => {
    const state = {
        labels: labels,
        datasets: [
          dataset
        ]
      }
    return (
        <div>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text: `${title} (In ${footer.orderOfMagnitude}s)`,
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            },
          }}
        />
      </div>
    )
}

export default Chart
