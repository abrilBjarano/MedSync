import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MedPageComponent } from './pages/med-page/med-page.component';
import { CreateEditPageComponent } from './pages/create-edit-page/create-edit-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'create', component: CreateEditPageComponent },
      { path: 'edit/:id', component: CreateEditPageComponent },
      { path: 'home', component: HomePageComponent },
      { path: ':id', component: MedPageComponent },
      { path: '**', redirectTo: 'home' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedsRoutingModule { }
