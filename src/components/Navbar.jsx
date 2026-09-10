import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Stack
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SpaIcon from '@mui/icons-material/Spa';
import PhoneCallIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className="glass-nav"
      sx={{
        bgcolor: 'rgba(255, 255, 255, 0.96)',
        color: '#0f172a',
        top: 0,
        zIndex: 1100,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: { xs: 72, md: 84 } }}>
          {/* Logo & Brand Name */}
          <Box
            component="a"
            href="#hero"
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
              gap: 1.5
            }}
          >
            <Box
              sx={{
                width: 46,
                height: 46,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #064e3b 0%, #059669 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                boxShadow: '0 6px 16px rgba(5, 150, 105, 0.3)',
              }}
            >
              <SpaIcon sx={{ fontSize: 26 }} />
            </Box>

            <Box>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.2rem', md: '1.35rem' },
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: '#064e3b'
                }}
              >
                SKV SOLUTIONS
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: '#059669',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'block',
                  mt: 0.2
                }}
              >
                EcoVadis Certification Advisory
              </Typography>
            </Box>
          </Box>

          {/* Desktop Navigation Links */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                sx={{
                  color: '#334155',
                  fontWeight: 700,
                  fontSize: '0.925rem',
                  px: 2.2,
                  py: 1,
                  borderRadius: '8px',
                  position: 'relative',
                  '&:hover': {
                    bgcolor: 'rgba(5, 150, 105, 0.08)',
                    color: '#064e3b',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          {/* CTA Buttons */}
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Button
              variant="contained"
              color="primary"
              href="tel:8800320483"
              startIcon={<PhoneCallIcon />}
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                fontSize: '0.875rem',
                py: 1.1,
                px: 2.4,
                boxShadow: '0 4px 14px rgba(6, 78, 59, 0.25)',
              }}
            >
              8800320483
            </Button>



            {/* Mobile Hamburger Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open menu"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, ml: 1 }}
            >
              <MenuIcon sx={{ fontSize: 30, color: '#064e3b' }} />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      {/* Mobile Drawer Navigation */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: { width: 300, bgcolor: '#ffffff', p: 3 }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Stack direction="row" spacing={1.2} alignItems="center">
            <SpaIcon sx={{ color: '#059669', fontSize: 30 }} />
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#064e3b' }}>
              SKV Solutions
            </Typography>
          </Stack>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ mb: 3 }}>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              sx={{
                borderRadius: '10px',
                mb: 0.8,
                py: 1.2,
                '&:hover': { bgcolor: 'rgba(5, 150, 105, 0.08)' }
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{ fontWeight: 700, color: '#0f172a', fontSize: '1rem' }}
              />
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 'auto', pt: 3, borderTop: '1px solid #e2e8f0' }}>
          <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 700, display: 'block', mb: 2, letterSpacing: '0.05em' }}>
            DIRECT CONTACT
          </Typography>
          <Stack spacing={1.5}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              href="tel:8800320483"
              startIcon={<PhoneCallIcon />}
              sx={{ py: 1.2, fontWeight: 700 }}
            >
              Call: 8800320483
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              href="mailto:enquiry@skvs.in"
              startIcon={<EmailIcon />}
              sx={{ py: 1.2, fontWeight: 700 }}
            >
              enquiry@skvs.in
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
