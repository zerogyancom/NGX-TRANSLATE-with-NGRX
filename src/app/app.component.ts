import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private store:Store<{lang:string}>,
    private ts:TranslateService
    ){}


  ngOnInit(){
    this.store.select<{locale:string}>("lang").subscribe(v=>{ 
      console.log("i am locale:", v);
      let {locale} = v;
      this.ts.use(locale);
    });
  }
}
