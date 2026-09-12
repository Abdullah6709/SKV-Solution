import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Link
} from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Ecovadis Certification', href: '#ecovadis-certification' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <Box component="footer" id="contact">
      {/* Top Footer Main Band */}
      <Box
        sx={{
          bgcolor: '#003a27',
          color: '#ffffff',
          py: { xs: 4, md: 5 },
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', md: 'center' }}
            spacing={{ xs: 3, md: 2 }}
          >
            {/* Left: Brand Logo & Tagline */}
            <Box>
              <Box
                component="img"
                src="/skv_logo.png"
                alt="SKV Solution Logo"
                sx={{
                  height: { xs: 44, md: 54 },
                  width: 'auto',
                  objectFit: 'contain',
                  bgcolor: '#ffffff',
                  p: 0.8,
                  borderRadius: '8px',
                  display: 'block',
                  mb: 0.8,
                }}
              />
              <Typography
                variant="caption"
                sx={{
                  color: 'rgba(255, 255, 255, 0.75)',
                  fontSize: '0.75rem',
                  display: 'block',
                  letterSpacing: '0.04em',
                }}
              >
                Your Growth. Our Commitment.
              </Typography>
            </Box>

            {/* Center: Navigation Links */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1.5, sm: 3 }}
              flexWrap="wrap"
              useFlexGap
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  underline="none"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    '&:hover': {
                      color: '#00e676',
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>

            {/* Right: Phone & Email Contacts */}
            <Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 1.5, sm: 2.5 }} alignItems="center">
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneInTalkIcon sx={{ fontSize: 18, color: '#00e676' }} />
                <Link
                  href="tel:+918800320483"
                  underline="none"
                  sx={{ color: '#ffffff', fontWeight: 700, fontSize: '0.875rem' }}
                >
                  +91 8800320483
                </Link>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon sx={{ fontSize: 18, color: '#00e676' }} />
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 0.5, sm: 1.5 }} alignItems="center">
                  <Link
                    href="mailto:enquiry@skvs.in"
                    underline="none"
                    sx={{ color: '#ffffff', fontWeight: 700, fontSize: '0.875rem', '&:hover': { color: '#00e676' } }}
                  >
                    enquiry@skvs.in
                  </Link>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', display: { xs: 'none', sm: 'inline' } }}>|</Typography>
                  <Link
                    href="mailto:manoj@skvs.in"
                    underline="none"
                    sx={{ color: 'rgba(255, 255, 255, 0.85)', fontWeight: 600, fontSize: '0.875rem', '&:hover': { color: '#00e676' } }}
                  >
                    manoj@skvs.in
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Bottom Dark Copyright Strip */}
      <Box
        sx={{
          bgcolor: '#002619',
          color: 'rgba(255, 255, 255, 0.75)',
          py: 1.8,
          textAlign: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="caption" sx={{ fontSize: '0.78rem', fontWeight: 500 }}>
            SKV Solution &nbsp;|&nbsp; Your Growth. Our Commitment.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
