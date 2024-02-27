import lightTheme from '../../theme';
import { ThemeProvider } from '@mui/material';
import Heading from './Heading';

export default {
  component: Heading,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryHeading = {
  args: {
    title: 'Climate',
    subtitle: 'Simple Inventory Management',
  },
};
