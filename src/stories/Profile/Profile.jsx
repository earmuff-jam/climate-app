import { Box, Button } from '@mui/material';
import React from 'react';

const Profile = () => {
  return (
    <Box>
      Profile page
      <h2>Edit Profile Details</h2>
      <p>
        Users are encouraged to signup or login. Users are responsible for
        signing up / logging in. We display relevant information. Anonymous
        users are not allowed to create or delete tags && categories.
      </p>
      <h2>Edit Categories</h2>
      <p> wip on edit tag design </p>
      <Button>Save</Button>
      <Button>Cancel</Button>
      <h2>Display Archieved categories here</h2>
      <p> Sorry no matching records found if empty.</p>
    </Box>
  );
};

export default Profile;
