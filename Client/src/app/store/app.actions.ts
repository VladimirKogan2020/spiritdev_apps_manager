/* spiritdev Softwareentwicklung GmbH 2020
      Author Vladimir Kogan
*/
import { AppItem } from '../model/AppItem';


export class GetApps {
    static readonly type = '[AppItem] Get';
  }

export class SelectApp {
    static readonly type = '[AppItem] Set';
    constructor(public payload: AppItem) {}
  }

export class UpdateApp {
    static readonly type = '[AppItem] Update';

    constructor(public payload: AppItem) {}
  }

export class AddApp {
    static readonly type = '[AppItem] Add';

    constructor(public payload: AppItem) {}
  }

export class DeleteApp {
    static readonly type = '[AppItem] Delete';
    constructor(public id: number) {}
  }
