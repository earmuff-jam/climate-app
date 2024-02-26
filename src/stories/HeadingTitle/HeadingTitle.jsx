import React from 'react';
import { Box, Typography } from '@mui/material';

const HeadingTitle = ({ title }) => {
  return (
    <Box>
      <Typography variant='h5'>{title}</Typography>
    </Box>
  );
};

export default HeadingTitle;
