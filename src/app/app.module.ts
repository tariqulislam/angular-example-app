import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatIconModule} from "@angular/material/icon"
import {MatTableModule} from "@angular/material/table";
import { AboutUsComponent } from './components/about-us/about-us.component'
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from "@angular/material/button"
import {ReactiveFormsModule} from "@angular/forms"
import {MatInputModule} from '@angular/material/input';
import { AppInitService } from './app-init.service';

export const  appStartupServiceFactory =  (startupService: AppInitService): Function  => () => startupService.load()

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appStartupServiceFactory,
      deps: [AppInitService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
