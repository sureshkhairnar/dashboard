import React from 'react'
import { Card, Grid } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

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
                }}
              >
                <img
                  width={'70px'}
                  height={'70px'}
                  src={
                    'data:image/png;base64,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'
                  }
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
                }}
              >
                <img
                  width={'70px'}
                  height={'70px'}
                  src={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2i_tqhwURjZJ2pgGfjLF4CByK11F65cKI3XMuqRATXOtxpqwzWpcKjULoYSIAa2HNBEg&usqp=CAU'
                  }
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
                }}
              >
                <img
                  width={'70px'}
                  height={'70px'}
                  src={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAujr9_m6mNmuwRnSfkZF43qhjPs2vub7Ew&usqp=CAU'
                  }
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
                }}
              >
                <img
                  width={'70px'}
                  height={'70px'}
                  src={'https://static.thenounproject.com/png/3349932-200.png'}
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
