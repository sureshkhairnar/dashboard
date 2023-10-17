import React from 'react'
import Layout from '../components/Layout'
import { Box } from '@mui/material'

const Product = () => {
  return (
    <Layout>
      <Box
        sx={{
          padding: '30px 50px',
          textAlign: 'center',
        }}
      >
        <h1> Product Page</h1>
      </Box>
    </Layout>
  )
}

export default Product
