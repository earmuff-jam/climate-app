import lightTheme from '../../theme';
import { ThemeProvider } from '@mui/material';
import HeadingSubtitle from './HeadingSubtitle';

export default {
  component: HeadingSubtitle,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryHeadingSubtitle = {
  args: {
    text: 'Simple Inventory Management',
  },
};
