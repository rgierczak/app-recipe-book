import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient";
import { ShoppingListService } from "./shopping-list.service";

@Component({
    selector: 'rb-shopping-list-add',
    templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit {
    item: Ingredient;
    isAdd = true;

    constructor(private shoppingListService: ShoppingListService) {}

    ngOnInit() {}

    onSubmit(ingredient: Ingredient) {
        if (!this.isAdd) {
            // Edit
        } else {
            this.item = new Ingredient(ingredient.name, ingredient.amount);
            this.shoppingListService.addItem(this.item);
        }
    }
}
