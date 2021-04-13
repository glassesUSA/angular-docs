import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CodeContainerComponent } from './components/code-container/code-container.component'
import { SearchBarComponent } from './components/search-bar/search-bar.component'
import { MobileBackgroundComponent } from './components/mobile-background/mobile-background.component'
import { NavigationComponent } from './components/navigation/navigation.component'
import { IntroductionComponent } from './pages/introduction/introduction.component'
import { GettingStartedComponent } from './pages/getting-started/getting-started.component'
import { PageHeaderComponent } from './components/page-header/page-header.component'
import { CodeBoxComponent } from './components/code-box/code-box.component'
import { CtaButtonComponent } from './pages/components/cta-button.component'
import { TabsComponent } from './components/tabs/tabs.component'
import { TabComponent } from './components/tab/tab.component'
import { RoundButtonComponent } from './pages/components/round-button.component'
import { TogglesComponent } from './pages/components/toggles.component'
import { TrustpilotComponent } from './pages/components/trustpilot.component'
import { DropdownComponent } from './pages/components/forms/dropdown.component'
import { TextAreaComponent } from './pages/components/forms/text-area.component'
import { TextFieldComponent } from './pages/components/forms/text-field.component'
import { RadioButtonComponent } from './pages/components/forms/radio-button.component'
import { CheckboxComponent } from './pages/components/forms/checkbox.component'
import { TickedCheckboxComponent } from './pages/components/forms/ticked-checkbox.component'
import { TooltipsComponent } from './pages/components/tooltips.component'
import { BadgesComponent } from './pages/components/badges.component'
import { ShadowsComponent } from './pages/components/shadows.component'
import { AccordianComponent } from './pages/components/accordian.component';
import { LogoLibraryComponent } from './pages/logo-library/logo-library.component';
import { IconLibraryComponent } from './pages/icon-library/icon-library.component'

@NgModule({
  declarations: [
    AppComponent,
    CodeContainerComponent,
    SearchBarComponent,
    MobileBackgroundComponent,
    NavigationComponent,
    IntroductionComponent,
    GettingStartedComponent,
    PageHeaderComponent,
    CodeBoxComponent,
    CtaButtonComponent,
    TabsComponent,
    TabComponent,
    RoundButtonComponent,
    TogglesComponent,
    TrustpilotComponent,
    DropdownComponent,
    TextAreaComponent,
    TextFieldComponent,
    RadioButtonComponent,
    CheckboxComponent,
    TickedCheckboxComponent,
    TooltipsComponent,
    BadgesComponent,
    ShadowsComponent,
    AccordianComponent,
    LogoLibraryComponent,
    IconLibraryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
