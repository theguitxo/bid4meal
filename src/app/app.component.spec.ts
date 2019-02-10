import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { BookingInfoComponent } from './components/booking-info/booking-info.component';
import { PassengersListComponent } from './components/passengers-list/passengers-list.component';
import { MealChooserComponent } from './components/meal-chooser/meal-chooser.component';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { JourneyInfoComponent } from './components/journey-info/journey-info.component';
import { MealListComponent } from './components/meal-list/meal-list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TitleBarComponent,
        BookingInfoComponent,
        PassengersListComponent,
        MealChooserComponent,
        ModalContainerComponent, 
        LoadingSpinnerComponent,
        JourneyInfoComponent,
        MealListComponent
      ],
      imports: [
        FontAwesomeModule,
        FormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create the app', () => {
    
    expect(component).toBeTruthy();

  });
  
});