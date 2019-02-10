import { async, TestBed } from '@angular/core/testing';

import { BookingService } from './booking.service';
import { RequestsService } from './requests.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isObservable } from '@angular/core/src/util/lang';

describe('BookingService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      RequestsService
    ]
  }));

  it('should be created', () => {

    const service: BookingService = TestBed.get(BookingService);
    expect(service).toBeTruthy();

  });

  it('should the service calls the method to load data and returns items in the meals list', async(() => {

    const service: BookingService = TestBed.get(BookingService);
    service.loadBookingData()
      .subscribe(
        () => {
          expect(service.getMealOptions().length).toBeGreaterThan(0);
        },
        () => {}
      );
             
  }));

  it('should the service calls the method to load data and returns the info of the booking', async(() => {

    const service: BookingService = TestBed.get(BookingService);
    service.loadBookingData()
      .subscribe(
        () => {
          expect(service.getBookingInfo()).not.toBeUndefined()
          expect(service.getBookingInfo()).not.toBeNull();          
        },
        () => { }
      );

  }));

});
