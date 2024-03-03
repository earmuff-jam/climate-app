import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Box, IconButton } from '@mui/material';
import HeadingTitle from '../HeadingTitle/HeadingTitle';
import HeadingSubtitle from '../HeadingSubtitle/HeadingSubtitle';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    icon: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  };
});

const Heading = ({
  title,
  subtitle,
  titleVariant,
  subtitleVariant,
  gutterBottom,
  editMode,
  handleEditMode,
  editIconPrimary,
  editIconSecondary,
}) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Box>
        <HeadingTitle title={title} titleVariant={titleVariant} />
        <HeadingSubtitle
          text={subtitle}
          subtitleVariant={subtitleVariant}
          gutterBottom={gutterBottom}
        />
      </Box>
      <Box>
        <IconButton onClick={handleEditMode} className={classes.icon}>
          {editMode ? editIconSecondary : editIconPrimary}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Heading;
