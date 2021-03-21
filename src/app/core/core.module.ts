import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { CourseModule } from '../views/courses/course.module';
import ROUTES from 'src/routes';
import { Error404Component } from './components/error-404/error-404.component';

@NgModule({
  declarations: [
    Error404Component,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CourseModule,
    FontAwesomeModule,
    RouterModule.forChild([...ROUTES.coreRoutes])
  ],
  exports: [
    NavBarComponent,
    FooterComponent
  ]
})
export class CoreModule {}
