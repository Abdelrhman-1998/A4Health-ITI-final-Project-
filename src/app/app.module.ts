import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DotorSearchFieldComponent } from './search_doctors/main/dotor-search-field/dotor-search-field.component';
import { SearchResultsComponent } from './search_doctors/main/search_results/search-results/search-results.component';
import { OptionComponent } from './search_doctors/main/dotor-search-field/option/option.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RatingStarsPipe } from './rating-stars.pipe';
@NgModule({
  declarations: [
    AppComponent,
    DotorSearchFieldComponent,
    SearchResultsComponent,
    OptionComponent,
    RatingStarsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
