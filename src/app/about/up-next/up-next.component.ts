import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ILinkInfo } from '../link-info/link-info.component';

@Component({
  selector: 'app-up-next',
  templateUrl: './up-next.component.html',
  styleUrls: ['./up-next.component.css']
})
export class UpNextComponent implements OnInit {
  @Input() data: ILinkInfo[] = [];
  @Output() remove = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeItem(id: number) {
    this.remove.emit(id);
  }

}
