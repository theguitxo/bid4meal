import { Component, OnInit } from '@angular/core';
import { BookingService } from './services/booking.service';
import { finalize } from 'rxjs/operators';
import { Booking } from './interfaces/booking';
import { Meal } from './interfaces/meal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  loading: boolean; // controls if data is loading
  error: boolean; // for control if an error has produced loading data

  bookingInfo: Booking;
  mealOptions: Array<Meal>;
  
  constructor(private bookingService: BookingService) {}

  /**
   * @name ngOnInit
   * @description init the values of the component and calls 
   *              a method of booking service to get the data
   */
  ngOnInit(): void {
    
    this.loading = true;
    this.error = false;

    let dataLoader = this.bookingService.loadBookingData()
      .pipe(finalize(() => {
        dataLoader.unsubscribe();
        this.loading = false;
      }))
      .subscribe(
        () => {

          this.bookingInfo = this.bookingService.getBookingInfo();
          this.mealOptions = this.bookingService.getMealOptions();

        },
        () => {
          this.error = true;
        }
      );
      
  }

}
