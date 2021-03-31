import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CtaButtonComponent } from './pages/components/cta-button/cta-button.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';

const routes: Routes = [
  { path: '', component: IntroductionComponent, pathMatch: 'full' },
  { path: 'getting-started', component: GettingStartedComponent },
  {
    path: 'components', children: [
      { path: 'cta-button', component: CtaButtonComponent },
      { path: 'round-button', component: CtaButtonComponent },
      { path: '', redirectTo: 'cta-button', pathMatch: 'full' }
    ]
  },
  { path: '**', component: IntroductionComponent, pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
