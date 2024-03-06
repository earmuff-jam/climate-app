import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import {
  SchoolRounded,
  GarageRounded,
  CottageRounded,
  SoupKitchenRounded,
  PersonRounded,
  FaceRounded,
  TodayRounded,
  WcRounded,
} from "@mui/icons-material";

import dayjs from "dayjs";
import HomePage from "./stories/Home/HomePage";
import Profile from "./stories/Profile/Profile";
import { useGetVersionDetailsQuery } from "./services/version";
import NavigationDrawer from "./stories/NavigationDrawer/NavigationDrawer";

const App = () => {
  const theme = useTheme();
  const matchesSmOrLarger = useMediaQuery(theme.breakpoints.up("sm"));
  const { data, error, isLoading } = useGetVersionDetailsQuery();
  console.log(data, error, isLoading);

  const [drawerOpen, setDrawerOpen] = useState(matchesSmOrLarger && true);

  const handleDrawerClose = () => setDrawerOpen(false);
  const handleDrawerOpen = () => matchesSmOrLarger && setDrawerOpen(true);

  const navigationDrawerProps = {
    tags: [
      {
        id: 1,
        title: "Home items",
        description: "home related stuffs..",
        to: "/",
        lastUpdatedAt: dayjs().toDate(),
        lastUpdatedBy: "dogs_with_kookie",
        icon: <CottageRounded />,
      },
      {
        id: 2,
        title: "Kitchen items",
        description: "Click to edit description",
        to: "/kitchen",
        lastUpdatedAt: dayjs().toDate(),
        lastUpdatedBy: "johny1443",
        icon: <SoupKitchenRounded />,
      },
      {
        id: 3,
        title: "Bedroom items",
        description: "Click to edit description",
        to: "/school",
        lastUpdatedAt: dayjs().toDate(),
        lastUpdatedBy: "dogs_with_kookie",
        icon: <SchoolRounded />,
      },
      {
        id: 4,
        title: "Garage items",
        description: "Click to edit description",
        to: "/garage",
        lastUpdatedAt: dayjs().toDate(),
        lastUpdatedBy: "xxmariah_whitney_2009xx",
        icon: <GarageRounded />,
      },
    ],
    categories: [
      {
        id: 1,
        title: "Pantry",
        description: "kitchen pantry shelf items",
        to: "/categories",
        lastUpdatedAt: dayjs().toDate(),
        lastUpdatedBy: "dogs_with_kookie",
      },
      {
        id: 2,
        title: "Cleaning Cupboard",
        description: "Cleaning supplies storage unit",
        to: "/categories",
        lastUpdatedAt: dayjs().toDate(),
        lastUpdatedBy: "dogs_with_kookie",
      },
      {
        id: 3,
        title: "Laundry and Guest Closet",
        description: "Click to edit description",
        to: "/categories",
        lastUpdatedAt: dayjs().toDate(),
        lastUpdatedBy: "dogs_with_kookie",
      },
    ],
  };

  const profileDetailsProps = {
    firstname: {
      label: "firstname",
      name: "firstname",
      value: "John",
      required: true,
      fullWidth: true,
      icon: <PersonRounded />,
      error: false,
      errorMsg: "",
      validators: [],
    },
    lastname: {
      label: "lastname",
      name: "lastname",
      value: "Doe",
      required: true,
      fullWidth: true,
      icon: <PersonRounded />,
      error: false,
      errorMsg: "",
      validators: [],
    },
    username: {
      label: "username",
      name: "username",
      value: "johnny_1996",
      required: true,
      fullWidth: true,
      icon: <FaceRounded />,
      error: false,
      errorMsg: "",
      validators: [],
    },
    dob: {
      label: "dob",
      name: "dob",
      value: "1996/12/12",
      required: true,
      fullWidth: true,
      icon: <TodayRounded />,
      error: false,
      errorMsg: "",
      validators: [],
    },
    gender: {
      label: "gender",
      name: "gender",
      value: "Prefer not to answer",
      required: true,
      fullWidth: true,
      icon: <WcRounded />,
      error: false,
      errorMsg: "",
      validators: [],
    },
  };

  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
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
            <Route exact path="/" element={<HomePage />} />
            <Route
              path="/tag"
              element={<Box>list of tag related stuffs here</Box>}
            />
            <Route
              path="/categories"
              element={<Box>list of category related stuff here</Box>}
            />
            <Route
              path="/profile"
              element={
                <Profile
                  categories={navigationDrawerProps.categories}
                  profileDetails={profileDetailsProps}
                />
              }
            />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default App;
