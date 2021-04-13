import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AccordianComponent } from './pages/components/accordian.component'
import { BadgesComponent } from './pages/components/badges.component'
import { CtaButtonComponent } from './pages/components/cta-button.component'
import { CheckboxComponent } from './pages/components/forms/checkbox.component'
import { DropdownComponent } from './pages/components/forms/dropdown.component'
import { RadioButtonComponent } from './pages/components/forms/radio-button.component'
import { TextAreaComponent } from './pages/components/forms/text-area.component'
import { TextFieldComponent } from './pages/components/forms/text-field.component'
import { TickedCheckboxComponent } from './pages/components/forms/ticked-checkbox.component'
import { RoundButtonComponent } from './pages/components/round-button.component'
import { ShadowsComponent } from './pages/components/shadows.component'
import { TogglesComponent } from './pages/components/toggles.component'
import { TooltipsComponent } from './pages/components/tooltips.component'
import { TrustpilotComponent } from './pages/components/trustpilot.component'
import { GettingStartedComponent } from './pages/getting-started/getting-started.component'
import { IconLibraryComponent } from './pages/icon-library/icon-library.component'
import { IntroductionComponent } from './pages/introduction/introduction.component'
import { LogoLibraryComponent } from './pages/logo-library/logo-library.component'

const routes: Routes = [
  { path: '', component: IntroductionComponent, pathMatch: 'full' },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'logo-library', component: LogoLibraryComponent },
  { path: 'icon-library', component: IconLibraryComponent },
  {
    path: 'components',
    children: [
      { path: 'cta-button/:id', component: CtaButtonComponent },
      { path: 'cta-button', component: CtaButtonComponent },
      { path: 'round-button/:id', component: RoundButtonComponent },
      { path: 'round-button', component: RoundButtonComponent },
      { path: 'toggles', component: TogglesComponent },
      { path: 'trustpilot/:id', component: TrustpilotComponent },
      { path: 'trustpilot', component: TrustpilotComponent },
      { path: 'tooltips/:id', component: TooltipsComponent },
      { path: 'tooltips', component: TooltipsComponent },
      { path: 'badges', component: BadgesComponent },
      { path: 'shadows', component: ShadowsComponent },
      { path: 'accordian', component: AccordianComponent },
      {
        path: 'forms',
        children: [
          { path: 'dropdown', component: DropdownComponent },
          { path: 'text-area', component: TextAreaComponent },
          { path: 'text-field', component: TextFieldComponent },
          { path: 'radio-button/:id', component: RadioButtonComponent },
          { path: 'radio-button', component: RadioButtonComponent },
          { path: 'checkbox', component: CheckboxComponent },
          { path: 'ticked-checkbox', component: TickedCheckboxComponent },
          { path: '', redirectTo: 'dropdown', pathMatch: 'full' },
        ],
      },
      { path: '', redirectTo: 'cta-button', pathMatch: 'full' },
    ],
  },
  {
    path: '**',
    component: IntroductionComponent,
    pathMatch: 'full',
    redirectTo: '',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
