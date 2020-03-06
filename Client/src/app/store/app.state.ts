/* spiritdev Softwareentwicklung GmbH 2020
      Author Vladimir Kogan
*/
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { GetApps, SelectApp, UpdateApp, AddApp, DeleteApp } from './app.actions';
import { AppItem } from '../model/AppItem';
import { DatenService } from '../datenservice/daten.service';

export class AppStateModel {
  apps: Array<AppItem>;
  app: AppItem;
}

@State<AppStateModel>({
  name: 'apps',
  defaults: {
    apps: Array<AppItem>(),
    app: null
  }
})
export class AppState {

  constructor(private datenService: DatenService) { }

  @Selector()
  static getAppsList(state: AppStateModel) {
    return state.apps;
  }

  @Selector()
  static getSelectedApp(state: AppStateModel) {
    return state.app;
  }

  @Action(GetApps)
  getApps({ getState, setState }: StateContext<AppStateModel>) {
    return this.datenService.getApps().pipe(
      tap(response => {
        const state = getState();
        setState({
          ...state,
          apps: response,
          app: response[0]
        });
      }),
      catchError((err: HttpErrorResponse) => {
        alert('Something happened. Please try again.');
        return throwError(new Error(err.message));
      })
    );
  }

  @Action(UpdateApp)
  updateApp(
    { getState, setState }: StateContext<AppStateModel>,
    { payload }: UpdateApp
  ) {
    return this.datenService.putApp(payload).pipe(
      tap(response => {
        response.projectStart = new Date(response.projectStart);
        response.projectEnd = new Date(response.projectEnd);
        const state = getState();
        const apps = [...state.apps];
        const index = apps.findIndex(item => item.id === payload.id);
        apps[index] = payload;
        setState({
          ...state,
          apps,
          app: response
        });
      })
    );
  }

  @Action(AddApp)
  addApp(
    { getState, patchState }: StateContext<AppStateModel>,
    { payload }: AddApp
  ) {
    return this.datenService.addApp(payload).pipe(
      tap(response => {
        response.projectStart = new Date(response.projectStart);
        response.projectEnd = new Date(response.projectEnd);
        const state = getState();
        patchState({
          apps: [...state.apps, response]
        });
      })

    );
  }

  @Action(DeleteApp)
  deleteApp(
    { getState, setState }: StateContext<AppStateModel>,
    { id }: DeleteApp
  ) {
    return this.datenService.removeApp(id).pipe(
      tap(response => {
        // tslint:disable-next-line:no-shadowed-variable
        const state = getState();
        // tslint:disable-next-line:no-shadowed-variable
        const filteredArray = state.apps.filter(h => h.id !== id);
        setState({
          ...state,
          apps: filteredArray
        });
      })
    );

  }

  @Action(SelectApp)
  setApp({ getState, setState }: StateContext<AppStateModel>, { payload }: SelectApp) {
    const state = getState();
    setState({
      ...state,
      app: payload
    });
  }
}


