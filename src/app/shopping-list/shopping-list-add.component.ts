import { Component, OnChanges, Input } from '@angular/core';
import { Ingredient } from "../shared/ingredient";
import { ShoppingListService } from "./shopping-list.service";

@Component({
    selector: 'rb-shopping-list-add',
    templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
    @Input() item: Ingredient;
    isAdd = true;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnChanges(changes) {
        if (changes.item.currentValue === null) {
            this.isAdd = true;
        } else {
            this.isAdd = false;
        }
    }

    onSubmit(ingredient: Ingredient) {
        if (!this.isAdd) {
            // Edit
        } else {
            this.item = new Ingredient(ingredient.name, ingredient.amount);
            this.shoppingListService.addItem(this.item);
        }
    }
}
