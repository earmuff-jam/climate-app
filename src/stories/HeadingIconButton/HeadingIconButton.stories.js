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
    icon: <AddRounded />,
    open: true,
    toggleOpen: () => {},
    value: "Pantry Items",
    handleChange: () => {},
    label: "Add a tag",
    variant: "outlined",
    primaryInputPropsIconButtonHandleClose: () => {},
    secondaryInputPropsIconButtonHandleClose: () => {},
  },
};

export const SecondaryHeadingIconButton = {
  args: {
    icon: <AddRounded />,
    open: true,
    toggleOpen: () => {},
    value: "Cup drawer ",
    handleChange: () => {},
    label: "Add category",
    variant: "outlined",
    primaryInputPropsIconButtonHandleClose: () => {},
    secondaryInputPropsIconButtonHandleClose: () => {},
  },
};
