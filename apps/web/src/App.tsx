import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const App: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default App;
