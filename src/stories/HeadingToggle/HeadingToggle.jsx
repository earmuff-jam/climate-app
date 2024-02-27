import React from 'react';
import { IconButton } from '@mui/material';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const HeadingToggle = ({ drawerOpen, handleDrawerClose }) => {
  return (
    <IconButton onClick={handleDrawerClose}>
      {!drawerOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    </IconButton>
  );
};

export default HeadingToggle;
