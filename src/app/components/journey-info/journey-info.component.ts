import { Component, OnInit, Input } from '@angular/core';
import { Journey } from '../../interfaces/journey';
import { faPassport, faPlaneArrival, faPlaneDeparture, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-journey-info',
  templateUrl: './journey-info.component.html',
  styleUrls: ['./journey-info.component.scss']
})
export class JourneyInfoComponent implements OnInit {

  @Input('journey') journey: Journey; // Object with information of the journey
  @Input('locale') locale: string; // location code of the booking

  // Icons
  faPassport: any;
  faPlaneArrival: any;
  faPlaneDeparture: any;
  faCalendar: any;
  faClock: any;

  // Some strings for store values of the date and hour of the journeys
  departureDate: string;
  departureHour: string;
  arrivalDate: string;
  arrivalHour: string;
  
  /**
   * @name ngOnInit
   * @description initializes the values for the icons, the text and format 
   *              of the departure and arrival information
   */
  ngOnInit(): void {
    
    // icons
    this.faPassport = faPassport;
    this.faPlaneArrival = faPlaneArrival;
    this.faPlaneDeparture = faPlaneDeparture;
    this.faCalendar = faCalendar;
    this.faClock = faClock;
    
    // dates
    this.departureDate = new Date(this.journey.departureDate).toLocaleDateString(this.locale, {
      'month': '2-digit',
      'day': '2-digit',
      'year': 'numeric'
    });
    this.arrivalDate = new Date(this.journey.arrivalDate).toLocaleDateString(this.locale, {
      'month': '2-digit',
      'day': '2-digit',
      'year': 'numeric'
    });
    
    // hours
    this.departureHour = new Date(this.journey.departureDate).toLocaleTimeString(this.locale, {
      'hour': '2-digit', 'minute': '2-digit'
    });
    this.arrivalHour = new Date(this.journey.arrivalDate).toLocaleTimeString(this.locale, {
      'hour': '2-digit', 'minute': '2-digit'
    });
    
  }
  
  /**
   * @name airportName
   * @description resolves the string that must shows it with the airport information
   * @param type type of the journey, can be departure or arrival
   * @returns a string with the name and code of the airport,
   *          if didn't had any problem when requesting the airport name,
   *          otherwise, only the code
   */
  airportName(type: string): string {
    return this.journey[`${type}Airport`] ? this.journey[`${type}Airport`] + ' (' + this.journey[type] + ')' : this.journey[type];
  }

}
