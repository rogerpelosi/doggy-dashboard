import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';import { HttpClientModule } from '@angular/common/http';

import {Routes, RouterModule} from '@angular/router';

import { DoggycardComponent } from './doggycard/doggycard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CanactivateGuard } from './guards/canactivate.guard';
import { DoggyeditComponent } from './doggyedit/doggyedit.component';

import {MatDialogModule} from '@angular/material/dialog';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanactivateGuard]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: LandingComponent
  },
  {
    path: 'doggy/:doggyId',
    component: DoggyeditComponent,
    canActivate: [CanactivateGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DoggycardComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    DoggyeditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
