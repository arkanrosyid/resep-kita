import { RegisterState } from './RegisterState';
import { appInitialState } from './../AppInitialState';
import { createReducer, on } from '@ngrx/store';
import { register, registerSuccess, registerFail } from './register.actions';

const initialState = appInitialState.register;
const reducer = createReducer(
  initialState,
  on(register, (state) => ({
    ...state,
    error: null,
    isRegistered: false,
    isRegistering: true,
  })),
  on(registerSuccess, (state) => ({
    ...state,
    error: null,
    isRegistered: true,
    isRegistering: false,
  })),
  on(registerFail, (state, action) => ({
    ...state,
    error: action.error,
    isRegistered: false,
    isRegistering: false,
  }))
);
export const registerReducer = (state: RegisterState, action) =>
  reducer(state, action);
