import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Card,
  CardContent,
  Chip,
  Rating
} from '@mui/material';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const HeroSection = () => {
  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        background: 'linear-gradient(135deg, #022c22 0%, #064e3b 45%, #047857 85%, #0f172a 100%)',
        color: '#ffffff',
        pt: { xs: 4, sm: 5, md: 6 },
        pb: { xs: 5, sm: 6, md: 7.5 },
        overflow: 'hidden',
      }}
    >
      {/* Background Decorative Ambient Circles */}
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: { xs: 250, md: 500 },
          height: { xs: 250, md: 500 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, rgba(6, 78, 59, 0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-15%',
          left: '-5%',
          width: { xs: 200, md: 380 },
          height: { xs: 200, md: 380 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, rgba(6, 78, 59, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} alignItems="center">
          {/* Left Column: Streamlined Executive Hero Text Content */}
          <Grid item xs={12} md={6.5}>
            <Box sx={{ pr: { md: 2 } }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                  fontWeight: 800,
                  lineHeight: { xs: 1.2, sm: 1.18 },
                  mb: { xs: 1.5, sm: 2 },
                  letterSpacing: '-0.02em',
                }}
              >
                Empowering Growth with <span style={{ color: '#34d399' }}>Global Compliance</span> & Sustainability Solutions
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#cbd5e1',
                  fontWeight: 400,
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.05rem' },
                  lineHeight: 1.6,
                  mb: { xs: 2.5, sm: 3 },
                  maxWidth: 600,
                }}
              >
                SKV Solutions delivers premier management consulting, ESG sustainability frameworks, 
                systematic gap analysis audits, and 100% documentation support to raise corporate performance.
              </Typography>

              {/* Key Solution Bullet Points */}
              <Grid container spacing={1.2} sx={{ mb: { xs: 2.5, sm: 3 } }}>
                {[
                  'Management Systems Advisory',
                  'ESG Reporting & Sustainability',
                  'Systematic Gap Analysis',
                  '100% Documentation Support'
                ].map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <CheckCircleOutlineIcon sx={{ color: '#34d399', fontSize: { xs: '1rem', sm: '1.15rem' } }} />
                      <Typography variant="body2" sx={{ color: '#e2e8f0', fontWeight: 600, fontSize: { xs: '0.825rem', sm: '0.875rem' } }}>
                        {item}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>

              {/* CTA Action Buttons */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1.5, sm: 1.8 }}
                sx={{ mb: 1 }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="medium"
                  href="#contact"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    py: 1.4,
                    px: { xs: 2.5, sm: 3.2 },
                    fontSize: { xs: '0.9rem', sm: '0.95rem' },
                    fontWeight: 700,
                    width: { xs: '100%', sm: 'auto' },
                    boxShadow: '0 8px 20px -4px rgba(5, 150, 105, 0.4)',
                  }}
                >
                  Explore Our Solutions
                </Button>

                <Button
                  variant="outlined"
                  size="medium"
                  href="tel:8800320483"
                  startIcon={<PhoneInTalkIcon />}
                  sx={{
                    py: 1.4,
                    px: { xs: 2.5, sm: 2.8 },
                    fontSize: { xs: '0.9rem', sm: '0.95rem' },
                    fontWeight: 700,
                    color: '#ffffff',
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                    width: { xs: '100%', sm: 'auto' },
                    backdropFilter: 'blur(8px)',
                    '&:hover': {
                      borderColor: '#ffffff',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Call: 8800320483
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* Right Column: Compact Solution Image Card Banner */}
          <Grid item xs={12} md={5.5}>
            <Box sx={{ position: 'relative', width: '100%' }}>
              <Card
                className="glass-card"
                sx={{
                  bgcolor: 'rgba(15, 23, 42, 0.82) !important',
                  backdropFilter: 'blur(20px) !important',
                  border: '1px solid rgba(255, 255, 255, 0.2) !important',
                  color: '#ffffff',
                  p: { xs: 1, sm: 1.5 },
                  borderRadius: { xs: '16px', sm: '20px' },
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.4)',
                  overflow: 'hidden',
                }}
              >
                <CardContent sx={{ p: { xs: 1, sm: 1.5 } }}>
                  {/* Image Container */}
                  <Box
                    sx={{
                      position: 'relative',
                      borderRadius: { xs: '12px', sm: '14px' },
                      overflow: 'hidden',
                      mb: 1.5,
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    <Box
                      component="img"
                      src="/banner_solutions.jpg"
                      alt="SKV Solutions Enterprise Compliance & Sustainable Growth"
                      sx={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: { xs: 180, sm: 220, md: 240 },
                        objectFit: 'cover',
                        display: 'block',
                        borderRadius: { xs: '12px', sm: '14px' },
                      }}
                    />
                    <Chip
                      icon={<AutoAwesomeIcon sx={{ color: '#f59e0b !important', fontSize: '0.8rem' }} />}
                      label="Integrated Solution Ecosystem"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: { xs: 8, sm: 10 },
                        right: { xs: 8, sm: 10 },
                        bgcolor: 'rgba(2, 44, 34, 0.92)',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: { xs: '0.68rem', sm: '0.75rem' },
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(52, 211, 153, 0.4)',
                      }}
                    />
                  </Box>

                  {/* Solution Highlights row */}
                  <Stack spacing={1} sx={{ mb: 1.5 }}>
                    <Stack direction="row" spacing={0.8} flexWrap="wrap" useFlexGap sx={{ gap: 0.8 }}>
                      <Chip label="Green Management Systems" size="small" sx={{ bgcolor: 'rgba(5, 150, 105, 0.25)', color: '#34d399', fontWeight: 700, fontSize: { xs: '0.68rem', sm: '0.725rem' } }} />
                      <Chip label="ESG Compliance" size="small" sx={{ bgcolor: 'rgba(245, 158, 11, 0.25)', color: '#fbbf24', fontWeight: 700, fontSize: { xs: '0.68rem', sm: '0.725rem' } }} />
                      <Chip label="Digital Enterprise Growth" size="small" sx={{ bgcolor: 'rgba(2, 132, 199, 0.25)', color: '#38bdf8', fontWeight: 700, fontSize: { xs: '0.68rem', sm: '0.725rem' } }} />
                    </Stack>
                  </Stack>

                  {/* Trust Footer inside Card */}
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ pt: 1, borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                    <Stack direction="row" spacing={0.8} alignItems="center">
                      <SecurityIcon sx={{ color: '#10b981', fontSize: { xs: '1rem', sm: '1.1rem' } }} />
                      <Typography variant="caption" sx={{ color: '#cbd5e1', fontWeight: 600, fontSize: { xs: '0.7rem', sm: '0.775rem' } }}>
                        Guaranteed Implementation Support
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Rating value={5} readOnly size="small" />
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>

              {/* Floating Quick Stat Badge */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: -10, sm: -15 },
                  left: { xs: 10, sm: -15 },
                  bgcolor: '#ffffff',
                  color: '#0f172a',
                  p: { xs: 1, sm: 1.5 },
                  borderRadius: '14px',
                  boxShadow: '0 15px 20px -5px rgba(0, 0, 0, 0.25)',
                  display: { xs: 'none', sm: 'flex' },
                  alignItems: 'center',
                  gap: 1.2,
                  border: '1px solid #e2e8f0',
                }}
              >
                <TrendingUpIcon sx={{ color: '#059669', fontSize: 30 }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#064e3b', lineHeight: 1 }}>
                    100%
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 700, fontSize: '0.7rem' }}>
                    Documentation Support
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
