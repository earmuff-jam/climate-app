import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  SchoolRounded,
  GarageRounded,
  CottageRounded,
  SoupKitchenRounded,
} from '@mui/icons-material';

import { useGetVersionDetailsQuery } from './services/version';
import { Box, CssBaseline, useMediaQuery, useTheme } from '@mui/material';
import NavigationDrawer from './stories/NavigationDrawer/NavigationDrawer';
import LandingPage from './stories/Home/LandingPage';

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
        to: '/',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'dogs_with_kookie',
        icon: <CottageRounded />,
      },
      {
        id: 2,
        title: 'Kitchen items',
        description: 'Click to edit description',
        to: '/kitchen',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'johny1443',
        icon: <SoupKitchenRounded />,
      },
      {
        id: 3,
        title: 'School supplies',
        description: 'Click to edit description',
        to: '/school',
        lastUpdatedAt: 'use day.js',
        lastUpdatedBy: 'dogs_with_kookie',
        icon: <SchoolRounded />,
      },
      {
        id: 4,
        title: 'Garage Items',
        description: 'Click to edit description',
        to: '/garage',
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
            <Route exact path='/' element={<LandingPage />} />
            <Route path='/kitchen' element={<Box>kitchen</Box>} />
            <Route path='/garage' element={<Box>garage</Box>} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default App;
