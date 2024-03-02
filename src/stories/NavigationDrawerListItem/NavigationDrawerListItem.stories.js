import lightTheme from "../../theme";
import { ThemeProvider } from "@mui/material";
import NavigationDrawerListItem from "./NavigationDrawerListItem";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";

export default {
  component: NavigationDrawerListItem,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryNavigationDrawerListItemDrawerOpen = {
  args: {
    item: {
      id: 1,
      title: "Home items",
      description: "home related stuffs..",
      lastUpdatedAt: "use day.js",
      lastUpdatedBy: "dogs_with_kookie",
      icon: <CottageRoundedIcon />,
    },
    retainDisplayTextField: true,
    drawerOpen: true,
  },
};
export const PrimaryNavigationDrawerListItemDrawerClosed = {
  args: {
    item: {
      id: 1,
      title: "Home items",
      description: "home related stuffs..",
      lastUpdatedAt: "use day.js",
      lastUpdatedBy: "dogs_with_kookie",
      icon: <CottageRoundedIcon />,
    },
    retainDisplayTextField: true,
    drawerOpen: false,
  },
};
