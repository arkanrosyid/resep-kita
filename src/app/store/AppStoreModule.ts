import { RegisterEffects } from './register/register.effects';
import { LoginEffects } from './login/login.effects';
import { EffectsModule } from '@ngrx/effects';
import { loginReducer } from './login/login.reducers';
import { loadingReducer } from './loading/loading.reducers';
import { StoreModule } from '@ngrx/store';
import { registerReducer } from './register/register.reducer';
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AppStoreModule = [
  StoreModule.forRoot([]),
  StoreModule.forFeature('loading', loadingReducer),
  StoreModule.forFeature('login', loginReducer),
  StoreModule.forFeature('register', registerReducer),
  EffectsModule.forRoot([]),
  EffectsModule.forFeature([LoginEffects, RegisterEffects]),
];
