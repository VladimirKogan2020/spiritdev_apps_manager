/* spiritdev Softwareentwicklung GmbH 2020
      Author Vladimir Kogan
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ChangeDialogComponent } from './changedialog/changedialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { ApplistComponent } from './applist/applist.component';
import { AppformComponent } from './appform/appform.component';

import { OverviewComponent } from './overview/overview.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AppState } from './store/app.state';



@NgModule({
  declarations: [
    AppComponent,
    ChangeDialogComponent,
    AppToolbarComponent,
    AppfooterComponent,
    ApplistComponent,
    AppformComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxsModule.forRoot([AppState]
    ),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  entryComponents: [
    ChangeDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
