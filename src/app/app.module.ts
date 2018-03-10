import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { VrSceneComponent } from './vr-scene/vr-scene.component';

// import '../web-components/Tabs';
// import '../web-components/Tab';


@NgModule({
  declarations: [
    AppComponent,
    VrSceneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
