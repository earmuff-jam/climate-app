import AddItemDetail from './AddItemDetail';
import { defaultTheme } from '../../theme';
import { ThemeProvider } from '@mui/material';

export default {
  component: AddItemDetail,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryAddItemDetail = {
  args: {
    display: true,
    setDisplay: () => {},
  },
};
