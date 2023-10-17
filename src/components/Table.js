import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { TableVirtuoso } from 'react-virtuoso'
import {
  Card,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Image1 from '../images/nature1.jpg'
import Image2 from '../images/nature2.webp'
import Image3 from '../images/nature3.jpg'
import Image4 from '../images/nature4.jpg'
import Image5 from '../images/nature5.jpg'
import Image6 from '../images/nature6.jpg'
import Image7 from '../images/nature7.jpg'

const sample = [
  [
    'Abstract 3D',
    '32 in stock',
    '$ 45.99',
    20,
    Image1,
    'lorem ipsum is very good for dummy text in our project',
  ],
  [
    'Sarphens Illustration',
    '32 in stock',
    '$ 45.99',
    20,
    Image2,
    'lorem ipsum is very good for dummy text in our project',
  ],
  [
    'Abstract 3D',
    '32 in stock',
    '$ 45.99',
    20,
    Image3,
    'lorem ipsum is very good for dummy text in our project',
  ],
  [
    'Sarphens Illustration',
    '32 in stock',
    '$ 45.99',
    20,
    Image4,
    'lorem ipsum is very good for dummy text in our project',
  ],
  [
    'Abstract 3D',
    '32 in stock',
    '$ 45.99',
    20,
    Image5,
    'lorem ipsum is very good for dummy text in our project',
  ],
  [
    'Sarphens Illustration',
    '32 in stock',
    '$ 45.99',
    20,
    Image6,
    'lorem ipsum is very good for dummy text in our project',
  ],
  [
    'Abstract 3D',
    '32 in stock',
    '$ 45.99',
    20,
    Image7,
    'lorem ipsum is very good for dummy text in our project',
  ],
  [
    'Sarphens Illustration',
    '32 in stock',
    '$ 45.99',
    20,
    Image1,
    'lorem ipsum is very good for dummy text in our project',
  ],
  [
    'Abstract 3D',
    '32 in stock',
    '$ 45.99',
    20,
    Image2,
    'lorem ipsum is very good for dummy text in our project',
  ],
  [
    'Sarphens Illustration',
    '32 in stock',
    '$ 45.99',
    20,
    Image3,
    'lorem ipsum is very good for dummy text in our project',
  ],
  [
    'Abstract 3D',
    '32 in stock',
    '$ 45.99',
    20,
    Image4,
    'lorem ipsum is very good for dummy text in our project',
  ],
  [
    'Sarphens Illustration',
    '32 in stock',
    '$ 45.99',
    20,
    Image5,
    'lorem ipsum is very good for dummy text in our project',
  ],
]

function createData(
  id,
  productName,
  stock,
  price,
  totalSales,
  imageSrc,
  additionalContent,
) {
  return {
    id,
    productName,
    stock,
    price,
    totalSales,
    imageSrc,
    additionalContent,
  }
}

const columns = [
  {
    width: '70%',
    label: 'Product Name',
    dataKey: 'productName',
  },
  {
    width: '10%',
    label: 'Stock',
    dataKey: 'stock',
  },
  {
    width: '10%',
    label: 'Price',
    dataKey: 'price',
  },
  {
    width: '10%',
    label: 'Total Sales',
    dataKey: 'totalSales',
  },
]

const rows = Array.from({ length: sample.length }, (_, index) => {
  const rowData = sample[index]
  return createData(index, ...rowData)
})

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: 'collapse', tableLayout: 'fixed' }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
}

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: 'background.paper',
            color: '#888',
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  )
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
          sx={{
            border: 'none',
            fontWeight:
              column?.label === 'Price' || column?.label === 'Product Name'
                ? 'bold'
                : '',
          }}
        >
          {column.dataKey === 'productName' ? (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={row.imageSrc}
                alt={row[column.dataKey]}
                style={{
                  width: '80px',
                  height: '50px',
                  borderRadius: '5%',
                  marginRight: '10px',
                }}
              />
              <div>
                <div>{row[column.dataKey]}</div>
                <div style={{ color: '#888', fontSize: '13px' }}>
                  {row.additionalContent}
                </div>{' '}
              </div>
            </div>
          ) : (
            row[column.dataKey]
          )}
        </TableCell>
      ))}
    </React.Fragment>
  )
}

export default function ListTable() {
  const [selectedDays, setSelectedDays] = React.useState('')
  return (
    <Card
      sx={{
        margin: '0px 40px 40px 40px',
        height: '500px',
      }}
    >
      <Grid
        item
        container
        justifyContent="space-between"
        sx={{ alignItems: 'center', padding: '20px 15px 20px 15px' }}
      >
        <Grid item xs={8}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Product Sell
          </Typography>
        </Grid>
        <Grid item container spacing={2} xs={4} alignItems={'center'}>
          <Grid item xs={6}>
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
              sx={{
                backgroundColor: '#f1f1f1',
                width: '100%',
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <select
              value={selectedDays}
              onChange={(e) => setSelectedDays(e.target.value)}
              placeholder="Selected Days"
              className="dropdown"
              style={{
                padding: '10px 20px 10px 10px',
                width: '100%',
              }}
            >
              <option value="" disabled selected>
                Last 30 days
              </option>
              <option value="45 days">Last 45 days</option>
              <option value="60 days">Last 60 days</option>
              <option value="75 days">Last 75 days</option>
              <option value="90 days">Last 90 days</option>
            </select>
          </Grid>
        </Grid>
      </Grid>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Card>
  )
}
