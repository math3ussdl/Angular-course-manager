import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  private coursesURL: string = 'http://localhost:3000/courses';

  constructor(private readonly httpClient: HttpClient) { }

  retrieveAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.coursesURL);
  }

  retrieveByID(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.coursesURL}/${id}`);
  }

  save(course: Course): Observable<Course> {
    if (course.id) {
      return this.httpClient.put<Course>(`${this.coursesURL}/${course.id}`, course);
    } else {
      return this.httpClient.post<Course>(`${this.coursesURL}`, course);
    }
  }

  deleteByID(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.coursesURL}/${id}`);
  }
}
