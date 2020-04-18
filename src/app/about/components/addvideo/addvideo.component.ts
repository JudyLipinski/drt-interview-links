import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {

  @Output() closePopup: EventEmitter<any> = new EventEmitter();
  link;
  description;

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.closePopup.emit({id: Date.now(), link: this.link, description: this.description});
  }

  cancel() {
    this.closePopup.emit();
  }

}
