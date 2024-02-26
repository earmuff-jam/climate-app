import React from 'react';
import { Box } from '@mui/material';
import { useGetVersionDetailsQuery } from './services/version';
import SearchTitleBar from './stories/SearchTitleBar/SearchTitleBar';

const App = () => {
  const { data, error, isLoading } = useGetVersionDetailsQuery();

  console.log(data, error, isLoading);
  return (
    <Box>
      <SearchTitleBar />
    </Box>
  );
};

export default App;
