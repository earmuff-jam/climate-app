import HeadingTitle from './HeadingTitle';
import { defaultTheme } from '../../theme';
import { ThemeProvider } from '@mui/material';

export default {
  component: HeadingTitle,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryHeadingTitle = {
  args: {
    title: 'Climate',
    titleVariant: 'outlined',
  },
};
