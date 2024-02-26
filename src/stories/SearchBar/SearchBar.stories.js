import SearchBar from './SearchBar';
import { SearchRounded } from '@mui/icons-material';

export default {
  component: SearchBar,
};

export const PrimarySearchBar = {
  args: {
    label: 'Search',
    placeholder: 'Search through your active items',
    startIcon: <SearchRounded />,
  },
};
