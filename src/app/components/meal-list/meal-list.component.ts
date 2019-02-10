import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from 'src/app/interfaces/meal';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {

  @Input('meals') meals: Array<Meal>; // the list of available meals
  @Input('dataSelected') dataSelected: any; // data of a previous meal selection

  @Output('accept') accept: EventEmitter<any> = new EventEmitter<any>(); // action when user accepts the selection
  @Output('cancel') cancel: EventEmitter<void> = new EventEmitter<void>(); // action for cancel and close the modal

  prices: Array<number>; // list of selected prices by each meal
  selected: number; // 
  errorPrice: boolean;

  constructor() {         
    this.selected = null;
    this.errorPrice = false;    
  }
  
  /**
   * @name ngOnInit
   * @description initializes values for the list of selected prices and assign the selected value, if exists it
   */
  ngOnInit(): void {
    
    this.prices = new Array(this.meals.length).fill(0);
    
    if (this.dataSelected.meal !== null) {

      this.selected = this.meals.findIndex(meal => meal.mealId === this.dataSelected.meal.mealId);
      this.prices[this.selected] = this.dataSelected.price;

    }    
    
  }

  /**
   * @name selectMeal
   * @description checks if the price is correct, if it's, sets the meal as selected, otherwise, shows an error
   * @param idx the index to check
   */
  selectMeal(idx: number): void {

    this.errorPrice = false;

    if(this.prices[idx] === 0) {
      this.errorPrice = true;  
      this.selected = null;
    } else {
      this.selected = idx;
    }

  }

  /**
   * @name checkPrice
   * @description when the user changes one of the prices checks it and, if isn't correct, shows an error
   * @param idx the index to check
   */
  checkPrice(idx: number): void {
  
    if(this.prices[idx] === 0 && this.selected === idx) {
      this.errorPrice = true;
      this.selected = null;
    }

  }
  
  /**
   * @name cancelSelection
   * @description cancels the action of select a meal and closes the modal
   */
  cancelSelection(): void {
    this.cancel.emit();
  }

  /**
   * @name acceptSelection
   * @description sends the information of the selected meal to the meal 
   *              chooser component to assign it to their journey and closes the modal
   */
  acceptSelection(): void {

    let selection: any = {    
      meal: this.meals[this.selected],
      price: this.prices[this.selected]
    };

    this.accept.emit(selection);

  }

}
