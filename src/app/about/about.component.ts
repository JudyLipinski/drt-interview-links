import { Component, OnInit } from '@angular/core';
import { ILinkInfo } from './link-info/link-info.component';
import { LinksService } from '../services/links/links.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data: ILinkInfo[] = [];
  isNewLinkFormOpened = false;

  constructor(private linkService: LinksService) { }

  ngOnInit(): void {
    this.loadLinks();
  }

  videoFinished = () => {
    if (this.data.length) {
      this.data = this.data.slice(1);
    }
  }

  removeItem = (id: number) => {
    this.data = this.data.filter(el => el.id !== id);
  }

  addLink = (link) => {
    this.linkService.addLink(link).subscribe(res => {
      this.isNewLinkFormOpened = false;
      this.data = this.data.concat(res);
    });
  }

  loadLinks() {
    this.linkService.getLinks().subscribe((res) => {
      this.data = res;
    });
  }
}
