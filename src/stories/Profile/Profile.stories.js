import Profile from './Profile';
import lightTheme from '../../theme';
import { ThemeProvider } from '@mui/material';

export default {
  component: Profile,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryProfile = {
  args: {},
};
