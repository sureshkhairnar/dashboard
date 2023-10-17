import React, { useState } from 'react'
import { Card, Grid } from '@mui/material'
import '../styles/DashboardStyles.css'
import Chart from './Chart.js'
import CustomersChart from './CustomersChart'

const DashboardCharts = () => {
  const [selectedQuarter, setSelectedQuarter] = useState('')
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          p: '0px 40px 30px 40px',
        }}
      >
        <Grid item xs={12} sm={8}>
          <Card
            sx={{
              padding: '10px',
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            }}
          >
            <div className="chart-container">
              <div className="quarter-dropdown">
                <select
                  value={selectedQuarter}
                  onChange={(e) => setSelectedQuarter(e.target.value)}
                  placeholder="Quarterly"
                  className="dropdown"
                >
                  <option value="" disabled selected>
                    Quarterly
                  </option>
                  <option value="Q1">Q1</option>
                  <option value="Q2">Q2</option>
                  <option value="Q3">Q3</option>
                  <option value="Q4">Q4</option>
                </select>
              </div>
              <Chart />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              padding: '10px',
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            }}
          >
            <CustomersChart />
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default DashboardCharts
