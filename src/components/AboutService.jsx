import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Button,
  Chip,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const processSteps = [
  {
    stepNumber: '01',
    title: 'Initial Review',
    icon: <SearchIcon sx={{ fontSize: 26, color: '#ffffff' }} />,
    color: '#064e3b',
    items: [
      'Review of the existing System with respect to EcoVadis Questionnaires',
      'Gap analysis and planning for compliance'
    ]
  },
  {
    stepNumber: '02',
    title: 'Documentation',
    icon: <DescriptionIcon sx={{ fontSize: 26, color: '#ffffff' }} />,
    color: '#047857',
    items: [
      'Designing and developing of forms, formats, and procedures',
      'Hand holding / support for implementation',
      '100% documentation support'
    ]
  },
  {
    stepNumber: '03',
    title: 'Effective Verification',
    icon: <VerifiedUserIcon sx={{ fontSize: 26, color: '#ffffff' }} />,
    color: '#059669',
    items: [
      'Submission of documentation as per questionnaires'
    ]
  },
  {
    stepNumber: '04',
    title: 'Achieve Certification',
    icon: <EmojiEventsIcon sx={{ fontSize: 26, color: '#ffffff' }} />,
    color: '#d97706',
    items: [
      'Assessment rating',
      'Corrective action on observations'
    ]
  }
];

