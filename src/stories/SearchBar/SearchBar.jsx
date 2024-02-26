import { TextField } from '@mui/material';
import React from 'react';

export const SearchBar = ({ label, placeholder }) => (
  <div>
    <TextField label={label} placeholder={placeholder} />
  </div>
);
