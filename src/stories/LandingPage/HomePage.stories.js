import lightTheme from '../../theme';
import HomePage from './HomePage';
import { ThemeProvider } from '@mui/material';

export default {
  component: HomePage,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryHomePage = {
  args: {},
};
