import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, Typography } from '@mui/material';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      fontWeight: 'bold',
      fontSize: '1.825rem',
      fontFamily: 'Poppins, sans-serif',
      alignSelf: 'flex-start',
    },
  };
});

const HeadingTitle = ({ title, titleVariant }) => {
  const { classes } = useStyles();
  return (
    <Box>
      <Typography variant={titleVariant} className={classes.root}>
        {title}
      </Typography>
    </Box>
  );
};

export default HeadingTitle;
