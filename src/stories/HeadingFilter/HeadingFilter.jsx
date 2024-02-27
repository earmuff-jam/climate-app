import React from 'react';
import { IconButton } from '@mui/material';
import { ContactPageRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const HeadingFilter = ({ redirect = false }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    !redirect && navigate('/profile');
  };

  return (
    <IconButton onClick={handleRedirect}>
      <ContactPageRounded />
    </IconButton>
  );
};

export default HeadingFilter;
