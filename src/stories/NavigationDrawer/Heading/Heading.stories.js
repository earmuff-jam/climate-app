import Heading from './Heading';
import { defaultTheme } from '../../../theme';
import { ThemeProvider } from '@mui/material';

export default {
  component: Heading,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryHeading = {
  args: {
    title: 'Climate',
    subtitle: 'Simple Inventory Management',
    titleVariant: 'h3',
    subtitleVariant: 'caption',
    gutterBottom: true,
  },
};
