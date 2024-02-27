import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  ListItemText,
  Box,
} from "@mui/material";

import dayjs from 'dayjs';
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => {
  return {
    buttonRoot: {
      minWidth: theme.spacing(4),
    },
    link: {
      color: theme.palette.common.black,
    },
  };
});

const NavigationDrawerListItem = ({
  item,
  drawerOpen,
  retainDisplayTextField,
}) => {
  const { classes } = useStyles();
  const { id, title, description, icon, lastUpdatedAt, lastUpdatedBy, to } =
    item;

  let secondaryText = description;
  if (!retainDisplayTextField && drawerOpen) {
    secondaryText = (
      <>
        <Typography
          sx={{ display: "inline" }}
          component="span"
          variant="caption"
        >
          {lastUpdatedBy}{" "}
        </Typography>

        <Typography
          sx={{ display: "inline" }}
          component="span"
          variant="caption"
        >
          - {dayjs(lastUpdatedAt).fromNow()}
        </Typography>
      </>
    );
  }

  return (
    <ListItem key={id} component={Link} to={to} disablePadding>
      <ListItemButton>
        <ListItemIcon classes={{ root: classes.buttonRoot }}>
          {icon}
        </ListItemIcon>
        {drawerOpen && (
          <ListItemText
            classes={{ primary: classes.link }}
            primary={title}
            secondary={secondaryText}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};

export default NavigationDrawerListItem;
