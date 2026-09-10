import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#064e3b', // Deep Corporate Emerald
      light: '#047857',
      dark: '#022c22',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#059669', // Vibrant Emerald Teal
      light: '#10b981',
      dark: '#047857',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#d97706', // Amber Gold
      light: '#f59e0b',
      dark: '#b45309',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
      borderRadius: 10,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          padding: '12px 26px',
          fontSize: '0.95rem',
          boxShadow: 'none',
          transition: 'all 0.25s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px -5px rgba(6, 78, 59, 0.25)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #022c22 0%, #064e3b 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #047857 0%, #059669 100%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.04)',
          border: '1px solid rgba(226, 232, 240, 0.9)',
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 20,
        },
      },
    },
  },
});

export default theme;
