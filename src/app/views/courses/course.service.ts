import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  retrieveAll(): Course[] {
    return COURSES;
  }

  retrieveByID(id: number): Course {
    return COURSES.find((iterator: Course) => iterator.id === id);
  }

  save(course: Course): void {
    if (course.id) {
      const index = COURSES.findIndex((iterator: Course) => iterator.id === course.id);
      COURSES[index] = course;
    }
  }
}

var COURSES: Course[] = [
  {
    id: 1,
    name: 'Angular: CLI',
    imageUrl: '/assets/images/cli.png',
    price: 49.90,
    code: 'CLI-1187',
    duration: 150,
    rating: 4.5,
    description: 'All has you beginning, the Angular too, knows your cli and have a great job with this tool!',
    releaseDate: 'December, 2, 2020'
  },
  {
    id: 2,
    name: 'Angular: Forms',
    imageUrl: '/assets/images/forms.png',
    price: 85.90,
    code: 'FRM-8512',
    duration: 120,
    rating: 4,
    description: 'All has you beginning, the Angular too, knows your forms and have a great job with this tool!',
    releaseDate: 'November, 15, 2020'
  },
  {
    id: 3,
    name: 'Angular: HTTP',
    imageUrl: '/assets/images/http.png',
    price: 49.90,
    code: 'HTP-1571',
    duration: 150,
    rating: 3,
    description: 'All has you beginning, the Angular too, knows your HTTP mod and have a great job with this tool!',
    releaseDate: 'December, 2, 2020'
  },
  {
    id: 4,
    name: 'Angular: Router',
    imageUrl: '/assets/images/router.png',
    price: 85.90,
    code: 'HTT-1782',
    duration: 120,
    rating: 5,
    description: 'All has you beginning, the Angular too, knows your Router Mod and have a great job with this tool!',
    releaseDate: 'November, 15, 2020'
  },
  {
    id: 5,
    name: 'Angular: Animations',
    imageUrl: '/assets/images/animations.png',
    price: 70.00,
    code: 'ANI-0564',
    duration: 120,
    rating: 5,
    description: 'All has you beginning, the Angular too, knows your Animation mod and have a great job with this tool!',
    releaseDate: 'November, 15, 2020'
  }
];
