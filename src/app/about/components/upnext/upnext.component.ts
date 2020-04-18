import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upnext',
  templateUrl: './upnext.component.html',
  styleUrls: ['./upnext.component.css']
})
export class UpnextComponent implements OnInit {

  @Input() videoList: Array<object>;
  @Input() active;
  @Output() playNow: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteVideo(video) {
    this.videoList.splice(this.videoList.indexOf(video), 1);
  }

  playVideo(video) {
    this.playNow.emit(video);
  }

}
