import { Box, Dialog } from '@mui/material';
import React from 'react';
import Title from './Title';
import AddItemDetail from '../AddItem/AddItemDetail';

const DialogComponent = ({ title, display, setDisplay }) => {
  return (
    <Box>
      {display && (
        <Dialog open width={'md'} fullWidth={true}>
          <Title onClose={() => setDisplay(0)}>{title}</Title>
          <AddItemDetail onClose={() => setDisplay(false)} />
        </Dialog>
      )}
    </Box>
  );
};

export default DialogComponent;
