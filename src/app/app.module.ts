import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateModule } from '@ngx-translate/core';
import { AngularWebStorageModule } from 'angular-web-storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store';
import { appTranslateProvider } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularWebStorageModule,
    TranslateModule.forRoot({loader:appTranslateProvider, isolate:false }),
    StoreModule.forRoot({'lang':reducer})
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
