import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DotorSearchFieldComponent } from './search_doctors/main/dotor-search-field/dotor-search-field.component';
import { SearchResultsComponent } from './search_doctors/main/search_results/search-results/search-results.component';
@NgModule({
  declarations: [
    AppComponent,
    DotorSearchFieldComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
