import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  course: Course;

  faSave = faSave;

  constructor(
    private readonly activateRoute: ActivatedRoute,
    private readonly courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.course = this.courseService.retrieveByID(+this.activateRoute.snapshot.paramMap.get('id'));
  }

  save(): void {
    this.courseService.save(this.course);
  }
}
