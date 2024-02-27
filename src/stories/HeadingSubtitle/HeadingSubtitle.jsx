import React from 'react';
import { Box, Typography } from '@mui/material';

const HeadingSubtitle = ({ text }) => {
  return (
    <Box>
      <Typography variant='caption'>{text}</Typography>
    </Box>
  );
};

export default HeadingSubtitle;
