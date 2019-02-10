import { Injectable } from '@angular/core';
import { RequestsService } from './requests.service';
import { Booking } from '../interfaces/booking';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Meal } from '../interfaces/meal';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  private dataFile: string;

  private mealOptions: Array<Meal>;
  private bookingInfo: Booking;

  /**
   * @name constructor
   * @description init the values that needs the service
   */
  constructor(private requestsService: RequestsService) { 
    this.dataFile = './assets/bookingInfo.json';
  }

  loadBookingData(): Observable<any> {

    let observable: Observable<any> = new Observable(observer => {
      
      this.requestsService.loadJSONData(this.dataFile)
        .pipe(finalize(() => {
          observer.complete();
        }))
        .subscribe(
          (data) => {

            this.mealOptions = data.options;
            this.bookingInfo = data.booking;
            
            this.bookingInfo.journeys.forEach((journey) => {

              let url = 'https://iatacodes.org/api/v6/airports.jsonp?&JSONP_CALLBACK&api_key=b949d5c9-30f6-4da5-86af-8e78c4eb1dae&code=';

              this.requestsService.loadJSONPData(`${url}${journey.departure}`, 'callback')
                .subscribe(
                  (data) => {
                    journey.departureAirport = data['response'][0].name;
                  },
                  () => {}
                )
            
              this.requestsService.loadJSONPData(`${url}${journey.arrival}`, 'callback')
                .subscribe(
                  (data) => {
                    journey.arrivalAirport = data['response'][0].name;
                  },
                  () => {}
                )

            });
            
            observer.next();

          },
          () => {
            observer.next();
          }
        );

    });

    return observable;

  }

  getMealOptions(): Array<Meal> {
    return this.mealOptions;
  }

  getBookingInfo(): Booking {
    return this.bookingInfo;
  }


  
}
