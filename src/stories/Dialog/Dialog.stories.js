import AddItem from './Dialog';
import { defaultTheme } from '../../theme';
import { ThemeProvider } from '@mui/material';

export default {
  component: AddItem,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryAddItem = {
  args: {
    display: true,
    title: 'Add new item',
    setDisplay: () => {},
  },
};

export const PrimaryAddCategory = {
  args: {
    display: true,
    title: 'Add new category',
    setDisplay: () => {},
  },
};
