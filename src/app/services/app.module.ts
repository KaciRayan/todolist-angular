import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from 'src/app/auth/auth.component';
import { FavorisComponent } from 'src/app/favoris/favoris.component';
import { HomeComponent } from 'src/app/home/home.component';
import { MovieSearch } from 'src/app/services/movieSearch.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'favoris', component: FavorisComponent },
  { path: '', component: AuthComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FavorisComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MovieSearch
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
