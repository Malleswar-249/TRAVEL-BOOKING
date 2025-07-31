import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from 'react-router-dom';
import profileIcon from '../assets/profile-icon.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const handleAboutClick = () => {
    if (location.pathname === '/') {
      const aboutEl = document.getElementById('aboutSection');
      if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToAbout: true } });
    }
    setDrawerOpen(false);
  };

  const handleContactClick = () => {
    if (location.pathname === '/') {
      const contactEl = document.getElementById('contactSection');
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToContact: true } });
    }
    setDrawerOpen(false);
  };

  const navItems = [
    { label: 'Home', action: () => navigate('/') },
    { label: 'Bookings', action: () => navigate('/bookings') },
    { label: 'Packages', action: () => navigate('/packages') },
    { label: 'About', action: handleAboutClick },
    { label: 'Contact Us', action: handleContactClick },
  ];

  return (
    <>
      <AppBar position="sticky" color="primary" elevation={2}>
        <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
          {/* Brand */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
            Primroute
          </Typography>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            {navItems.map((item) => (
              <Button key={item.label} color="inherit" onClick={item.action}>
                {item.label}
              </Button>
            ))}
            <IconButton onClick={() => navigate('/login')} sx={{ p: 0 }}>
              <img
                src={profileIcon}
                alt="Profile"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            </IconButton>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250, p: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton onClick={item.action}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate('/login')}>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
