import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { PassengersListComponent } from './components/passengers-list/passengers-list.component';
import { BookingInfoComponent } from './components/booking-info/booking-info.component';
import { MealChooserComponent } from './components/meal-chooser/meal-chooser.component';
import { JourneyInfoComponent } from './components/journey-info/journey-info.component';
import { MealListComponent } from './components/meal-list/meal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalContainerComponent,
    LoadingSpinnerComponent,
    TitleBarComponent,
    PassengersListComponent,
    BookingInfoComponent,
    MealChooserComponent,
    JourneyInfoComponent,
    MealListComponent    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
