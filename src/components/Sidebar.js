import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/SidebarStyles.css'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CategoryIcon from '@mui/icons-material/Category'
import GroupIcon from '@mui/icons-material/Group'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
// import ProfileImage from '../images/profile_user.jpg'
const Sidebar = () => {
  const location = useLocation()
  const isLinkActive = (to) => {
    console.log('path:=> ', location.pathname)
    // Compare the current location pathname with the 'to' prop of the Link
    return location.pathname === to
  }
  return (
    <>
      <Box component="nav" className="nav">
        <ul className="sidebar-menu">
          <li>
            <Typography
              variant="h6"
              sx={{ color: 'white', fontWeight: 'bold' }}
            >
              <DashboardIcon sx={{ fontSize: '22px', marginRight: '5px' }} />
              {location.pathname.length > 1
                ? location.pathname.slice(1).charAt(0).toUpperCase() +
                  location.pathname.slice(2)
                : 'Dashboard'}
            </Typography>
          </li>
          <li>
            <Link to={'/'} className={isLinkActive('/') ? 'active' : ''}>
              <DashboardIcon sx={{ fontSize: '22px', marginRight: '5px' }} />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to={'/product'}
              className={isLinkActive('/product') ? 'active' : ''}
            >
              <CategoryIcon sx={{ fontSize: '22px', marginRight: '5px' }} />
              Product
              <span style={{ marginLeft: 'auto' }}>
                <NavigateNextIcon sx={{ verticalAlign: 'middle' }} />
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={'/customers'}
              className={isLinkActive('/customers') ? 'active' : ''}
            >
              <GroupIcon sx={{ fontSize: '22px', marginRight: '5px' }} />
              Customers
              <span style={{ marginLeft: 'auto' }}>
                <NavigateNextIcon sx={{ verticalAlign: 'middle' }} />
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={'/income'}
              className={isLinkActive('/income') ? 'active' : ''}
            >
              <DashboardIcon sx={{ fontSize: '22px', marginRight: '5px' }} />
              Income
              <span style={{ marginLeft: 'auto' }}>
                <NavigateNextIcon sx={{ verticalAlign: 'middle' }} />
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={'/promote'}
              className={isLinkActive('/promote') ? 'active' : ''}
            >
              <GroupIcon sx={{ fontSize: '22px', marginRight: '5px' }} />
              Promote
              <span style={{ marginLeft: 'auto' }}>
                <NavigateNextIcon sx={{ verticalAlign: 'middle' }} />
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={'/help'}
              className={isLinkActive('/help') ? 'active' : ''}
            >
              <LiveHelpIcon sx={{ fontSize: '22px', marginRight: '5px' }} />
              Help
              <span style={{ marginLeft: 'auto' }}>
                <NavigateNextIcon sx={{ verticalAlign: 'middle' }} />
              </span>
            </Link>
          </li>
          <li>
            <Link to={'#'} className={'activeUser'}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={
                    'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'
                  }
                  alt={'Profile Image'}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    marginRight: '10px',
                  }}
                />
                <div>
                  <div style={{ color: 'white' }}>Evano</div>
                  <div style={{ color: '#bbb', fontSize: '12px' }}>
                    Project Manager
                  </div>{' '}
                </div>
                <span style={{ marginLeft: '70px' }}>
                  <KeyboardArrowDownIcon sx={{ verticalAlign: 'middle' }} />
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </Box>
    </>
  )
}

export default Sidebar
