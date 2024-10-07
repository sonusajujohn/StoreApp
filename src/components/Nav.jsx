import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <b id='emp'>STORE PAGE</b>
          </Typography>
          <Link to={'/'}> <Button class='nav1'>HOME</Button></Link>
          <Link to={'/add'} ><Button class='nav2'>ADD PRODUCTS</Button></Link>
        </Toolbar>
      </AppBar>
    </Box></>
  )
}

export default Nav