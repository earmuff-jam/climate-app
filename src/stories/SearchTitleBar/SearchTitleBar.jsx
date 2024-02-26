import React from 'react';
import { Box } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';
import { SearchRounded } from '@mui/icons-material';
import HeadingTitle from '../HeadingTitle/HeadingTitle';

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
      <HeadingTitle title={'Climate'} />
      <SearchBar
        label={''}
        placeholder={'Search'}
        startIcon={<SearchRounded />}
      />
    </Box>
  );
};

export default SearchTitleBar;
