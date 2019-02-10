import { Passenger } from './passenger';
import { Journey } from './journey';
export interface Booking {
    recordLocator: string;
    status: string;
    culture: string;
    passengers: Array<Passenger>;
    journeys: Array<Journey>;
}
