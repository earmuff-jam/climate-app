import Tag from './Tag';
import dayjs from 'dayjs';
import { defaultTheme } from '../../theme';
import { ThemeProvider } from '@mui/material';
import {
  SchoolRounded,
  GarageRounded,
  CottageRounded,
  SoupKitchenRounded,
} from '@mui/icons-material';

export default {
  component: Tag,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryTag = {
  args: {
    tags: [
      {
        id: 1,
        title: 'headset',
        description: 'jabra headset for office use',
        color: 'black',
        tag: 'home',
        categories: [''],
        applyLimit: false, // apply limit will allow limit thresholds to be applied
        quantity: 1,
        lastUpdatedAt: dayjs().toDate(),
        lastUpdatedBy: 'dogs_with_kookie',
      },
      {
        id: 2,
        title: 'phone case',
        description: 'iphone 13 phone case',
        color: 'navyblue',
        tag: 'home',
        categories: [''],
        applyLimit: false,
        quantity: 1,
        lastUpdatedAt: dayjs().toDate(),
        lastUpdatedBy: 'xxgalleyGurlxx',
      },
      {
        id: 3,
        title: 'pearl harbor logo decor',
        description: 'pearl harbor logo decor in office bedroom',
        color: 'wooden grey',
        tag: 'home',
        categories: [''],
        applyLimit: false,
        quantity: 1,
        lastUpdatedAt: dayjs().toDate(),
        lastUpdatedBy: 'dogs_with_kookie',
      },
      {
        id: 4,
        title: 'sugar jar',
        description: 'with stronger lids',
        color: 'transparent',
        tag: 'home',
        categories: ['Pantry'],
        applyLimit: false,
        quantity: 1,
        lastUpdatedAt: dayjs().toDate(),
        lastUpdatedBy: 'xxgalleyGurlxx',
      },
      {
        id: 5,
        title: 'bedroom towels',
        description: 'long bedroom towels for guests',
        color: 'white',
        tag: 'home',
        categories: ['Laundry and Guest Closet', 'Cleaning Cupboard'],
        applyLimit: false,
        quantity: 1,
        lastUpdatedAt: dayjs().toDate(),
        lastUpdatedBy: 'xxgalleyGurlxx',
      },
    ],
  },
};
