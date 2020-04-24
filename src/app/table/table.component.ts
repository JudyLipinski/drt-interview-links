import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseModel } from '../courses/courses.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() courseList: Array<CourseModel> = [];
  @Input() searchKeyword: string;
  @Output() remove = new EventEmitter();

  editField: any;
  constructor() { }

  ngOnInit(): void {

  }

  removeRow(id) {
    this.remove.emit(id);
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    // this.personList[id][property] = editField;
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}