const AboutService = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        bgcolor: '#ffffff',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Top Header Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, sm: 6, md: 8 }, maxWidth: 900, mx: 'auto' }}>
          <Chip
            label="ECOVADIS CERTIFICATION & CONSULTANCY SERVICES"
            sx={{
              bgcolor: 'rgba(5, 150, 105, 0.1)',
              color: '#064e3b',
              fontWeight: 800,
              fontSize: { xs: '0.7rem', sm: '0.75rem' },
              letterSpacing: '0.08em',
              mb: 2,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.65rem', sm: '2.2rem', md: '2.6rem' },
              fontWeight: 800,
              color: '#0f172a',
              mb: { xs: 2, sm: 2.5 },
              letterSpacing: '-0.02em',
            }}
          >
            EcoVadis Certification Assessment & Consultancy Services in India
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#334155',
              fontSize: { xs: '0.925rem', sm: '1.05rem', md: '1.1rem' },
              lineHeight: 1.75,
              mb: 2.5,
            }}
          >
            EcoVadis certification is the world’s leading and largest network of trade partners sharing business data on sustainable development. 
            EcoVadis Certification Assessment provides enterprises with full sustainability services, delivered through a global cloud-based SaaS platform. 
            The EcoVadis certification assessment level covers a wide range of non-financial policy areas including environmental, labor and human rights, ethics, and sustainable procurement impacts.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: '#475569',
              fontSize: { xs: '0.875rem', sm: '0.975rem', md: '1.025rem' },
              lineHeight: 1.75,
            }}
          >
            The EcoVadis certification assessment combines engineering and development expertise to provide vendors with a simple and reliable scorecard. 
            Following the initial assessment, the EcoVadis certification assessment provides TfS members and suppliers with an opportunity to monitor the progress of sustainable practices in the supply chain.
          </Typography>
        </Box>

        {/* Feature Highlight Cards */}
        <Grid container spacing={{ xs: 2.5, sm: 3, md: 4 }} sx={{ mb: { xs: 6, sm: 8 } }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                p: { xs: 0.5, sm: 1 },
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 20px 30px -10px rgba(6, 78, 59, 0.12)',
                  borderColor: '#059669',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '12px',
                    bgcolor: 'rgba(5, 150, 105, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <PublicIcon sx={{ fontSize: 26, color: '#059669' }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#0f172a', fontSize: { xs: '1.05rem', sm: '1.15rem' } }}>
                  World's Leading Network
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6, fontSize: { xs: '0.85rem', sm: '0.875rem' } }}>
                  Connect with international trade partners on a global cloud-based SaaS platform for verified business sustainability data.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                p: { xs: 0.5, sm: 1 },
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 20px 30px -10px rgba(6, 78, 59, 0.12)',
                  borderColor: '#059669',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '12px',
                    bgcolor: 'rgba(5, 150, 105, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <AssignmentTurnedInIcon sx={{ fontSize: 26, color: '#059669' }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#0f172a', fontSize: { xs: '1.05rem', sm: '1.15rem' } }}>
                  Simple & Reliable Scorecard
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6, fontSize: { xs: '0.85rem', sm: '0.875rem' } }}>
                  Combining engineering & development expertise to give suppliers, vendors, and TfS members transparent sustainability ratings.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <Card
              sx={{
                height: '100%',
                p: { xs: 0.5, sm: 1 },
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 20px 30px -10px rgba(6, 78, 59, 0.12)',
                  borderColor: '#059669',
                },
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '12px',
                    bgcolor: 'rgba(5, 150, 105, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <AutoGraphIcon sx={{ fontSize: 26, color: '#059669' }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#0f172a', fontSize: { xs: '1.05rem', sm: '1.15rem' } }}>
                  Consultancy Services in India
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6, fontSize: { xs: '0.85rem', sm: '0.875rem' } }}>
                  SKV Solutions actively assists organizations with end-to-end EcoVadis certification assessment & consulting across India.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Services Main Box */}
        <Box
          id="services"
          sx={{
            bgcolor: '#f8fafc',
            borderRadius: { xs: '16px', sm: '24px' },
            p: { xs: 2.5, sm: 4, md: 5 },
            border: '1px solid #e2e8f0',
            mb: { xs: 6, sm: 8 },
          }}
        >
          <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#064e3b', mb: 2, fontSize: { xs: '1.35rem', sm: '1.8rem', md: '2.1rem' }, letterSpacing: '-0.01em' }}>
                Drive Sustainability & Enhance Your Reputation with EcoVadis Certification
              </Typography>

              <Typography variant="body1" sx={{ color: '#334155', lineHeight: 1.75, mb: 2, fontSize: { xs: '0.875rem', sm: '0.975rem' } }}>
                The EcoVadis certification by SKV is a globally recognized and independent sustainable development standard for businesses of all sizes and types. 
                The certification looks at a company’s sustainable performance in four key areas: the environment, labor and human rights, ethics, and sustainable procurement.
              </Typography>

              <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.75, mb: 3, fontSize: { xs: '0.85rem', sm: '0.925rem' } }}>
                The assessment is based on a number of criteria consistent with international sustainability standards, including the UN Global Compact, ILO conventions, and global reporting frameworks. 
                Showing areas for improvement and their commitment to sustainability allows stakeholders to provide a credible means of demonstration. EcoVadis certification enables companies to raise their profile, increase their competitiveness, and contribute to a sustainable future.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button
                  variant="contained"
                  color="primary"
                  href="#contact"
                  sx={{ py: 1.4, px: 3, fontWeight: 700, width: { xs: '100%', sm: 'auto' } }}
                >
                  Book Consultation
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  href="tel:8800320483"
                  startIcon={<PhoneInTalkIcon />}
                  sx={{ py: 1.4, px: 2.8, fontWeight: 700, width: { xs: '100%', sm: 'auto' } }}
                >
                  Call Expert: 8800320483
                </Button>
              </Stack>
            </Grid>

            {/* Right Contact Card */}
            <Grid item xs={12} md={5}>
              <Card
                sx={{
                  bgcolor: '#064e3b',
                  color: '#ffffff',
                  p: { xs: 2.5, sm: 3.5 },
                  borderRadius: '20px',
                  boxShadow: '0 15px 35px rgba(6, 78, 59, 0.25)',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#34d399', mb: 1, fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                  Get SKV Expert Support
                </Typography>
                <Typography variant="body2" sx={{ color: '#cbd5e1', mb: 3, fontSize: { xs: '0.825rem', sm: '0.875rem' } }}>
                  Our team provides active hand-holding and 100% documentation support to expedite your EcoVadis assessment.
                </Typography>

                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ bgcolor: 'rgba(255,255,255,0.1)', p: 1, borderRadius: '10px' }}>
                      <PhoneInTalkIcon sx={{ color: '#34d399', fontSize: 20 }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block' }}>
                        Phone / WhatsApp
                      </Typography>
                      <Typography variant="subtitle1" component="a" href="tel:8800320483" sx={{ color: '#ffffff', fontWeight: 700, textDecoration: 'none', fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                        8800320483
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ bgcolor: 'rgba(255,255,255,0.1)', p: 1, borderRadius: '10px' }}>
                      <EmailIcon sx={{ color: '#34d399', fontSize: 20 }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block' }}>
                        Official Email
                      </Typography>
                      <Typography variant="subtitle1" component="a" href="mailto:enquiry@skvs.in" sx={{ color: '#ffffff', fontWeight: 700, textDecoration: 'none', fontSize: { xs: '0.95rem', sm: '1rem' } }}>
                        enquiry@skvs.in
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Implementation & Assessment Process Section */}
        <Box sx={{ mt: { xs: 4, sm: 6 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, sm: 6 }, maxWidth: 850, mx: 'auto' }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#0f172a', mb: 2, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.4rem' } }}>
              EcoVadis Certification Assessment & Implementation Process
            </Typography>
            <Typography variant="body1" sx={{ color: '#475569', fontSize: { xs: '0.875rem', sm: '1rem' }, lineHeight: 1.7 }}>
              Our Team helps organizations implement EcoVadis certification requirements in a flexible and systematic way. 
              The process of program implementation includes initial research, followed by implementation and documentation. 
              Our team provides active support and hand-holding to organizations to achieve successful system implementation and audit results. 
              <strong> 100% documentation support is provided to expedite the process.</strong>
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
            {processSteps.map((step, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, sm: 3 },
                    height: '100%',
                    borderRadius: '18px',
                    border: '1px solid #e2e8f0',
                    bgcolor: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 12px 25px rgba(0, 0, 0, 0.08)',
                      borderColor: step.color,
                    },
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '12px',
                        bgcolor: step.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {step.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 900, color: '#cbd5e1' }}>
                      {step.stepNumber}
                    </Typography>
                  </Stack>

                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#0f172a', mb: 1.5, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                    {step.title}
                  </Typography>

                  <Divider sx={{ mb: 1.5 }} />

                  <List disablePadding sx={{ flexGrow: 1 }}>
                    {step.items.map((itemText, itemIdx) => (
                      <ListItem key={itemIdx} disableGutters sx={{ py: 0.5, alignItems: 'flex-start' }}>
                        <ListItemIcon sx={{ minWidth: 22, mt: 0.3 }}>
                          <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: step.color, mt: 0.8 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={itemText}
                          primaryTypographyProps={{
                            fontSize: '0.825rem',
                            fontWeight: 600,
                            color: '#334155',
                            lineHeight: 1.5,
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutService;
