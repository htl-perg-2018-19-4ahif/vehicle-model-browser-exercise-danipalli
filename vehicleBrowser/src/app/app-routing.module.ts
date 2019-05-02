import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ModelsBrowserComponent } from './models-browser/models-browser.component';

const routes: Routes = [
  { path: 'about', component: AboutPageComponent },
  { path: 'models', component: ModelsBrowserComponent },
  { path: '**', redirectTo: '/models' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
