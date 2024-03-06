import React from "react";
import { IconButton } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";

const HeadingClosed = ({ drawerOpen, handleDrawerOpen }) => {
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="start"
      sx={{
        marginRight: 5,
        px: 3,
        ...(drawerOpen && { display: "none" }),
      }}
    >
      <MenuRounded />
    </IconButton>
  );
};

export default HeadingClosed;
