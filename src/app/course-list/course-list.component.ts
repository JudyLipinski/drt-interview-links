import { Component, OnInit, ElementRef } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course';
import { Observable, fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
	selector: 'app-course-list',
	templateUrl: './course-list.component.html',
	styleUrls: [ './course-list.component.css' ]
})
export class CourseListComponent implements OnInit {
	search: string = '';
	courses: Array<Course> = [];
	error;
	constructor(private courseSvc: CourseService, private elementRef: ElementRef) {
		const eventStream = fromEvent(elementRef.nativeElement, 'keyup').pipe(
			map(() => this.search),
			debounceTime(300),
			distinctUntilChanged()
		);

		eventStream.subscribe((input) => this.getAllCourses());
	}

	ngOnInit(): void {
		this.getAllCourses();
	}

	getAllCourses() {
		this.error = null;
		this.courseSvc.getAllCourse(this.search).subscribe(
			(res: Course[]) => {
				this.courses = res;
			},
			(error) => {
				this.error = 'Failed to get courses';
			}
		);
	}
}
