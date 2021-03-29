import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CodeBoxComponent } from './components/code-box/code-box.component'
import { SearchBarComponent } from './components/search-bar/search-bar.component'
import { MobileBackgroundComponent } from './components/mobile-background/mobile-background.component';
import { NavigationComponent } from './navigation/navigation.component'

@NgModule({
  declarations: [
    AppComponent,
    CodeBoxComponent,
    SearchBarComponent,
    MobileBackgroundComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
