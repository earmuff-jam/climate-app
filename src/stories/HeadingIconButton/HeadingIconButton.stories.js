import lightTheme from '../../theme';
import { ThemeProvider } from '@mui/material';
import { AddRounded } from '@mui/icons-material';
import HeadingIconButton from './HeadingIconButton';

export default {
  component: HeadingIconButton,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const AddTagHeadingIconButton = {
  args: {
    icon: AddRounded,
    open: true,
    toggleOpen: () => {},
    value: 'Pantry Items',
    handleChange: () => {},
    label: 'Add a tag',
    variant: 'outlined',
    primaryInputPropsIconButtonHandleClose: () => {},
    secondaryInputPropsIconButtonHandleClose: () => {},
  },
};

export const AddCategoryHeadingIconButton = {
  args: {
    icon: AddRounded,
    open: true,
    toggleOpen: () => {},
    value: 'Pantry Cup Rack',
    handleChange: () => {},
    label: 'Add a category',
    variant: 'outlined',
    primaryInputPropsIconButtonHandleClose: () => {},
    secondaryInputPropsIconButtonHandleClose: () => {},
  },
};
