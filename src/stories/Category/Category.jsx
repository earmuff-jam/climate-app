import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import ViewCategoryDetails from '../Profile/Categories/ViewCategoryDetails';
import Heading from '../NavigationDrawer/Heading/Heading';
import { useParams } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import DialogComponent from '../Dialog/Dialog';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
    },
    button: {
      alignSelf: 'flex-start',
    },
  };
});

const Category = ({ categories }) => {
  const { id } = useParams();
  const { classes } = useStyles();
  const [selected, setSelected] = useState(0);
  const [editMode, setEditMode] = useState(false);

  const handleClick = () => setEditMode(!editMode);

  return (
    <Box className={classes.container}>
      <Heading
        title={'All Items'}
        titleVariant={'h3'}
        subtitle={`View items associated with ${id}`}
        subtitleVariant={'caption'}
        gutterBottom={true}
      />
      <ViewCategoryDetails
        categories={categories}
        tableCaption={`${categories.length} total items`}
        subtitleVariant={'caption'}
      />
      <Button className={classes.button} onClick={handleClick}>
        Add Item
      </Button>
      {editMode ? (
        <DialogComponent
          title={'Add new item'}
          display={editMode}
          setDisplay={setEditMode}
        />
      ) : null}
    </Box>
  );
};

export default Category;
