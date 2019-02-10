import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.scss']
})
export class BookingInfoComponent {

  @Input('recordLocator') recordLocator: string; // String with the record locator
  @Input('status') status: string; // String with the status of the record locator
  
}
