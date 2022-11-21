import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'load',
    pathMatch: 'full',
  },
  {
    path: 'load',
    loadChildren: () =>
      import('./pages/load/load.module').then((m) => m.LoadPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserPageModule),
  },
  {
    path: 'user-edit',
    loadChildren: () =>
      import('./pages/user-edit/user-edit.module').then(
        (m) => m.UserEditPageModule
      ),
  },
  {
    path: 'tulis-resep',
    loadChildren: () =>
      import('./pages/tulis-resep/tulis-resep.module').then(
        (m) => m.TulisResepPageModule
      ),
  },
  {
    path: 'resep-saya',
    loadChildren: () =>
      import('./pages/resep-saya/resep-saya.module').then(
        (m) => m.ResepSayaPageModule
      ),
  },
  {
    path: 'resep',
    loadChildren: () => import('./pages/resep/resep.module').then( m => m.ResepPageModule)
  },
  {
    path: 'resep-nusantara',
    loadChildren: () => import('./pages/resep-nusantara/resep-nusantara.module').then( m => m.ResepNusantaraPageModule)
  },
  {
    path: 'resep-mancanegara',
    loadChildren: () => import('./pages/resep-mancanegara/resep-mancanegara.module').then( m => m.ResepMancanegaraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
