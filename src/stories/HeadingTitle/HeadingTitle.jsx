import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, Typography } from '@mui/material';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '2.125rem',
      fontFamily: 'Poppins, sans-serif',
      color: theme.palette.primary.main,
    },
  };
});

const HeadingTitle = ({ title }) => {
  const { classes } = useStyles();
  return (
    <Box>
      <Typography variant='h3' className={classes.root}>
        {title}
      </Typography>
    </Box>
  );
};

export default HeadingTitle;
