import React from 'react';
import { Box } from '@mui/material';
import Heading from '../Heading/Heading';
import SearchBar from '../SearchBar/SearchBar';
import { SearchRounded } from '@mui/icons-material';

const SearchTitleBar = () => {
  const test = 'test';
  console.log(test);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Heading title={'Climate'} subtitle={'Simple Inventory Management'} />
      <SearchBar
        label={''}
        placeholder={'Search'}
        startIcon={<SearchRounded />}
      />
    </Box>
  );
};

export default SearchTitleBar;
