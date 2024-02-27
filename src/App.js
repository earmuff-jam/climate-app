import React from 'react';
import { Box, Container } from '@mui/material';
import { useGetVersionDetailsQuery } from './services/version';
import SearchTitleBar from './stories/SearchTitleBar/SearchTitleBar';

const App = () => {
  const { data, error, isLoading } = useGetVersionDetailsQuery();

  console.log(data, error, isLoading);
  return (
    <Container maxWidth='xl'>
      <SearchTitleBar />
    </Container>
  );
};

export default App;
