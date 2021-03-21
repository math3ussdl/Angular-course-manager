import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarsModule } from 'src/app/shared/components/stars/stars.module';
import { AppPipeModule } from 'src/app/shared/pipes/app-pipe.module';
import ROUTES from 'src/routes';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseListComponent } from './course-list/course-list.component';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent
  ],
  imports: [
    AppPipeModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    StarsModule,
    RouterModule.forChild([...ROUTES.courseRoutes])
  ],
  exports: [AppPipeModule]
})
export class CourseModule {}
