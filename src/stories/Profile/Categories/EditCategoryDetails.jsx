import React, { useEffect, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { SaveRounded } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';

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

const EditCategoryDetails = ({ categories }) => {
  const { classes } = useStyles();
  const [formattedCategories, setFormattedCategories] = useState([]);

  const handleAddCategory = () => {
    const isError = Boolean(
      formattedCategories.filter(
        (v) => v.errorMsg.length > 0 || v.value.length <= 0
      ).length
    );
    if (isError) {
      console.log('error');
      return;
    }
    const draftCategory = {
      fullWidth: true,
      label: 'Add new category',
      name: '',
      error: false,
      errorMsg: '',
      value: '',
      placeholder: 'Add new category',
      required: false,
      variant: 'standard',
    };
    setFormattedCategories([...formattedCategories, draftCategory]);
  };

  useEffect(() => {
    if (Array.isArray(categories)) {
      const draftCategories = categories.map((v) => ({
        ...v,
        fullWidth: true,
        label: v.title,
        name: v.title,
        error: false,
        errorMsg: '',
        value: v.title,
        placeholder: v.description,
        required: false,
        variant: 'standard',
      }));
      setFormattedCategories([...draftCategories]);
    }
  }, [categories]);

  return (
    <Box>
      <Box className={classes.container}>
        <Box className={classes.fields}>
          {Object.values(formattedCategories).map((v, index) => (
            <TextField
              key={index}
              className={classes.text}
              fullWidth={v.fullWidth}
              label={v.label}
              name={v.name}
              error={v.error}
              placeholder={v.placeholder}
              value={v.value}
              required={v.required}
              variant={v.variant}
            />
          ))}
        </Box>
        <Box className={classes.buttonContainer}>
          <Button onClick={handleAddCategory} endIcon={<SaveRounded />}>
            {'Add category'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditCategoryDetails;
