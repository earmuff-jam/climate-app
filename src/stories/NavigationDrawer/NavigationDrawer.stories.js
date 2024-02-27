import lightTheme from '../../theme';
import { ThemeProvider } from '@mui/material';
import NavigationDrawer from './NavigationDrawer';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import GarageRoundedIcon from '@mui/icons-material/GarageRounded';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import SoupKitchenRoundedIcon from '@mui/icons-material/SoupKitchenRounded';

export default {
  component: NavigationDrawer,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryNavigationDrawer = {
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
        icon: <CottageRoundedIcon />,
      },
      {
        id: 2,
        title: 'Kitchen items',
        description: 'Click to edit description',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'johny1443',
        icon: <SoupKitchenRoundedIcon />,
      },
      {
        id: 3,
        title: 'School supplies',
        description: 'Click to edit description',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'dogs_with_kookie',
        icon: <SchoolRoundedIcon />,
      },
      {
        id: 4,
        title: 'Garage Items',
        description: 'Click to edit description',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'xxmariah_whitney_2009xx',
        icon: <GarageRoundedIcon />,
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
