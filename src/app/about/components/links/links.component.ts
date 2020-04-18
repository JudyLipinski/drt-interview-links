import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  @Input() video: any;
  @Output() deleteVideo: EventEmitter<any> = new EventEmitter();
  @Output() playVideo: EventEmitter<any> = new EventEmitter();

  @Input() active;

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    if (confirm('Do you want to delete this video?')) {
      this.deleteVideo.emit(this.video);
    }
  }

  play() {
    this.playVideo.emit(this.video);
  }

}
