import React from 'react';
import { makeStyles } from 'tss-react/mui';
import MuiDrawer from '@mui/material/Drawer';
import {
  Box,
  List,
  Divider,
  styled,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import Heading from '../Heading/Heading';
import HeadingFilter from '../HeadingFilter/HeadingFilter';
import HeadingToggle from '../HeadingToggle/HeadingToggle';
import NavigationDrawerTitle from '../NavigationDrawerTitle/NavigationDrawerTitle';
import NavigationDrawerListItem from '../NavigationDrawerListItem/NavigationDrawerListItem';

import HeadingClosed from '../HeadingClosed/HeadingClosed';
import { ArrowDropDownCircleRounded } from '@mui/icons-material';

const drawerWidth = 300;

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: drawerWidth,
      flexShrink: theme.spacing(0),
      [`& .MuiDrawer-paper`]: {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    },
    accordion: {
      margin: theme.spacing(0),
      '&.Mui-expanded': {
        margin: theme.spacing(0),
      },
      '& .MuiAccordion-root': {
        '&.Mui-expanded': {
          margin: theme.spacing(0),
        },
      },
    },
    root: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.secondary,
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    list: {
      padding: theme.spacing(0),
    },
    accordionDetails: {
      padding: theme.spacing(0),
    },
  };
});

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const NavigationDrawer = ({
  tags,
  categories,
  drawerOpen,
  handleDrawerOpen,
  handleDrawerClose,
}) => {
  const { classes } = useStyles();

  return (
    <>
      <Drawer variant={'permanent'} open={drawerOpen}>
        <Box className={classes.root}>
          {drawerOpen ? (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 3,
              }}
            >
              <Heading
                title={'Climate'}
                titleVariant={'h3'}
                subtitle={'Simple Inventory Management'}
                subtitleVariant={'caption'}
              />
              <Box>
                <HeadingFilter />
                <HeadingToggle
                  drawerOpen={drawerOpen}
                  handleDrawerClose={handleDrawerClose}
                />
              </Box>
            </Box>
          ) : (
            <HeadingClosed
              drawerOpen={drawerOpen}
              handleDrawerOpen={handleDrawerOpen}
            />
          )}
        </Box>
        <Divider />
        <Box sx={{ overflow: 'auto' }}>
          {drawerOpen ? (
            <NavigationDrawerTitle title={'tags'} hideAddOn={true} />
          ) : null}
          <List className={classes.list}>
            {tags.map((tag, index) => (
              <NavigationDrawerListItem
                key={index}
                item={tag}
                isCategory={false}
                drawerOpen={drawerOpen}
              />
            ))}
          </List>
          <Divider />
          {drawerOpen ? (
            <Accordion
              defaultExpanded
              className={classes.accordion}
              disableGutters
            >
              <AccordionSummary expandIcon={<ArrowDropDownCircleRounded />}>
                <NavigationDrawerTitle title={'categories'} hideAddOn={true} />
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                <List>
                  {categories.map((category, index) => (
                    <NavigationDrawerListItem
                      key={index}
                      item={category}
                      drawerOpen={drawerOpen}
                      isCategory={true}
                    />
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ) : (
            <List>
              {categories.map((category, index) => (
                <NavigationDrawerListItem
                  key={index}
                  item={category}
                  drawerOpen={drawerOpen}
                  isCategory={true}
                />
              ))}
            </List>
          )}
        </Box>
      </Drawer>
    </>
  );
};

export default NavigationDrawer;
