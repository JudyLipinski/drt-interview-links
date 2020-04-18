import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Course } from '../models/course';
@Injectable({
	providedIn: 'root'
})
export class CourseService {
	baseUrl = environment.url;
	constructor(private http: HttpClient) {}

	getAllCourse(search) {
		return this.http.get(`${this.baseUrl}/courses?q=${search}`);
	}
	addCourse(course: Course) {
		return this.http.post(`${this.baseUrl}/courses`, course);
	}
	editCourse(course: Course) {
		return this.http.put(`${this.baseUrl}/courses/${course.id}`, course);
	}

	removeCourse(course: Course) {
		return this.http.delete(`${this.baseUrl}/courses/${course.id}`);
	}
}
