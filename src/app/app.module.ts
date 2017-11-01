import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { routes } from './routes';
import * as pages from './pages';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    pages.ItemsComponent,
    pages.WidgetsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
