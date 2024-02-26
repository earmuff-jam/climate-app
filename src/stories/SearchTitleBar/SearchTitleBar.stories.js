import lightTheme from '../../theme';
import { ThemeProvider } from '@mui/material';
import SearchTitleBar from './SearchTitleBar';

export default {
  component: SearchTitleBar,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimarySearchTitleBar = {
  args: {},
};
