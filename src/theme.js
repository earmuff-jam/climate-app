import { createTheme } from '@mui/material/styles';

/**
 * light theme color palette
 * #12372A - first
 * #436850 - second
 * #ADBC9F - third
 * #FBFADA - fourth
 */

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#12372A',
    },
    secondary: {
      main: '#436850',
    },
    titleTextPrimary: {
      main: '#FBFADA',
    },
  },
});

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#000',
    },
    titleTextPrimary: {
      main: '#000',
    },
  },
});

export default lightTheme;
