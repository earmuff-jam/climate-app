import { defaultTheme } from '../../theme';
import { ThemeProvider } from '@mui/material';

import HeadingSubtitle from './HeadingSubtitle';

export default {
  component: HeadingSubtitle,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryHeadingSubtitle = {
  args: {
    // extra decorators for test purposes only
    text: 'Simple inventory management for your needs',
    subtitleVariant: 'caption',
    gutterBottom: true,
  },
};
