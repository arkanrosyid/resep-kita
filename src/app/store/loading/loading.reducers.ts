import { appInitialState } from './../AppInitialState';
import { LoadingState } from './LoadingState';
import { show, hide } from './loading.actions';
import { createReducer, on } from '@ngrx/store';

const initialState: LoadingState = appInitialState.loading;

const reducer = createReducer(
  initialState,
  on(show, () => ({ show: true })),
  on(hide, () => ({ show: false }))
);

export const loadingReducer = (state: LoadingState, action) =>
  reducer(state, action);
