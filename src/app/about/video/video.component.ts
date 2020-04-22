import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input() source = '';
  @Output() finish = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sourceEnded = () => {
    this.finish.emit();
  }

  onStateChange = (state) => {
    if (state.data === 0) {
      return this.sourceEnded();
    }
  }

  savePlayer = (e) => {
    e.playVideo();
  }


  generateYoutubeId = (source) => {
    if (this.isYoutubeSource) {
      const id = source.split('watch?v=').pop();
      return id;
    }
    return null;
  }

  public get isYoutubeSource() {
    const reg = /(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i;
    return reg.test(this.source);
  }
}
