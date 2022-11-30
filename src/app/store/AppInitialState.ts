import { AppState } from './AppState';

export const appInitialState: AppState = {
  loading: {
    show: false,
  },
  login: {
    error: null,
    isLoggedIn: false,
    isLoggingIn: false,
  },
  register: {
    error: null,
    isRegistered: false,
    isRegistering: false,
  },
};
