import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CodeContainerComponent } from './components/code-container/code-container.component'
import { SearchBarComponent } from './components/search-bar/search-bar.component'
import { MobileBackgroundComponent } from './components/mobile-background/mobile-background.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { GettingStartedComponent } from './pages/getting-started/getting-started.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { CodeBoxComponent } from './components/code-box/code-box.component';
import { CtaButtonComponent } from './pages/components/cta-button/cta-button.component'

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
