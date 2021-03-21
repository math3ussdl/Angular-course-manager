import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import ROUTES from '../routes';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseModule } from './views/courses/course.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
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
