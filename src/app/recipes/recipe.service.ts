import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Very tasty', 'http://tinyurl.com/jzmeuv5', [
            new Ingredient('French Fries', 2),
            new Ingredient('Pork Meat', 1)
        ]),
        new Recipe('Summer Salad', 'Okayish', 'http://tinyurl.com/hzjofoz', [])
    ];

    constructor() {}

    getRecipies() {
        return this.recipes;
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    deleteRecipe(recipe: Recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }
}
