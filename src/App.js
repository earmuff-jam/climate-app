import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  SchoolRounded,
  GarageRounded,
  CottageRounded,
  SoupKitchenRounded,
} from '@mui/icons-material';

import HomePage from './stories/Home/HomePage';
import Profile from './stories/Profile/Profile';
import { useGetVersionDetailsQuery } from './services/version';
import { Box, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import NavigationDrawer from './stories/NavigationDrawer/NavigationDrawer';

const App = () => {
  const theme = useTheme();
  const matchesSmOrLarger = useMediaQuery(theme.breakpoints.up('sm'));
  const { data, error, isLoading } = useGetVersionDetailsQuery();
  console.log(data, error, isLoading);

  const [drawerOpen, setDrawerOpen] = useState(matchesSmOrLarger && true);

  const handleDrawerClose = () => setDrawerOpen(false);
  const handleDrawerOpen = () => matchesSmOrLarger && setDrawerOpen(true);

  const navigationDrawerProps = {
    tags: [
      {
        id: 1,
        title: 'Home items',
        description: 'home related stuffs..',
        to: '/tag',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'dogs_with_kookie',
        icon: <CottageRounded />,
      },
      {
        id: 2,
        title: 'Kitchen items',
        description: 'Click to edit description',
        to: '/tag',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'johny1443',
        icon: <SoupKitchenRounded />,
      },
      {
        id: 3,
        title: 'Bedroom items',
        description: 'Click to edit description',
        to: '/tag',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'dogs_with_kookie',
        icon: <SchoolRounded />,
      },
      {
        id: 4,
        title: 'Garage items',
        description: 'Click to edit description',
        to: '/tag',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'xxmariah_whitney_2009xx',
        icon: <GarageRounded />,
      },
    ],
    categories: [
      {
        id: 1,
        title: 'Pantry',
        description: 'kitchen pantry shelf items',
        to: '/categories',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'dogs_with_kookie',
      },
      {
        id: 2,
        title: 'Cleaning Cupboard',
        description: 'Cleaning supplies storage unit',
        to: '/categories',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'dogs_with_kookie',
      },
      {
        id: 3,
        title: 'Laundry and Guest Closet',
        description: 'Click to edit description',
        to: '/categories',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'dogs_with_kookie',
      },
    ],
  };

  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <NavigationDrawer
          drawerOpen={drawerOpen}
          handleDrawerClose={handleDrawerClose}
          handleDrawerOpen={handleDrawerOpen}
          tags={navigationDrawerProps.tags}
          categories={navigationDrawerProps.categories}
        />
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
            <Route
              path='/tag'
              element={<Box>list of tag related stuffs here</Box>}
            />
            <Route
              path='/categories'
              element={<Box>list of category related stuff here</Box>}
            />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default App;
