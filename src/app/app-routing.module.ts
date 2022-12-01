import { AuthGuard } from './guards/auth/auth-guard';
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
    canLoad: [AuthGuard],
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'user-edit',
    loadChildren: () =>
      import('./pages/user-edit/user-edit.module').then(
        (m) => m.UserEditPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'tulis-resep',
    loadChildren: () =>
      import('./pages/tulis-resep/tulis-resep.module').then(
        (m) => m.TulisResepPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'resep-saya',
    loadChildren: () =>
      import('./pages/resep-saya/resep-saya.module').then(
        (m) => m.ResepSayaPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'resep/:id',
    loadChildren: () =>
      import('./pages/resep/resep.module').then((m) => m.ResepPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'resep-nusantara',
    loadChildren: () =>
      import('./pages/resep-nusantara/resep-nusantara.module').then(
        (m) => m.ResepNusantaraPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'resep-mancanegara',
    loadChildren: () =>
      import('./pages/resep-mancanegara/resep-mancanegara.module').then(
        (m) => m.ResepMancanegaraPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'resep-edit/:id',
    loadChildren: () =>
      import('./pages/resep-edit/resep-edit.module').then(
        (m) => m.ResepEditPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
