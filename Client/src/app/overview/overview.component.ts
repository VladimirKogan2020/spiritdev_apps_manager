/* spiritdev Softwareentwicklung GmbH 2020
      Author Vladimir Kogan
*/
import { Component, OnInit } from '@angular/core';
import { Store, State, Select } from '@ngxs/store';
import { GetApps } from '../store/app.actions';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetApps());

  }

}
