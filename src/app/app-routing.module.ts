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
  },
  {
    path: 'our-appeal',
    loadChildren: () => import('./our-appeal/our-appeal.module').then( m => m.OurAppealPageModule)
  },
  {
    path: 'help-us',
    loadChildren: () => import('./help-us/help-us.module').then( m => m.HelpUsPageModule)
  },
  {
    path: 'contributors',
    loadChildren: () => import('./contributors/contributors.module').then( m => m.ContributorsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
