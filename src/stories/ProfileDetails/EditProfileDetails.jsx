import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { SaveRounded } from '@mui/icons-material';
import { Box, InputAdornment, TextField, Button } from '@mui/material';

const useStyles = makeStyles()((theme) => {
  return {
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: theme.spacing(2),
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(1),
    },
    fields: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
    },
    text: {
      fontWeight: 'bold',
      fontSize: '1.825rem',
      fontFamily: 'Poppins, sans-serif',
      color: theme.palette.common.black,
      alignSelf: 'flex-start',
    },
  };
});

const EditProfileDetails = ({ profileDetails }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
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
      <Box className={classes.buttonContainer}>
        {[
          {
            id: 1,
            title: 'save',
            onClick: () => {},
            icon: <SaveRounded />,
          },
        ].map((v) => (
          <Button onClick={v.onClick()} endIcon={v.icon}>
            {v.title}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default EditProfileDetails;
