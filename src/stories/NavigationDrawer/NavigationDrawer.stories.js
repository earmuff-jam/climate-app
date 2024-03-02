import lightTheme from '../../theme';
import { ThemeProvider } from '@mui/material';
import NavigationDrawer from './NavigationDrawer';
import { withRouter } from 'storybook-addon-react-router-v6';

import {
  SchoolRounded,
  GarageRounded,
  CottageRounded,
  SoupKitchenRounded,
} from '@mui/icons-material';

export default {
  component: NavigationDrawer,
  decorators: [
    withRouter,
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryNavigationDrawerOpen = {
  args: {
    drawerOpen: true,
    handleDrawerClose: () => {},
    handleDrawerOpen: () => {},
    tags: [
      {
        id: 1,
        title: 'Home items',
        description: 'home related stuffs..',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'dogs_with_kookie',
        icon: <CottageRounded />,
      },
      {
        id: 2,
        title: 'Kitchen items',
        description: 'Click to edit description',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'johny1443',
        icon: <SoupKitchenRounded />,
      },
      {
        id: 3,
        title: 'School supplies',
        description: 'Click to edit description',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'dogs_with_kookie',
        icon: <SchoolRounded />,
      },
      {
        id: 4,
        title: 'Garage Items',
        description: 'Click to edit description',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'xxmariah_whitney_2009xx',
        icon: <GarageRounded />,
      },
    ],
    categories: [
      {
        id: 1,
        title: 'Pantry',
        description: 'kitchen pantry shelf items',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'dogs_with_kookie',
      },
      {
        id: 2,
        title: 'Cleaning Cupboard',
        description: 'Cleaning supplies storage unit',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'dogs_with_kookie',
      },
      {
        id: 3,
        title: 'Laundry and Guest Closet',
        description: 'Click to edit description',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'dogs_with_kookie',
      },
    ],
  },
};

export const PrimaryNavigationDrawerClose = {
  args: {
    drawerOpen: false,
    handleDrawerClose: () => {},
    handleDrawerOpen: () => {},
    tags: [
      {
        id: 1,
        title: 'Home items',
        description: 'home related stuffs..',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'dogs_with_kookie',
        icon: <CottageRounded />,
      },
      {
        id: 2,
        title: 'Kitchen items',
        description: 'Click to edit description',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'johny1443',
        icon: <SoupKitchenRounded />,
      },
      {
        id: 3,
        title: 'School supplies',
        description: 'Click to edit description',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'dogs_with_kookie',
        icon: <SchoolRounded />,
      },
      {
        id: 4,
        title: 'Garage Items',
        description: 'Click to edit description',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'xxmariah_whitney_2009xx',
        icon: <GarageRounded />,
      },
    ],
    categories: [
      {
        id: 1,
        title: 'Pantry',
        description: 'kitchen pantry shelf items',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'dogs_with_kookie',
      },
      {
        id: 2,
        title: 'Cleaning Cupboard',
        description: 'Cleaning supplies storage unit',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'dogs_with_kookie',
      },
      {
        id: 3,
        title: 'Laundry and Guest Closet',
        description: 'Click to edit description',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'dogs_with_kookie',
      },
    ],
  },
};
