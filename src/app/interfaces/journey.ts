export interface Journey {
    key: string;
    flight: string;
    departure: string;
    departureDate: string;
    arrival: string;
    arrivalDate: string;  
    departureAirport?: string;
    arrivalAirport?: string;  
}
