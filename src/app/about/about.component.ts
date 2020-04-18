import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  videoList = [
    { id: 1, link: 'https://www.w3schools.com/html/movie.mp4', description: 'Just a boring sample video'}, 
    { id: 2, link: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'This is a funny bunny video'}
  ];

  currentVideoIndex = 0;
  isPopupOpen;

  constructor() { 
  
  }

  ngOnInit(): void {
  }

  playNext() {
    if  (this.currentVideoIndex < this.videoList.length - 1) {
      this.currentVideoIndex++;
    }
  }

  play(video) {
    this.currentVideoIndex = this.videoList.indexOf(video);
  }

  addVideo(video) {
    console.log('jgjhg', video);
    if (video) {
      this.videoList.push(video);
    }
    this.isPopupOpen = false;
  }

  showPopup() {
    this.isPopupOpen = true;
  }

}
