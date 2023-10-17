import React from 'react'
import { Card, Grid } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import Dollar from '../images/dollar.png'
import Order from '../images/Order.jpg'
import Balance from '../images/balance.png'
import Sale from '../images/sale.jpg'

const DashboardCards = () => {
  return (
    <>
      <Grid
        item
        container
        spacing={3}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          p: '0px 40px 30px 40px',
        }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              padding: '10px 5px',
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            }}
          >
            <Grid
              container
              px={2}
              py={1}
              spacing={1}
              sx={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Grid
                item
                sx={{
                  verticalAlign: 'middle',
                  backgroundColor: '#C8E4B2',
                  borderRadius: '50%',
                }}
              >
                <img
                  width={'70px'}
                  height={'70px'}
                  src={Dollar}
                  alt={'dollar_image'}
                />
              </Grid>
              <Grid item>
                <div gutterBottom style={{ color: 'grey' }}>
                  Earning
                </div>
                <div
                  gutterBottom
                  style={{ fontSize: '20px', fontWeight: 'bold' }}
                >
                  $198K
                </div>
                <div gutterBottom>
                  <span
                    style={{
                      color: 'green',
                      fontWeight: 'bold',
                    }}
                  >
                    <ArrowUpwardIcon
                      sx={{ fontSize: '18px', verticalAlign: 'middle' }}
                    />
                    37.8%
                  </span>{' '}
                  this month
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              padding: '10px 5px',
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            }}
          >
            <Grid
              container
              px={2}
              py={1}
              spacing={1}
              sx={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Grid
                item
                sx={{
                  verticalAlign: 'middle',
                  backgroundColor: '#78C1F3',
                  borderRadius: '50%',
                }}
              >
                <img
                  width={'70px'}
                  height={'70px'}
                  src={Order}
                  alt={'dollar_image'}
                />
              </Grid>
              <Grid item>
                <div gutterBottom style={{ color: 'grey' }}>
                  Orders
                </div>
                <div
                  gutterBottom
                  style={{ fontSize: '20px', fontWeight: 'bold' }}
                >
                  $2.4K
                </div>
                <div gutterBottom>
                  <span
                    style={{
                      color: 'red',
                      fontWeight: 'bold',
                    }}
                  >
                    <ArrowDownwardIcon
                      sx={{ fontSize: '18px', verticalAlign: 'middle' }}
                    />
                    2%
                  </span>{' '}
                  this month
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              padding: '10px 5px',
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            }}
          >
            <Grid
              container
              px={2}
              py={1}
              spacing={1}
              sx={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Grid
                item
                sx={{
                  verticalAlign: 'middle',
                  backgroundColor: '#98EECC',
                  borderRadius: '50%',
                }}
              >
                <img
                  width={'70px'}
                  height={'70px'}
                  src={Balance}
                  alt={'dollar_image'}
                />
              </Grid>
              <Grid item>
                <div gutterBottom style={{ color: 'grey' }}>
                  Balance
                </div>
                <div
                  gutterBottom
                  style={{ fontSize: '20px', fontWeight: 'bold' }}
                >
                  $2.4K
                </div>
                <div gutterBottom>
                  <span
                    style={{
                      color: 'red',
                      fontWeight: 'bold',
                    }}
                  >
                    <ArrowDownwardIcon
                      sx={{ fontSize: '18px', verticalAlign: 'middle' }}
                    />
                    2%
                  </span>{' '}
                  this month
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              padding: '10px 5px',
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            }}
          >
            <Grid
              container
              px={2}
              py={1}
              spacing={1}
              sx={{ alignItems: 'center', justifyContent: 'center' }}
            >
              <Grid
                item
                sx={{
                  verticalAlign: 'middle',
                  backgroundColor: '#FF9B9B',
                  borderRadius: '50%',
                }}
              >
                <img
                  width={'70px'}
                  height={'70px'}
                  src={Sale}
                  alt={'dollar_image'}
                />
              </Grid>
              <Grid item>
                <div gutterBottom style={{ color: 'grey' }}>
                  Total Sales
                </div>
                <div
                  gutterBottom
                  style={{ fontSize: '20px', fontWeight: 'bold' }}
                >
                  $89K
                </div>
                <div gutterBottom>
                  <span
                    style={{
                      color: 'green',
                      fontWeight: 'bold',
                    }}
                  >
                    <ArrowUpwardIcon
                      sx={{ fontSize: '18px', verticalAlign: 'middle' }}
                    />
                    11%
                  </span>{' '}
                  this month
                </div>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default DashboardCards
