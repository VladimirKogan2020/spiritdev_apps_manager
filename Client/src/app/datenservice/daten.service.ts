/* spiritdev Softwareentwicklung GmbH 2020
      Author Vladimir Kogan
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AppItem } from '../model/AppItem';
import { AppDTO } from './AppDTO';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatenService {
  myMessage = new Subject<number>();

  constructor(private http: HttpClient) {
  }

  getApps(): Observable<Array<AppItem>> {

    const url = 'api/apps';

    return this.http.get<AppDTO[]>(url)
      .pipe(
        map(result => result.map(e => this.copyDtoToApp(e)))
      );
  }

  copyDtoToApp(dto: AppDTO): AppItem {

    const app = new AppItem();
    app.id = dto.id;
    app.title = dto.title;
    app.annotation = dto.annotation;
    app.price = dto.price;
    app.image = dto.image;
    app.category = dto.category;
    app.plattform = dto.plattform;
    app.projectStart = new Date(dto.projectStart);
    app.projectEnd = new Date(dto.projectEnd);
    app.salesAmount = dto.salesAmount;
    return app;
  }

  putApp(app: AppItem): Observable<AppItem> {

    const url = 'api/apps/' + app.id;
    const dto = this.appToDto(app);
    return this.http.put<AppItem>(url, dto);
  }

  appToDto(app: AppItem): AppDTO  {
    const dto = {
      id: app.id, title: app.title, annotation: app.annotation,
      price: app.price, image: app.image, category: app.category,
      plattform: app.plattform, projectStart: app.projectStart.valueOf(),
      projectEnd: app.projectEnd.valueOf(), salesAmount: app.salesAmount
    };
    return dto;

  }


  addApp(app: AppItem): Observable<AppItem> {
    const url = 'api/apps/';
    const dto = this.appToDto(app);
    return this.http.post<AppItem>(url, dto);
  }


  removeApp(id: number): Observable<AppItem> {
    const url = 'api/apps/' + id;
    return this.http.delete<AppItem>(url);
  }


}
