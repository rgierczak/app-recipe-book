import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

import { Recipe } from "../recipe";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import { RecipeService } from "../recipe.service";

@Component({
    selector: 'rb-recipe-detail',
    templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    private recipeIndex: number;
    selectedRecipe: Recipe;

    constructor(private shoppingListService: ShoppingListService,
                private route: ActivatedRoute,
                private recipesService: RecipeService) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            (params: any) => {
                this.recipeIndex = params['id'];
                this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
            }
        );
    }

    onAddToShoppingList() {
        this.shoppingListService.addItems(this.selectedRecipe.ingrediens);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
