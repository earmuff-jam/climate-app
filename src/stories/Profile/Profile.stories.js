import dayjs from "dayjs";
import Profile from "./Profile";
import { defaultTheme } from "../../theme";
import { ThemeProvider } from "@mui/material";
import { FaceRounded, PersonRounded, TodayRounded, WcRounded } from "@mui/icons-material";

export default {
  component: Profile,
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryProfile = {
  args: {
    profileDetails: {
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
    },
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
  },
};
