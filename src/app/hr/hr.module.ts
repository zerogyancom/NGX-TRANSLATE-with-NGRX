import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HomeComponent } from './home/home.component';

import { SharedModule } from '../shared/shared.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// export function httpLoaderFactory(http:HttpClient){
//   //return new TranslateHttpLoader(http,'./assets/i18n/hr/','.json');
//   return new TranslateHttpLoader(http);
// }


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HrRoutingModule,
    HttpClientModule,
    SharedModule
    // TranslateModule.forChild({
    //   loader:{
    //     provide: TranslateLoader,
    //     useFactory: httpLoaderFactory,
    //     deps:[HttpClient]
    //   },
    //   isolate:false    })
  ]
})
export class HrModule { }
