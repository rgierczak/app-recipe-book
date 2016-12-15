import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient";
import { ShoppingListService } from "./shopping-list.service";

@Component({
    selector: 'rb-shopping-list-add',
    templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
    @Input() item: Ingredient;
    @Output() cleared = new EventEmitter();
    isAdd = true;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnChanges(changes) {
        if (changes.item.currentValue === null) {
            this.isAdd = true;
            this.item = {name: null, amount: null};
        } else {
            this.isAdd = false;
        }
    }

    onSubmit(ingredient: Ingredient) {
        const newIngredient = new Ingredient(ingredient.name, ingredient.amount);

        if (!this.isAdd) {
            this.shoppingListService.editItem(this.item, newIngredient);
            this.onClear();
        } else {
            this.item = newIngredient;
            this.shoppingListService.addItem(this.item);
        }
    }

    onDelete() {
        this.shoppingListService.deleteItem(this.item);
        this.onClear();
    }

    onClear() {
        this.isAdd = true;
        this.cleared.emit(null);
    }
}
