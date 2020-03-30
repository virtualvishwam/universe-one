import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/ngo-list',
    pathMatch: 'full'
  },
  {
    path: 'ngo-list',
    loadChildren: () => import('./ngo-list/ngo-list.module').then( m => m.NGOListPageModule)
  },
  {
    path: 'language-settings',
    loadChildren: () => import('./language-settings/language-settings.module').then( m => m.LanguageSettingsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
