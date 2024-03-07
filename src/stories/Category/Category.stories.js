import Category from './Category';
import dayjs from 'dayjs';
import { defaultTheme } from '../../theme';
import { ThemeProvider } from '@mui/material';

export default {
  component: Category,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryCategory = {
  args: {
    categories: [
      {
        id: 1,
        title: 'salt',
        description: 'iodine salt',
        color: 'black',
        categories: ['Pantry'],
        applyLimit: true, // apply limit will allow limit thresholds to be applied
        limitQuantity: 1,
        limitQuantityMeasurement: 'kg',
        quantity: 1,
        quantityMeasurement: 'kg',
        shouldAlert: false,
        lastUpdatedAt: dayjs().toDate(),
        lastUpdatedBy: 'dogs_with_kookie',
      },
      {
        id: 2,
        title: 'sugar',
        description: 'granulized sugar raw',
        color: 'transparent',
        categories: ['Pantry'],
        applyLimit: true, // apply limit will allow limit thresholds to be applied
        limitQuantity: 1,
        limitQuantityMeasurement: 'pkt',
        quantity: 1,
        quantityMeasurement: 'pkt',
        shouldAlert: false,
        lastUpdatedAt: dayjs().toDate(),
        lastUpdatedBy: 'dogs_with_kookie',
      },
      {
        id: 3,
        title: 'potato',
        description: 'red potatoes',
        color: 'red',
        categories: ['Pantry'],
        applyLimit: true, // apply limit will allow limit thresholds to be applied
        limitQuantity: 1,
        limitQuantityMeasurement: 'pkt',
        quantity: 1,
        quantityMeasurement: 'pkt',
        shouldAlert: false,
        lastUpdatedAt: dayjs().toDate(),
        lastUpdatedBy: 'dogs_with_kookie',
      },
    ],
  },
};
