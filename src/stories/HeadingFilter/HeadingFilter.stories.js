import lightTheme from '../../theme';
import { ThemeProvider } from '@mui/material';
import HeadingFilter from './HeadingFilter';

export default {
  component: HeadingFilter,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryHeadingFilter = {
  args: {
    title: 'Climate',
    subtitle: 'Simple Inventory Management',
  },
};
