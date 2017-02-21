import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomModuleFactoryLoader } from "./custom-module-factory-loader";

const routes = [
  {
    path: '',
    loadChildren: './random/random.module#RandomModule',
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
      { provide: NgModuleFactoryLoader, useClass: CustomModuleFactoryLoader },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
