import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, first, delay } from 'rxjs/operators';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

private readonly api = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  public list () {
   return this.httpClient.get<Course[]>(this.api).pipe(
    first(),
    //delay(5000),
    tap(courses => console.log(courses))
   );
  }
}
