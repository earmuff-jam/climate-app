import lightTheme from '../../theme';
import { ThemeProvider } from '@mui/material';
import { CottageRounded } from '@mui/icons-material';
import { withRouter } from 'storybook-addon-react-router-v6';
import NavigationDrawerListItem from './NavigationDrawerListItem';

export default {
  component: NavigationDrawerListItem,
  decorators: [
    withRouter,
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryNavigationDrawerListItemDrawerOpen = {
  args: {
    item: {
      id: 1,
      title: 'Home items',
      description: 'regular household items',
      lastUpdatedAt: '2022-06-16T16:41:57+02:00',
      lastUpdatedBy: 'dogs_with_kookie',
      icon: <CottageRounded />,
    },
    isCategory: true,
    drawerOpen: true,
  },
};
export const PrimaryNavigationDrawerListItemDrawerClosed = {
  args: {
    item: {
      id: 1,
      title: 'Home items',
      description: 'regular household items',
      lastUpdatedAt: '2022-06-16T16:41:57+02:00',
      lastUpdatedBy: 'dogs_with_kookie',
      icon: <CottageRounded />,
    },
    isCategory: true,
    drawerOpen: false,
  },
};
