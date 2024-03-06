import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, Typography } from '@mui/material';
import { AddRounded } from '@mui/icons-material';
import HeadingIconButton from '../HeadingIconButton/HeadingIconButton';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    text: {
      marginTop: theme.spacing(1),
      fontWeight: 'bolder',
      fontSize: '0.825rem',
      textTransform: 'uppercase',
      paddingLeft: theme.spacing(2),
    },
    primaryColor: {
      color: theme.palette.primary.main,
    },
  };
});

const NavigationDrawerTitle = ({
  title,
  iconButtonLabel,
  hideAddOn = false,
}) => {
  const { classes } = useStyles();

  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const submit = () => {
    // submit to db
    setOpen(false);
  };

  return (
    <Box className={classes.root}>
      <Typography className={[classes.text, classes.primaryColor].join(' ')}>
        {title}
      </Typography>
      {!hideAddOn && (
        <HeadingIconButton
          className={iconButtonLabel}
          open={open}
          value={name}
          label={iconButtonLabel}
          variant={'standard'}
          handleChange={handleChange}
          toggleOpen={toggleOpen}
          icon={<AddRounded />}
          primaryInputPropsIconButtonHandleClose={submit}
          secondaryInputPropsIconButtonHandleClose={handleClose}
        />
      )}
    </Box>
  );
};

export default NavigationDrawerTitle;
