import lightTheme from '../../theme';
import HeadingFilter from './HeadingFilter';
import { ThemeProvider } from '@mui/material';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  component: HeadingFilter,
  decorators: [
    withRouter,
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryHeadingFilter = {
  args: {
    // test as true to prevent error element bubbling
    redirect: true,
  },
};
