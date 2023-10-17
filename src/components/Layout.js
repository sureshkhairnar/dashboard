import React from 'react'
import Sidebar from './Sidebar'
import Grid from '@mui/material/Grid'
import { useLocation } from 'react-router-dom'
const Layout = ({ children }) => {
  const location = useLocation()
  return (
    <>
      <Grid container height={'100vh'}>
        <Grid
          item
          width="300px"
          sx={{
            backgroundColor: '#022e85',
          }}
        >
          <Sidebar />
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: '#F1F1F1',
            flexGrow: location.pathname === '' ? 0.5 : 1,
          }}
        >
          {children}
        </Grid>
      </Grid>
    </>
  )
}

export default Layout
