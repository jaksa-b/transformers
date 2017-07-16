import { Action } from '@ngrx/store';

export const OPEN_SIDENAV = 'Open Sidenav';
export const CLOSE_SIDENAV = 'Close Sidenav';


export class OpenSidenavAction implements Action {
    readonly type = OPEN_SIDENAV;
}

export class CloseSidenavAction implements Action {
    readonly type = CLOSE_SIDENAV;
}


export type Actions = OpenSidenavAction | CloseSidenavAction;
