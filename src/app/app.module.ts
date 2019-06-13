import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CustomMaterialModule } from './_helpers/custom-material/custom-material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
