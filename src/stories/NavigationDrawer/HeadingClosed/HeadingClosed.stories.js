import lightTheme from '../../theme';
import { ThemeProvider } from '@mui/material';
import HeadingClosed from './HeadingClosed';

export default {
  component: HeadingClosed,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryHeadingClosed = {
  args: {
    title: 'Climate',
    subtitle: 'Simple Inventory Management',
  },
};
