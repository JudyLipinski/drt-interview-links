import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILinkInfo } from 'src/app/about/link-info/link-info.component';
import { environment } from '../../../environments/environment';

const generateRandomId = () => {
  return Math.trunc(Math.random() * 1e6);
};

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(private http: HttpClient) {
    console.log(environment);
  }

  getLinks(): Observable<ILinkInfo[]> {
    return this.http.get<ILinkInfo[]>(`${environment.serverUrl}/links`);
  }

  addLink({ name, link }): Observable<ILinkInfo> {
    return this.http.post<ILinkInfo>(`${environment.serverUrl}/links`, {
      name,
      link,
      id: generateRandomId()
    });
  }
}
