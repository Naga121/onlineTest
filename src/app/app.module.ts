import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { QuestionComponent } from './Components/question/question.component';

import { HttpClientModule } from '@angular/common/http';
import { ChangeDirective } from './Components/Directives/change.directive'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    QuestionComponent,
    ChangeDirective,
    
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
