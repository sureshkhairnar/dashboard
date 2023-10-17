import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Chart = () => {
  const options = {
    chart: {
      type: 'column',
      height: 300,
    },
    title: {
      text: 'Overview',
      align: 'start',
    },
    subtitle: {
      text: 'Monthly Earning',
      align: 'start',
      style: {
        color: '#888',
      },
    },
    xAxis: {
      lineWidth: 0,
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
      ],
      tickWidth: 0,
      labels: {
        enabled: true,
      },
    },
    yAxis: {
      labels: {
        enabled: false,
      },
      gridLineWidth: 0,
    },
    plotOptions: {
      column: {
        color: '#E1E1E1',
        cursor: 'pointer',
        pointPadding: 0.0,
        groupPadding: 0.1,
        states: {
          hover: {
            color: 'darkblue',
          },
        },
        borderRadius: 8,
      },
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      formatter: function () {
        return `<b>${this.x}</b><br/>Earnings : ${this.y}$`
      },
    },
    series: [
      {
        data: [50, 70, 65, 70, 60, 70, 40, 30, 55, 60, 45, 70],
      },
    ],
  }

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  )
}

export default Chart
