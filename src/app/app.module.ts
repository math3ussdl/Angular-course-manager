import { ReplacePipe } from './pipes/replace.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import ROUTES from '../routes';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { CourseModule } from './views/courses/course.module';
import { Error404Component } from './views/error-404/error-404.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Error404Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    CourseModule,
    RouterModule.forRoot([...ROUTES.baseRoutes]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
