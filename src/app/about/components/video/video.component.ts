import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() currentVideo;

  @Output() next: EventEmitter<any> = new EventEmitter();

  constructor() { 
    console.log(this.currentVideo);
  }

  ngOnInit(): void {
  }

  goToNextVideo() {
    this.next.emit();
  }

}
