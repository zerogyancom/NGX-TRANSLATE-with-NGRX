import { NgModule, ModuleWithProviders, FactoryProvider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';



export function myTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http);
}

/*
 export function myTranslateChildLoader(http:HttpClient){
   return new TranslateHttpLoader(http,'./assets/i18n/fin/','.json');
 }
*/

export const appTranslateProvider: FactoryProvider = {
  provide: TranslateLoader,
  useFactory:myTranslateLoader,
  deps:[HttpClient]
}

// export const appTranslateChildProvider: FactoryProvider = {
//   provide: TranslateLoader,
//   useFactory:myTranslateChildLoader,
//   deps:[HttpClient]
// }

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader:appTranslateProvider,
      isolate:false
    })
  ],
  exports:[
    CommonModule,
    TranslateModule
  ]
})
export class SharedModule { 

  // static forRoot():ModuleWithProviders {
  //   return {
  //     ngModule:SharedModule
  //   };
  // }

  // static forChild():ModuleWithProviders{
  //   return {
  //     ngModule:SharedModule
  //   };
  // }

}
