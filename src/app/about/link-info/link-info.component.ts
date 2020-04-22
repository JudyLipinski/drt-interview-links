import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface ILinkInfo {
  id: number;
  link: string;
  name: string;
}

@Component({
  selector: 'app-link-info',
  templateUrl: './link-info.component.html',
  styleUrls: ['./link-info.component.css']
})
export class LinkInfoComponent implements OnInit {
  @Input() data = {} as ILinkInfo;
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  remove = (id: number) => {
    this.delete.emit(id);
  }

}
