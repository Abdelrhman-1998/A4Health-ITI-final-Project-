import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DotorSearchFieldComponent } from './search_doctors/main/dotor-search-field/dotor-search-field.component';
import { SearchResultsComponent } from './search_doctors/main/search_results/search-results/search-results.component';
import { OptionComponent } from './search_doctors/main/dotor-search-field/option/option.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    DotorSearchFieldComponent,
    SearchResultsComponent,
    OptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
