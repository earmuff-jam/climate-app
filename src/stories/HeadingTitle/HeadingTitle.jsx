import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, Typography } from '@mui/material';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      fontSize: theme.spacing(4),
      color: theme.palette.primary.main,
    },
  };
});

const HeadingTitle = ({ title }) => {
  const { classes } = useStyles();
  return (
    <Box>
      <Typography className={classes.root}>{title}</Typography>
    </Box>
  );
};

export default HeadingTitle;
