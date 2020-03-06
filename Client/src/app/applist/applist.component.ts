/* spiritdev Softwareentwicklung GmbH 2020
      Author Vladimir Kogan
*/
import { Component, OnInit } from '@angular/core';
import { DatenService } from '../datenservice/daten.service';
import { AppItem } from '../model/AppItem';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AppState } from '../store/app.state';
import { SelectApp, AddApp, DeleteApp } from '../store/app.actions';
import { MatDialog } from '@angular/material/dialog';
import { ChangeDialogComponent } from '../changedialog/changedialog.component';


@Component({
  selector: 'app-applist',
  templateUrl: './applist.component.html',
  styleUrls: ['./applist.component.css']
})
export class ApplistComponent implements OnInit {
  dialogTitle = 'Add New App';
  apps: Array<AppItem>;
  clickedIndex = 0;
  app: AppItem;
  list$: Observable<Array<AppItem>>;

  image: any;


  constructor(private store: Store, private dialog: MatDialog, private datenservice: DatenService) {

  }


  ngOnInit(): void {
    this.list$ = this.store.select(AppState.getAppsList);
  }

  onClick(app: AppItem, i: number) {
    this.clickedIndex = i;
    this.store.dispatch(new SelectApp(app));
  }

  addApp() {
    this.app = { title: '', annotation: '', id: 0, price: 0, image: '',
     category: '', plattform: '', projectStart: new Date('2001-01-01'),
      projectEnd: new Date('2001-01-01'), salesAmount: 0};
    const dialogRef = this.dialog.open(ChangeDialogComponent, {
      width: '60%',
       data: { app: this.app }

    });


    dialogRef.afterClosed().subscribe(() => this.list$.subscribe(
      (result) => { this.clickedIndex = result.length - 1;
                    this.store.dispatch(new SelectApp(result[this.clickedIndex]));
       }
    ));

  }

  deleteApp() {
    if (confirm('The selected app will be deleted. Are you sure?')) {
      this.store.select(AppState.getSelectedApp).subscribe(app => this.app = app);
      this.store.dispatch(new DeleteApp(this.app.id));
      this.list$.subscribe(
        (result) => { this.clickedIndex = result.length - 1;
                      this.store.dispatch(new SelectApp(result[this.clickedIndex]));
        }
      );
    }
  }


}
