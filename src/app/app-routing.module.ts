import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CtaButtonComponent } from './pages/components/cta-button/cta-button.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';

const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'components', component: CtaButtonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
