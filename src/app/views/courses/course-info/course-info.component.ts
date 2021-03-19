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
    this.courseService.retrieveByID(+this.activateRoute.snapshot.paramMap.get('id')).subscribe({
      next: course => this.course = course,
      error: err => {
        alert('Oops... Algo deu errado!');
        console.log('Error:', err);
      }
    });
  }

  save(): void {
    this.courseService.save(this.course).subscribe({
      next: () => alert('Curso salvo com sucesso!!!'),
      error: err => {
        alert('Oops... Algo deu errado!');
        console.log('Error:', err);
      }
    });
  }
}
