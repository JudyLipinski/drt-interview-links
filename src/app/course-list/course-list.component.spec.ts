import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './course-list.component';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course';
function _courseServiceStub() {
	const stub = jasmine.createSpyObj<CourseService>('CourseService', [
		'getAllCourse',
		'addCourse',
		'editCourse',
		'removeCourse'
	]);
	stub.getAllCourse.and.returnValue(of([]));
	return stub;
}

describe('CourseListComponent', () => {
	let component: CourseListComponent;
	let fixture: ComponentFixture<CourseListComponent>;
	let courseService: jasmine.SpyObj<CourseService>;
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [ FormsModule, HttpClientTestingModule ],
				declarations: [ CourseListComponent ],
				providers: [ { provide: CourseService, useValue: _courseServiceStub() } ]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should display courses', () => {
		expect(component).toBeTruthy();
	});
});

function _fakeCourses(count: number = 1) {
	const list: Course[] = [
		{
			id: 1,
			title: 'Modern Web Development',
			duration: 5,
			duration_unit: 'day',
			description: 'HTML5, CSS3, ES6/JS and more'
		},
		{
			id: 2,
			title: 'Git',
			duration: 3,
			duration_unit: 'day',
			description: 'Git and GitHub'
		},
		{
			id: 3,
			title: 'Python',
			duration: 5,
			duration_unit: 'day',
			description: 'Intro to Python'
		},
		{
			id: 4,
			title: 'Java',
			duration: 5,
			duration_unit: 'day',
			description: 'Intro to Java'
		},
		{
			id: 5,
			title: 'Node.js',
			duration: 5,
			duration_unit: 'day',
			description: 'Intro to Node.js'
		}
	];
	return list;
}
