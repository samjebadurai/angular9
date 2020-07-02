import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import {AppRoutingModule} from './app-routing.module';
import { HeroesComponent } from './heroes/heroes.component'
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    HeroesComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxImageGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
