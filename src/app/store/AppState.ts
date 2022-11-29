import { LoginState } from './login/loginState';
import { LoadingState } from './loading/LoadingState';

export interface AppState {
  loading: LoadingState;
  login: LoginState;
}
