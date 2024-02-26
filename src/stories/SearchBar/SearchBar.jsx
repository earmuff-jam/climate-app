import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, InputAdornment, TextField } from '@mui/material';

const useStyles = makeStyles()((theme) => {
  return {
    searchBar: {
      borderRadius: theme.spacing(1),
      border: theme.palette.primary.main,
      '& .MuiOutlinedInput-input': {
        padding: theme.spacing(1),
      },
    },
  };
});

const SearchBar = ({ label, placeholder, startIcon }) => {
  const { classes } = useStyles();

  return (
    <Box>
      <TextField
        label={label}
        placeholder={placeholder}
        className={classes.searchBar}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>{startIcon}</InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
