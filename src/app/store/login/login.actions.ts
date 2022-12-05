import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/model/user/User';

export const login = createAction(
  '[login]',
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  '[login] success',
  props<{ user: User }>()
);
export const logout = createAction('[logout]');
export const loginFail = createAction('[login] fail', props<{ error: any }>());
