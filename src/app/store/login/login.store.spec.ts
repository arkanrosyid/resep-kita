import { User } from './../../model/user/User';
import { appInitialState } from './../AppInitialState';
import { login, loginSuccess, loginFail } from './login.actions';
import { loginReducer } from './login.reducers';
import { LoginState } from './loginState';

describe('Login store', () => {
  it('login', () => {
    const initialState: LoginState = appInitialState.login;
    const newState = loginReducer(
      initialState,
      login({ email: 'valid@email.com', password: 'anyPassword' })
    );
    expect(newState).toEqual({
      ...initialState,
      error: null,
      isLoggedIn: false,
      isLoggingIn: true,
    });
  });

  it('login Success', () => {
    const initialState: LoginState = {
      ...appInitialState.login,
      isLoggingIn: true,
    };
    const user = new User();
    user.id = 'anyId';
    const newState = loginReducer(initialState, loginSuccess({ user }));
    expect(newState).toEqual({
      ...initialState,
      isLoggedIn: true,
      isLoggingIn: false,
    });
  });

  it('login Fail', () => {
    const initialState: LoginState = {
      ...appInitialState.login,
      isLoggingIn: true,
    };
    const error = { error: 'error' };
    const newState = loginReducer(initialState, loginFail({ error }));
    expect(newState).toEqual({
      ...initialState,
      error,
      isLoggedIn: false,
      isLoggingIn: false,
    });
  });
});
