import { StarsComponent } from './../../components/stars/stars.component';
import { ReplacePipe } from './../../pipes/replace.pipe';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseListComponent } from './course-list/course-list.component';
import ROUTES from 'src/routes';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent,
    ReplacePipe,
    StarsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forChild([...ROUTES.courseRoutes])
  ],
  exports: [ReplacePipe]
})
export class CourseModule {}
