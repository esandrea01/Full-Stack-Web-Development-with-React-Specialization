import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

// the standard selector name that cli created is 'app-menu'
// the same selector tag has to be used in the template
@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

	dishes: Dish[];
	// Event below line is right - which also has the type specified
	// dishes: Dish[] = DISHES;

	selectedDish: Dish;
	constructor(private dishService: DishService) { }

	ngOnInit() {
		this.dishService.getDishes()
      .subscribe((dishes) => this.dishes = dishes);
	}

  onSelect(dish: Dish) {
  this.selectedDish = dish;
  }

}
