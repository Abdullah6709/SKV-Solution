import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Stack,
  Paper
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

const steps = [
  {
    stepNum: 1,
    title: 'Assessment Preparation',
    description: 'We analyze your business and guide you on data requirements.',
    bgColor: '#1d4ed8', // Dark Blue
    icon: <DescriptionOutlinedIcon sx={{ fontSize: 28, color: '#ffffff' }} />
  },
  {
    stepNum: 2,
    title: 'Data Collection & Submission',
    description: 'We help you compile and submit accurate information.',
    bgColor: '#008751', // Green
    icon: <AssignmentTurnedInOutlinedIcon sx={{ fontSize: 28, color: '#ffffff' }} />
  },
  {
    stepNum: 3,
    title: 'Evaluation by EcoVadis',
    description: 'Your performance is reviewed across 4 key areas (Environment, Labor & Human Rights, Ethics, Sustainable Procurement).',
    bgColor: '#1d4ed8', // Dark Blue
    icon: <SearchOutlinedIcon sx={{ fontSize: 28, color: '#ffffff' }} />
  },
  {
    stepNum: 4,
    title: 'Receive Your Rating',
    description: 'Get your EcoVadis scorecard and certification — and start showcasing your progress.',
    bgColor: '#008751', // Green
    icon: <WorkspacePremiumOutlinedIcon sx={{ fontSize: 28, color: '#ffffff' }} />
  }
];

const OurProcessSection = () => {
  return (
    <Box
      id="process"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: '#f8fafc',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 5 }} alignItems="center">

          {/* Left Column: Heading & Start Button */}
          <Grid item xs={12} md={4} lg={3.5}>
            <Box sx={{ pr: { md: 2 } }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: '#008751',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  mb: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                OUR PROCESS <span style={{ color: '#94a3b8' }}>——</span>
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '1.8rem', sm: '2.4rem', md: '2.6rem' },
                  color: '#0f172a',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Simple Steps to Get Certified
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#64748b',
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  lineHeight: 1.6,
                  mb: 3.5,
                }}
              >
                We make the EcoVadis certification process smooth, guided and hassle-free.
              </Typography>

              <Button
                variant="contained"
                href="#contact"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: '#008751',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  borderRadius: '50px',
                  px: 3.2,
                  py: 1.3,
                  textTransform: 'none',
                  boxShadow: '0 4px 14px rgba(0, 135, 81, 0.3)',
                  '&:hover': {
                    bgcolor: '#006e42',
                  },
                }}
              >
                Start Your Journey
              </Button>
            </Box>
          </Grid>

          {/* Right Column: 4 Step Process Horizontal Cards */}
          <Grid item xs={12} md={8} lg={8.5}>
            <Grid container spacing={{ xs: 2, sm: 2, lg: 2.5 }} alignItems="flex-start">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textAlign: 'center', position: 'relative' }}>
                      {/* Circle Icon Node with Badge */}
                      <Box
                        sx={{
                          position: 'relative',
                          display: 'inline-block',
                          mb: 2.5,
                        }}
                      >
                        <Box
                          sx={{
                            width: 68,
                            height: 68,
                            borderRadius: '50%',
                            bgcolor: step.bgColor,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: `0 8px 20px ${step.bgColor}40`,
                            mx: 'auto',
                          }}
                        >
                          {step.icon}
                        </Box>

                        {/* Step Number Badge */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: -4,
                            right: -4,
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            bgcolor: '#ffffff',
                            color: '#0f172a',
                            fontWeight: 900,
                            fontSize: '0.75rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '2px solid #e2e8f0',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                          }}
                        >
                          {step.stepNum}
                        </Box>
                      </Box>

                      {/* Step Title & Description */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 800,
                          fontSize: '0.98rem',
                          color: '#0f172a',
                          mb: 1,
                          lineHeight: 1.3,
                        }}
                      >
                        {step.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: '#64748b',
                          fontSize: '0.825rem',
                          lineHeight: 1.5,
                        }}
                      >
                        {step.description}
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Connecting Arrow between steps (desktop only) */}
                  {index < steps.length - 1 && (
                    <Box
                      sx={{
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#cbd5e1',
                        pt: 3,
                        mx: -1
                      }}
                    >
                      <ChevronRightIcon sx={{ fontSize: 24 }} />
                    </Box>
                  )}
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurProcessSection;
