import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PhotoService } from './photos/photo/photo.service';

import { ErrorsModule } from './errors/errors.module';
import { PhotosModule } from './photos/photos.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    PhotosModule,
    ErrorsModule,
    HomeModule,
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
