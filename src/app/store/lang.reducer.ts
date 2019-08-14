import { createReducer, Action, on } from '@ngrx/store';
import * as langActions from './lang.action';
import { LocalStorageService } from 'angular-web-storage';

export interface LangState {
    locale:string;

}
const ls = new LocalStorageService();
//export const initialLang:LangState = {locale:"en"};
export const initialLang:LangState = JSON.parse(ls.get("i18nLocale") || '{"locale":"en"}');

const langReducer = createReducer(initialLang, on(langActions.localeAction, (state, act)=>({
    ...state,
    ...act
})));



export function reducer(state:LangState, action:Action){
    console.log('it is reducer',action)
    if(action["locale"]) ls.set("i18nLocale",`{"locale":"${action["locale"]}"}`);
    return langReducer(state, action);
}

