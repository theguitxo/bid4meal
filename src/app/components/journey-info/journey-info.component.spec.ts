import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JourneyInfoComponent } from './journey-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('JourneyInfoComponent', () => {
  let component: JourneyInfoComponent;
  let fixture: ComponentFixture<JourneyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneyInfoComponent ],
      imports: [FontAwesomeModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(JourneyInfoComponent);
    component = fixture.componentInstance;

    component.journey = {
      key: 'TST12 BCN-LAX 30/08/2014 08:35',
      flight: 'TST 12',
      departure: 'BCN',
      arrival: 'LAX',
      departureDate: '2014-08-30T08:35:00.000+08:00',
      arrivalDate: '2014-08-30T19:45:00.000+08:00'
    };

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should show code or airport because name is not available', () => {
    expect(component.airportName('departure')).toBe(component.journey.departure);
  });

});
