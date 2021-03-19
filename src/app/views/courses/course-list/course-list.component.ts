import { Component, OnInit } from '@angular/core';
import {
  faEdit,
  faPlayCircle,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import { faFilter, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];

  _courses: Course[];
  _filterBy: string;

  faAdd = faPlusCircle;
  faPlay = faPlayCircle;
  faEdit = faEdit;
  faTrash = faTrashAlt;
  faFilter = faFilter;

  constructor(private readonly courseService: CourseService) {}

  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredCourses = this._courses.filter(
      (course: Course) =>
        course.name
          .toLocaleLowerCase()
          .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }
}
