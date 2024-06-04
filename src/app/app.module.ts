import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './home/header/header.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeModule } from './home/home.module';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { TituloModule } from './components/titulo/titulo.module';
import { AddArteComponent } from './components/add-arte/add-arte.component';
import { MenuItemComponent } from './layout/menu-item/menu-item.component';
import { HeaderMaterialComponent } from './layout/header.component';
import { PageHeaderComponent } from './layout/page-header.component';
import { SalesComponent } from './layout/sales.component';
import { provideOAuthClient } from 'angular-oauth2-oidc';


@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    AddArteComponent,
    MenuItemComponent,
    HeaderMaterialComponent,
    PageHeaderComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    HomeModule,
    MatButtonModule,
    MatDividerModule,
    FlexLayoutModule,
    MatDividerModule, 
    MatIconModule,
    TituloModule,
    MatListModule,
    MatExpansionModule,
    MatToolbarModule,
    MatMenuModule
    
  ],
  //providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync(),
    provideOAuthClient()
  ]
})
export class AppModule { }
