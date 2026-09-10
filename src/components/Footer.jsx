import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Link,
  Divider,
  IconButton
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#022c22',
        color: '#94a3b8',
        pt: 8,
        pb: 4,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} sx={{ mb: 6 }}>
          {/* Column 1: Brand Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2.5 }}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '10px',
                    bgcolor: '#059669',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                  }}
                >
                  <SpaIcon />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#ffffff', letterSpacing: '-0.01em' }}>
                  SKV SOLUTIONS
                </Typography>
              </Stack>
            </Box>

            <Typography variant="body2" sx={{ color: '#cbd5e1', mb: 3, lineHeight: 1.6 }}>
              SKV Solutions Pvt Ltd is a premier management consulting firm specializing in 
              EcoVadis Sustainability Rating, ESG Compliance, and Supply Chain Sustainability Assessments.
            </Typography>

            <Stack direction="row" spacing={1}>
              <IconButton sx={{ color: '#cbd5e1', bgcolor: 'rgba(255,255,255,0.05)', '&:hover': { color: '#ffffff', bgcolor: '#059669' } }}>
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton sx={{ color: '#cbd5e1', bgcolor: 'rgba(255,255,255,0.05)', '&:hover': { color: '#ffffff', bgcolor: '#059669' } }}>
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton sx={{ color: '#cbd5e1', bgcolor: 'rgba(255,255,255,0.05)', '&:hover': { color: '#ffffff', bgcolor: '#059669' } }}>
                <TwitterIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#ffffff', mb: 2.5 }}>
              Quick Navigation
            </Typography>
            <Stack spacing={1.2}>
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  underline="hover"
                  sx={{
                    color: '#cbd5e1',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    '&:hover': { color: '#34d399' },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Column 3: EcoVadis Service Scope */}
          <Grid item xs={12} sm={6} md={2.5}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#ffffff', mb: 2.5 }}>
              EcoVadis Pillars
            </Typography>
            <Stack spacing={1.2}>
              {[
                'Environmental Stewardship',
                'Labor & Human Rights',
                'Business Ethics & Anti-Bribery',
                'Sustainable Procurement',
                'Medal Upgrade Consulting',
                'Annual Re-Assessment'
              ].map((item, idx) => (
                <Typography key={idx} variant="body2" sx={{ color: '#cbd5e1', fontSize: '0.875rem' }}>
                  • {item}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Column 4: Contact Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#ffffff', mb: 2.5 }}>
              Contact Information
            </Typography>

            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailIcon sx={{ color: '#34d399', fontSize: 20 }} />
                <Link
                  href="mailto:enquiry@skvs.in"
                  underline="hover"
                  sx={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}
                >
                  enquiry@skvs.in
                </Link>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneInTalkIcon sx={{ color: '#34d399', fontSize: 20 }} />
                <Link
                  href="tel:8800320483"
                  underline="hover"
                  sx={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}
                >
                  +91 8800320483 / 8800320483
                </Link>
              </Stack>

              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <LocationOnIcon sx={{ color: '#34d399', fontSize: 20, mt: 0.2 }} />
                <Box>
                  <Typography variant="caption" sx={{ color: '#34d399', fontWeight: 700, display: 'block' }}>
                    Regd Office:
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#cbd5e1', fontSize: '0.8rem', mb: 1 }}>
                    7/13, Madhuvan Vihar, Allahabad - 211011, India
                  </Typography>

                  <Typography variant="caption" sx={{ color: '#34d399', fontWeight: 700, display: 'block' }}>
                    NCR Office:
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#cbd5e1', fontSize: '0.8rem' }}>
                    Plot no-4/4, A-219, Rajhans Plaza, Ahinsa Khand-I, Indirapuram, Ghaziabad - 201014, India
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', mb: 4 }} />

        {/* Copyright & Disclaimer */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="caption" sx={{ color: '#94a3b8' }}>
            © {new Date().getFullYear()} SKV Solutions Pvt Ltd. All Rights Reserved. EcoVadis is a registered trademark of EcoVadis SAS.
          </Typography>

          <Stack direction="row" spacing={3}>
            <Link href="#privacy" underline="none" sx={{ color: '#94a3b8', fontSize: '0.75rem', '&:hover': { color: '#ffffff' } }}>
              Privacy Policy
            </Link>
            <Link href="#terms" underline="none" sx={{ color: '#94a3b8', fontSize: '0.75rem', '&:hover': { color: '#ffffff' } }}>
              Terms of Service
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
