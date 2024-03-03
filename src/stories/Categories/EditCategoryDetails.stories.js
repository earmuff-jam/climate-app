import dayjs from 'dayjs';
import lightTheme from '../../theme';
import { ThemeProvider } from '@mui/material';
import EditCategoryDetails from './EditCategoryDetails';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  component: EditCategoryDetails,
  decorators: [
    withRouter,
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryEditCategoryDetails = {
  args: {
    categories: [
      {
        id: 1,
        title: 'Pantry',
        description: 'kitchen pantry shelf items',
        to: '/categories',
        lastUpdatedAt: dayjs().toDate(),
        lastUpdatedBy: 'dogs_with_kookie',
      },
      {
        id: 2,
        title: 'Cleaning Cupboard',
        description: 'Cleaning supplies storage unit',
        to: '/categories',
        lastUpdatedAt: dayjs().toDate(),
        lastUpdatedBy: 'dogs_with_kookie',
      },
      {
        id: 3,
        title: 'Laundry and Guest Closet',
        description: 'Click to edit description',
        to: '/categories',
        lastUpdatedAt: dayjs().toDate(),
        lastUpdatedBy: 'dogs_with_kookie',
      },
    ],
  },
};
