import { Component, OnInit, Input } from '@angular/core';
import { Journey } from 'src/app/interfaces/journey';
import { Meal } from 'src/app/interfaces/meal';
import { faAngleDoubleRight, faTimesCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MealChoosed } from '../../interfaces/meal-choosed';
import { FinalChoose } from '../../interfaces/final-choose';

@Component({
  selector: 'app-meal-chooser',
  templateUrl: './meal-chooser.component.html',
  styleUrls: ['./meal-chooser.component.scss']
})
export class MealChooserComponent implements OnInit {

  @Input('journeys') journeys: Array<Journey>; // list of journeys to assign meals
  @Input('meals') meals: Array<Meal>; // list of availables meals
  @Input('locale') locale: string; // locale code of the booking

  showMealChooser: boolean; // for control if the list of meals to choose must be visible or not
  mealSelection: Array<any>; // meals selected for the journeys
  journeySelected: number; // journey which selected for assign a meal
  dataSelected: Meal; // meal data of a journey to send to the meals selector
  finalChoose: FinalChoose; // object with the data of the meals choosed by the user
  showFinalChoose: boolean; // for control when the modal with the final choose information must be shown

  // icons
  faAngleDoubleRight = faAngleDoubleRight;
  faTimesCircle = faTimesCircle;

  /**
   * @name constructor
   * @description initializes values for the meal choosing
   */
  constructor() { 
    
    this.showMealChooser = false; 
    this.finalChoose = {
      selection: []
    };
    this.showFinalChoose = false;

  }

  /**
   * @name ngOnInit
   * @description initializes an array for store the information of the user chooses
   */
  ngOnInit(): void {
  
    this.mealSelection = Array(this.journeys.length).fill({      
      meal: null,
      price: null
    });
      
  }

  /**
   * @name openMealChooser
   * @description opens the list of available meals to choose one for a journey
   * @param idx index in the list of journeys to which the food will be assigned
   */
  openMealChooser(idx: number): void {        

    this.journeySelected = idx;
    this.dataSelected = this.mealSelection[this.journeySelected];
    this.showMealChooser = true;
    
  }

  /**
   * @name acceptSelection
   * @description action to execute when the user accept the meal selection for a journey
   * @param data data of the selected meal
   */
  acceptSelection(data: any): void {

    this.mealSelection[this.journeySelected] = {
      meal: data.meal,
      price: data.price
    }
    this.showMealChooser = false;
    
  }

  /**
   * @name cancelSelection
   * @description close the meals selector without didn't make any action
   */
  cancelSelection(): void {
    this.showMealChooser = false;
  }

  /**
   * @name showSendButton
   * @description indicates if the button to send the chooses can be shown
   * @returns a boolean, true if must show it, otherwise, false
   */
  showSendButton(): boolean {    
    return this.mealSelection.every(selection => selection.meal !== null);
  }

  /**
   * @name sendChoose
   * @description opens a modal that show the information of the meals choosed
   */
  sendChoose(): void {

    this.finalChoose.selection = [];

    this.mealSelection.forEach((meal, index) => {

      let item: MealChoosed = {
        'journeyKey': this.journeys[index].key,
        'amount': meal.price,
        'currency': meal.meal.currency,
        'mealId': meal.meal.mealId
      }

      this.finalChoose.selection.push(item);

    });

    this.showFinalChoose = true;

  }

  /**
   * @name closeFinalChoose
   * @description closes the modal that shows the meals choosed information
   */
  closeFinalChoose(): void {
    this.showFinalChoose = false;
  }

}
