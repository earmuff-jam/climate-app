import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { CloseRounded } from '@mui/icons-material';
import { Box, IconButton, Typography, DialogTitle } from '@mui/material';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign: 'center',
      alignItems: 'center',
    },
    text: {
      fontWeight: 'bolder',
      textTransform: 'uppercase',
      fontSize: '0.975rem',
    },
    errorButton: {
      color: theme.palette.error.dark,
    },
  };
});

const Title = (props) => {
  const { classes } = useStyles();
  const { children, className, onClose, ...other } = props;
  return (
    <DialogTitle {...other}>
      <Box className={classes.container}>
        <Typography className={classes.text}>{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label='close'
            onClick={onClose}
            className={classes.errorButton}
          >
            <CloseRounded />
          </IconButton>
        ) : null}
      </Box>
    </DialogTitle>
  );
};

export default Title;
