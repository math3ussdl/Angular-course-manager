import { Route } from '@angular/router';

import { CourseListComponent } from './app/views/courses/course-list/course-list.component';
import { CourseInfoComponent } from './app/views/courses/course-info/course-info.component';
import { Error404Component } from './app/views/error-404/error-404.component';

const ROUTES: { baseRoutes: Route[]; courseRoutes: Route[] } = {
  baseRoutes: [
    {
      path: '',
      redirectTo: '/courses',
      pathMatch: 'full'
    },
    {
      path: '**',
      component: Error404Component
    }
  ],
  courseRoutes: [
    {
      path: 'courses',
      component: CourseListComponent,
    },
    {
      path: 'courses/info/:id',
      component: CourseInfoComponent
    },
  ]
};

export default ROUTES;
