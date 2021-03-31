import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [];
=======
import { CtaButtonComponent } from './pages/components/cta-button/cta-button.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';

const routes: Routes = [
  { path: '', component: IntroductionComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'components', component: CtaButtonComponent }
];
>>>>>>> 3dacc5adeaf7067cd9038cb68d86c54a7a56f6c0

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
