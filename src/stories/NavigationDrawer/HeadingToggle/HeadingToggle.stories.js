import lightTheme from '../../../theme';
import { ThemeProvider } from '@mui/material';
import HeadingToggle from './HeadingToggle';

export default {
  component: HeadingToggle,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryHeadingToggle = {
  args: {
    drawerOpen: false,
    handleDrawerOpen: () => {},
  },
};
