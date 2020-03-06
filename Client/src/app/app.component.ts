/* spiritdev Softwareentwicklung GmbH 2020
      Author Vladimir Kogan
*/
import { Component } from '@angular/core';
import { DatenService } from './datenservice/daten.service';
import {MatDialog} from '@angular/material/dialog';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestApi';

  constructor( public dialog: MatDialog) {  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {

    }
}
