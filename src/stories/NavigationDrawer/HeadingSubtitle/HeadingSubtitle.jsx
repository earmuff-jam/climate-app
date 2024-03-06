import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Typography } from '@mui/material';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      fontSize: '0.725rem',
    },
  };
});

const HeadingSubtitle = ({ text, subtitleVariant, gutterBottom }) => {
  const { classes } = useStyles();

  return (
    <Typography
      variant={subtitleVariant}
      gutterBottom={gutterBottom}
      className={classes.root}
    >
      {text}
    </Typography>
  );
};

export default HeadingSubtitle;
