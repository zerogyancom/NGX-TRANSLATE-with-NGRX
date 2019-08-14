import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Store } from '@ngrx/store';
import { localeAction } from './../store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private ts:TranslateService, 
    private store:Store<{locale:string}>
    ) { }

    locale = "";
    ngOnInit(){
      this.store.subscribe(v=>{
        this.locale = v['lang'].locale;
        console.log(v,"home-page--vvvv")
      });
    }


  changeLang(lang){
    this.ts.use(lang);
    this.store.dispatch(localeAction({locale:lang}));
  }

}
