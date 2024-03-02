import lightTheme from "../../theme";
import { ThemeProvider } from "@mui/material";
import { AddRounded } from "@mui/icons-material";
import HeadingIconButton from "./HeadingIconButton";

export default {
  component: HeadingIconButton,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryHeadingIconButton = {
  args: {
    icon: AddRounded,
  },
};
