import lightTheme from '../../theme';
import { ThemeProvider } from '@mui/material';
import NavigationDrawerTitle from './NavigationDrawerTitle';

export default {
  component: NavigationDrawerTitle,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryNavigationDrawerTitle = {
  args: {
    title: 'tags',
    iconButtonLabel: 'Add new tag',
    hideAddOn: false,
  },
};

export const SecondaryNavigationDrawerTitle = {
  args: {
    title: 'categories',
    iconButtonLabel: 'Add new category',
    hideAddOn: false,
  },
};
