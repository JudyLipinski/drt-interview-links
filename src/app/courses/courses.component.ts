import { Component, OnInit } from '@angular/core';
import { CourseService } from './courses.service';
import { CourseModel } from './courses.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  editField: string;
  courseList: Array<CourseModel> = [];
  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.getCourseList();
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    // this.personList[id][property] = editField;
  }

  getCourseList = (): void => {
    this.courseService.getInvoiceList().subscribe(res => {
      if (res) {
        this.courseList = res.courses;
      }
    });
  }

  remove(id: any) {
    this.courseList.splice(id, 1);
  }

  add() {
    this.courseList.push(new CourseModel());
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}
