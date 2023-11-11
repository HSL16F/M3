// src/TopBar.js
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { APP_BAR_HEIGHT } from './theme'; // Import the height variable

export default function TopBar() {
  return (
    <AppBar position="static" style={{ backgroundColor: 'var(--color-white)', height: `${APP_BAR_HEIGHT}px` }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ color: 'var(--text_grey)' }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: 'var(--text_grey)' }}>
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}