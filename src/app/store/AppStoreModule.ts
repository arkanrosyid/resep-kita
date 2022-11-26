import { loadingReducer } from './loading/loading.reducers';
import { StoreModule } from '@ngrx/store';
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AppStoreModule = [
  StoreModule.forRoot([]),
  StoreModule.forFeature('loading', loadingReducer),
];
