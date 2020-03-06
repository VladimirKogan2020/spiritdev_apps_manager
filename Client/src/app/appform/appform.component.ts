/* spiritdev Softwareentwicklung GmbH 2020
      Author Vladimir Kogan
*/
import { Component, OnInit } from '@angular/core';
import { AppItem } from '../model/AppItem';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChangeDialogComponent } from '../changedialog/changedialog.component';
import { Store } from '@ngxs/store';
import { AppState } from '../store/app.state';

export interface DialogData {
  app: AppItem;
}

@Component({
  selector: 'app-appform',
  templateUrl: './appform.component.html',
  styleUrls: ['./appform.component.css']
})
export class AppformComponent implements OnInit {

  app: AppItem;
  apps: Array<AppItem>;

  index: number;

  constructor( private store: Store, public dialog: MatDialog) {

   }

 ngOnInit(): void {

     this.store.select(AppState.getSelectedApp).subscribe(app => this.app = app);
  }

  showEditDialog(): void  {

      const dialogRef = this.dialog.open( ChangeDialogComponent, {
        width: '60%',
        data: { app: this.app }
      });
  }

}




