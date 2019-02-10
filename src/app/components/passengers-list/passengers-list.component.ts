import { Component, Input } from '@angular/core';
import { Passenger } from 'src/app/interfaces/passenger';

@Component({
  selector: 'app-passengers-list',
  templateUrl: './passengers-list.component.html',
  styleUrls: ['./passengers-list.component.scss']
})
export class PassengersListComponent {

  @Input('passengers') passengers: Array<Passenger>; // the passengers list to show
  
}
