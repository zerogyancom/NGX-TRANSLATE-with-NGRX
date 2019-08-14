import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription} from 'rxjs';

import { localeAction } from './../../store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private translateService:TranslateService,
    private store:Store<{locale:string}>
    ) {}

   locale="";
   subscription:Subscription;
   
   ngOnInit(){
     this.subscription = this.store.subscribe(v=>{
      this.locale = v['lang'].locale;
      console.log(v,"fin-home-page--vvvv")
    });
  }

  changeLang(lang){
    this.translateService.use(lang);
    this.store.dispatch(localeAction({locale:lang}));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
