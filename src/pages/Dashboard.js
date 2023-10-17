import React from 'react'
import Layout from '../components/Layout'
import { Grid, TextField, Typography } from '@mui/material'
import '../styles/DashboardStyles.css'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import DashboardCards from '../components/DashboardCards'
import DashboardCharts from '../components/DashboardCharts'
import ListTable from '../components/Table'
const Dashboard = () => {
  return (
    <Layout>
      <Grid
        item
        container
        justifyContent="space-between"
        sx={{ alignItems: 'center', padding: '30px 40px 30px 40px' }}
      >
        <Grid item>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Hello Shahrukh
            <span class="wave">👋</span>,
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            size="small"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ backgroundColor: 'white', border: 'none' }}
          />
        </Grid>
      </Grid>
      <DashboardCards />
      <DashboardCharts />
      <ListTable />
    </Layout>
  )
}

export default Dashboard
