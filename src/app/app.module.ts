import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MyRepoComponent } from './components/my-repo/my-repo.component';
import { GithubAppComponent } from './components/search/github-app/github-app.component';
import { GithubProfileComponent } from './components/search/github-profile/github-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    MyRepoComponent,
    GithubAppComponent,
    GithubProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
