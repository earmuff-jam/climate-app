import { Box } from '@mui/material';
import React from 'react';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import HeadingSubtitle from '../HeadingSubtitle/HeadingSubtitle';

const Heading = ({ title, subtitle }) => {
  return (
    <Box>
      <HeadingTitle title={title} />
      <HeadingSubtitle text={subtitle} />
    </Box>
  );
};

export default Heading;
