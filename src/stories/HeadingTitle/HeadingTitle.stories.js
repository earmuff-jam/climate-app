import { ThemeProvider } from '@mui/material';
import HeadingTitle from './HeadingTitle';
import lightTheme from '../../theme';

export default {
  component: HeadingTitle,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryHeadingTitle = {
  args: {
    title: 'Climate',
  },
};
