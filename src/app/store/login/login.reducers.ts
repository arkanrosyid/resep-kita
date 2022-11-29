import { appInitialState } from './../AppInitialState';
import { login, loginSuccess, loginFail } from './login.actions';
import { createReducer, on } from '@ngrx/store';
import { LoginState } from './loginState';

const initialState: LoginState = appInitialState.login;

const reducer = createReducer(
  initialState,
  on(login, (currentState) => ({
    ...currentState,
    error: null,
    isLoggedIn: false,
    isLoggingIn: true,
  })),
  on(loginSuccess, (currentState) => ({
    ...currentState,
    isLoggedIn: true,
    isLoggingIn: false,
  })),
  on(loginFail, (currentState, action) => ({
    ...currentState,
    error: action.error,
    isLoggedIn: false,
    isLoggingIn: false,
  }))
);

export const loginReducer = (state: LoginState, action) =>
  reducer(state, action);
