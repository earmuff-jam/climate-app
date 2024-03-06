import lightTheme from '../../../theme';
import { ThemeProvider } from '@mui/material';
import ViewProfileDetails from './ViewProfileDetails';
import {
  FaceRounded,
  PersonRounded,
  TodayRounded,
  WcRounded,
} from '@mui/icons-material';

export default {
  component: ViewProfileDetails,
  decorators: [
    (Story) => (
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const PrimaryViewProfileDetails = {
  args: {
    profileDetails: {
      firstname: {
        label: 'firstname',
        name: 'firstname',
        value: 'John',
        required: true,
        fullWidth: true,
        icon: <PersonRounded />,
        error: false,
        errorMsg: '',
        validators: [],
      },
      lastname: {
        label: 'lastname',
        name: 'lastname',
        value: 'Doe',
        required: true,
        fullWidth: true,
        icon: <PersonRounded />,
        error: false,
        errorMsg: '',
        validators: [],
      },
      username: {
        label: 'username',
        name: 'username',
        value: 'johnny_1996',
        required: true,
        fullWidth: true,
        icon: <FaceRounded />,
        error: false,
        errorMsg: '',
        validators: [],
      },
      dob: {
        label: 'dob',
        name: 'dob',
        value: '1996/12/12',
        required: true,
        fullWidth: true,
        icon: <TodayRounded />,
        error: false,
        errorMsg: '',
        validators: [],
      },
      gender: {
        label: 'gender',
        name: 'gender',
        value: 'Prefer not to answer',
        required: true,
        fullWidth: true,
        icon: <WcRounded />,
        error: false,
        errorMsg: '',
        validators: [],
      },
    },
  },
};
