import React from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  ListItemText,
  Avatar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    buttonRoot: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '0.985rem',
      color: theme.palette.secondary.main,
    },
    categoryIcon: {
      padding: theme.spacing(0),
      margin: theme.spacing(0),
    },
    generalText: {
      fontSize: '0.625rem',
      color: theme.palette.common.black,
    },
    drawerRoot: {
      '& .MuiListItemText-root ': {
        padding: 0,
        margin: 0,
      },
    },
    titleText: {
      fontSize: '0.925rem',
      color: theme.palette.common.black,
    },
    rootAvatar: {
      width: '2rem',
      height: '2rem',
      color: theme.palette.titleTextPrimary.main,
      backgroundColor: theme.palette.secondary.main,
    },
  };
});

const NavigationDrawerListItem = ({ item, drawerOpen, isCategory }) => {
  const { classes } = useStyles();
  const { id, title, description, icon, lastUpdatedAt, lastUpdatedBy, to } =
    item;
  return (
    <ListItem
      key={id}
      component={Link}
      to={to}
      disablePadding
      dense
      classes={{ root: classes.drawerRoot }}
    >
      <ListItemButton>
        <ListItemIcon classes={{ root: classes.buttonRoot }}>
          {icon || (
            <Avatar classes={{ root: classes.rootAvatar }}>{title[0]}</Avatar>
          )}
        </ListItemIcon>
        {drawerOpen ? (
          <ListItemText
            classes={{
              primary: classes.titleText,
              secondary: classes.generalText,
            }}
            primary={title}
            secondary={
              isCategory ? (
                description
              ) : (
                <>
                  <Typography
                    className={classes.generalText}
                    variant='caption'
                    disableGutters
                  >
                    {description}
                  </Typography>
                  <br />
                  <Typography
                    className={classes.generalText}
                    variant='caption'
                    disableGutters
                  >
                    {lastUpdatedBy}{' '}
                  </Typography>
                  <Typography
                    className={classes.generalText}
                    variant='caption'
                    disableGutters
                  >
                    - {lastUpdatedAt}
                  </Typography>
                </>
              )
            }
          />
        ) : null}
      </ListItemButton>
    </ListItem>
  );
};

export default NavigationDrawerListItem;
