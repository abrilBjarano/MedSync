import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'meds',
    loadChildren: () => import('./meds/meds.module').then( m => m.MedsModule )
  },
  {
    path: '404',
    component: Error404PageComponent
    // si deja de funcionar, importar componente al app.module, porque no lo importé en ningún lado.
  },
  {
    path: '',
    redirectTo: 'meds',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
