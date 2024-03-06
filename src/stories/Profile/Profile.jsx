import React, { useState } from 'react';
import { Box } from '@mui/material';
import Heading from '../Heading/Heading';
import { makeStyles } from 'tss-react/mui';
import { CloseRounded, EditRounded } from '@mui/icons-material';
import EditCategoryDetails from '../Categories/EditCategoryDetails';
import ViewCategoryDetails from '../Categories/ViewCategoryDetails';
import EditProfileDetails from '../ProfileDetails/EditProfileDetails';
import ViewProfileDetails from '../ProfileDetails/ViewProfileDetails';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
    },
    itemContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
    },
  };
});

const Profile = ({ profileDetails, categories }) => {
  const { classes } = useStyles();

  const [editProfileMode, setEditProfileMode] = useState(false);
  const [editCategoriesMode, setEditCategoriesMode] = useState(false);

  return (
    <Box className={classes.container}>
      <Box>
        <Heading
          title={'User details'}
          titleVariant={'h3'}
          subtitle={'Edit your personal information'}
          subtitleVariant={'caption'}
          gutterBottom={false}
          editMode={editProfileMode}
          handleEditMode={() => setEditProfileMode(!editProfileMode)}
          editIconPrimary={<EditRounded />}
          editIconSecondary={<CloseRounded />}
        />
        {editProfileMode ? (
          <EditProfileDetails profileDetails={profileDetails} />
        ) : (
          <ViewProfileDetails profileDetails={profileDetails} />
        )}
      </Box>
      <Box className={classes.itemContainer}>
        <Heading
          title={'Edit Categories'}
          titleVariant={'h3'}
          subtitle={'Create or edit existing categories'}
          subtitleVariant={'caption'}
          gutterBottom={true}
          editMode={editCategoriesMode}
          handleEditMode={() => setEditCategoriesMode(!editCategoriesMode)}
          editIconPrimary={<EditRounded />}
          editIconSecondary={<CloseRounded />}
        />
        {editCategoriesMode ? (
          <EditCategoryDetails categories={categories} />
        ) : (
          <ViewCategoryDetails
            categories={categories}
            tableCaption={'List of categories'}
            subtitleVariant={'caption'}
          />
        )}
      </Box>
      <Box className={classes.itemContainer}>
        <Heading
          title={'Archived Categories'}
          titleVariant={'h3'}
          gutterBottom={false}
          subtitle={`${
            categories.filter((v) => v.isArchived).length || 0
          } archived categories`}
          subtitleVariant={'caption'}
        />
        <ViewCategoryDetails
          categories={categories}
          tableCaption={'List of archived categories'}
          subtitleVariant={'caption'}
        />
      </Box>
    </Box>
  );
};

export default Profile;
