import SearchBar from './SearchBar';
import lightTheme from '../../theme';
import { ThemeProvider } from '@mui/material';
import { SearchRounded } from '@mui/icons-material';

export default {
  component: SearchBar,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimarySearchBar = {
  args: {
    label: 'Search',
    placeholder: 'Search through your active items',
    startIcon: <SearchRounded />,
  },
};
