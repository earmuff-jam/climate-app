import lightTheme from '../../theme';
import LandingPage from './LandingPage';
import { ThemeProvider } from '@mui/material';

export default {
  component: LandingPage,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryLandingPage = {
  args: {
    text: 'Simple Inventory Management',
  },
};
