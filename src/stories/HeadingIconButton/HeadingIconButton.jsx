import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { CheckRounded, CloseRounded } from '@mui/icons-material/';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';

const useStyles = makeStyles()((theme) => {
  return {
    text: {
      margin: theme.spacing(0, 2),
      '.MuiInputLabel-root ': {
        fontWeight: 'bolder',
        fontSize: '0.825rem',
      },
    },
    iconButtonContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: 5,
    },
    iconButton: {
      margin: theme.spacing(0),
      padding: theme.spacing(0.1),
    },
  };
});

const HeadingIconButton = ({
  icon,
  open,
  toggleOpen,
  value,
  handleChange,
  label,
  variant,
  primaryInputPropsIconButtonHandleClose,
  secondaryInputPropsIconButtonHandleClose,
}) => {
  const { classes } = useStyles();
  return open ? (
    <TextField
      classes={{ root: classes.text }}
      fullWidth
      value={value}
      label={label}
      variant={variant}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <Box className={classes.iconButtonContainer}>
              <IconButton
                className={classes.iconButton}
                onClick={primaryInputPropsIconButtonHandleClose}
              >
                <CheckRounded />
              </IconButton>
              <IconButton
                className={classes.iconButton}
                onClick={secondaryInputPropsIconButtonHandleClose}
              >
                <CloseRounded />
              </IconButton>
            </Box>
          </InputAdornment>
        ),
      }}
    />
  ) : (
    <IconButton onClick={toggleOpen}>{icon}</IconButton>
  );
};

export default HeadingIconButton;
