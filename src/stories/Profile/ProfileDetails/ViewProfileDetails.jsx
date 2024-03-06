import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Avatar, Box, InputAdornment, TextField } from '@mui/material';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'row',
      gap: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column',
      },
    },
    avatarContainer: {
      minHeight: theme.spacing(40),
      minWidth: theme.spacing(30),
      backgroundColor: theme.palette.grey[300],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatar: {
      height: theme.spacing(20),
      width: theme.spacing(20),
    },
    darkerText: {
      fontWeight: 'bold',
      fontSize: '0.825rem',
      color: theme.palette.common.black,
      alignSelf: 'flex-start',
    },
    fields: {
      display: 'flex',
      gap: theme.spacing(2),
      flexWrap: 'wrap',
    },
  };
});

const ViewProfileDetails = ({ profileDetails }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.avatarContainer}>
        <Avatar title='MP' className={classes.avatar} />
      </Box>
      <Box className={classes.fields}>
        {Object.values(profileDetails).map((v) => (
          <TextField
            key={v.name}
            className={classes.text}
            fullWidth={v.fullWidth}
            label={v.label}
            name={v.name}
            error={v.error}
            placeholder={v.label}
            value={v.value}
            required={v.required}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>{v.icon}</InputAdornment>
              ),
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ViewProfileDetails;
