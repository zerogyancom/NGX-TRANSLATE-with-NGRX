import { createAction, props } from '@ngrx/store';

export const localeAction = createAction("[App page] locale", props<{locale:string}>());