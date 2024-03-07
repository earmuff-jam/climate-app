import Title from './Title';
import { defaultTheme } from '../../theme';
import { ThemeProvider } from '@mui/material';

export default {
  component: Title,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryTitle = {
  args: {
    children: [],
    className: '',
    onClose: () => {},
  },
};
