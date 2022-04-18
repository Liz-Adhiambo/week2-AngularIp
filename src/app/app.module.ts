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
import { GithubProfileCardComponent } from './components/search/github-profile-card/github-profile-card.component';
import { GithubProfileDataComponent } from './components/search/github-profile-data/github-profile-data.component';
import { GithubReposComponent } from './components/search/github-repos/github-repos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    MyRepoComponent,
    GithubAppComponent,
    GithubProfileComponent,
    GithubProfileCardComponent,
    GithubProfileDataComponent,
    GithubReposComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
