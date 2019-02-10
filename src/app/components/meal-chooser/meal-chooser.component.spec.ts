import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule} from '@angular/forms';

import { MealChooserComponent } from './meal-chooser.component';
import { JourneyInfoComponent } from '../journey-info/journey-info.component';
import { MealListComponent } from '../meal-list/meal-list.component';
import { ModalContainerComponent } from '../modal-container/modal-container.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { By } from '@angular/platform-browser';



describe('MealChooserComponent', () => {
  let component: MealChooserComponent;
  let fixture: ComponentFixture<MealChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealChooserComponent, JourneyInfoComponent, MealListComponent, ModalContainerComponent ],
      imports: [ FontAwesomeModule, FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealChooserComponent);
    component = fixture.componentInstance;

    component.journeys = [
      {
        "key": "TST12 BCN-LAX 30/08/2014 08:35",
        "flight": "TST 12",
        "departure": "BCN",
        "departureDate": "2014-08-30T08:35:00.000+08:00",
        "arrival": "LAX",
        "arrivalDate": "2014-08-30T19:45:00.000+08:00"
      },
      {
        "key": "TST21 LAX-BCN 30/09/2014 08:35",
        "flight": "TST 21",
        "departure": "LAX",
        "departureDate": "2014-09-30T08:35:00.000+08:00",
        "arrival": "BCN",
        "arrivalDate": "2014-09-30T19:45:00.000+08:00"
      }
    ];
    component.locale = 'en-US';
    component.meals = [
      {
        "mealId": "ML01",
        "desc": "Snacks & Soda",
        "priceRange": {
          "min": 0,
          "max": 20,
          "jump": 5
        },
        "currency": "EUR"
      },
      {
        "mealId": "ML02",
        "desc": "Light Dinner: Salad & Wine",
        "priceRange": {
          "min": 0,
          "max": 50,
          "jump": 10
        },
        "currency": "EUR"
      },
      {
        "mealId": "ML03",
        "desc": "Dinner or Lunch: Meat with Pasta, Salad, Brad rolls, Tiramisu Cake, Cheese and Crackers.",
        "priceRange": {
          "min": 0,
          "max": 100,
          "jump": 25
        },
        "currency": "EUR"
      },
      {
        "mealId": "ML04",
        "desc": "Breackfast: Yogurt, Juice or Cooffe, Bread and Cookies",
        "priceRange": {
          "min": 0,
          "max": 20,
          "jump": 5
        },
        "currency": "EUR"
      }
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show modal for info', () => {

    component.showFinalChoose = true;
    
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.final-choose'))).toBeTruthy();

    component.showFinalChoose = false;

    fixture.detectChanges();
  
  });

});
