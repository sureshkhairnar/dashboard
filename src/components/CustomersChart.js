import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const CustomersChart = () => {
  const options = {
    chart: {
      type: 'pie',
      height: 300,
    },
    title: {
      text: 'Customers',
      align: 'start',
    },
    subtitle: {
      text: 'Customers that buy products',
      align: 'start',
      style: {
        color: '#888',
      },
    },
    plotOptions: {
      pie: {
        innerSize: '50%',
        dataLabels: {
          enabled: false,
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Customers',
        data: [
          {
            name: 'Product 1',
            y: 20,
            color: '#d43b1b',
          },
          {
            name: 'Product 2',
            y: 30,
            color: '#083554',
          },
          {
            name: 'Product 3',
            y: 50,
            color: '#888',
          },
        ],
      },
    ],
  }

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  )
}

export default CustomersChart
