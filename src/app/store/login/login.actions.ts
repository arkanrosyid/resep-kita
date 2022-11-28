import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/model/user/User';

export const login = createAction('[login]');
export const loginSuccess = createAction(
  '[login] success',
  props<{ user: User }>()
);
export const loginFail = createAction('[login] fail', props<{ error: any }>());
