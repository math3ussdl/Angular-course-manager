import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CourseListComponent } from './views/courses/course-list/course-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarsComponent } from './components/stars/stars.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { Error404Component } from './views/error-404/error-404.component';
import { FooterComponent } from './layout/footer/footer.component';
import ROUTES from '../routes';
import { CourseInfoComponent } from './views/courses/course-info/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseInfoComponent,
    StarsComponent,
    NavBarComponent,
    Error404Component,
    FooterComponent,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([...ROUTES]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
